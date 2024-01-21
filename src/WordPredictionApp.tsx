import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem, List, ListItem, SelectChangeEvent } from '@mui/material';
import * as tf from '@tensorflow/tfjs';

const WordPredictionApp = () => {
    const [text, setText] = useState<string>('');
    const [model, setModel] = useState<any>(null);
    const [modelName, setModelName] = useState<string>('1');
    const [wordSuggestions, setWordSuggestions] = useState<string[]>([]);
    const [selectedWord, setSelectedWord] = useState<string | null>(null);

    const loadModel = async () => {
        if (modelName === "1") return;
        console.log('Load model' + modelName)
        const loadedModel = await tf.loadLayersModel(
            `https://strong-smakager-252635.netlify.app/${modelName}/${modelName}.json`
        );
        setModel(loadedModel);
        loadedModel.summary()
    };

    const loadTokenizer = async () => {
        const response = await fetch(
            `https://strong-smakager-252635.netlify.app/tokenizer/tokenizer${modelName}.json`
        );
        const tokenizer = await response.json();
        console.log('Tokenizer loaded' + tokenizer.toString());
        return tokenizer;
    };

    // tokenize function to convert input text to list of tokenized segments
    function tokenize(text, tokenizer) {
        text = text.toLowerCase();
        text = text.replace(/[!"#$%&()*+,-./:;<=>?@\[\\\]\^_`{|}~\t\n]/g, '')
        var split_text = text.split(' ');
        var tokens = [];
        split_text.forEach(element => {
            if (tokenizer[element] != undefined) {
                tokens.push(tokenizer[element]);
            }
        });
        // create a list of slices of the list of tokens
        let i = 0;
        const tokenized_text_segments = [];
        while (i + 50 < Math.max(tokens.length, 100)) {
            var new_slice = tokens.slice(i, i + 100);
            while (new_slice.length < 100) {
                new_slice.push(0);
            }
            tokenized_text_segments.push(new_slice);
            i = i + 50;
        }
        return tokenized_text_segments;
    }


    const predictNextWord = async () => {
        const tokenizer = await loadTokenizer();
        const tokenizedText = tokenize(text, tokenizer);

        if (!tokenizedText) {
            console.error('Die Eingabe konnte nicht tokenisiert werden.');
            return;
        }

        console.log(tokenizedText);
        console.log(tokenizer.length);

        const fakeWords = ['Nachmittag', 'wann', 'und', 'der'];  // Ersetzen Sie diese durch Ihre eigenen vorgetäuschten Wörter
        setWordSuggestions(fakeWords);

        try {
            const inputTensor = tf.tensor2d(tokenizedText, [1, tokenizedText.length]);
            const prediction = model.predict(inputTensor);
            const predictedWord = prediction.dataSync()[0];  // Nehmen Sie das erste Element der Vorhersage
            setWordSuggestions([predictedWord]);
        } catch (error) {
            console.error('Die Vorhersage ist fehlgeschlagen.', error);
        }

    };

    useEffect(() => {
        loadModel();
    }, [modelName]); // This will run every time modelName changes

    const handleModelChange = (event: any) => {
        const name = event.target.value;
        setModelName(name);
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleWordSuggestionClick = (word: string) => {
        setText((prevText) => prevText + ' ' + word);
        setWordSuggestions([]);
        setSelectedWord(null);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Tab' && wordSuggestions.length > 0) {
            event.preventDefault();
            setText((prevText) => prevText + ' ' + wordSuggestions[0]);
            setWordSuggestions([]);
            setSelectedWord(null);
        }
    };

    useEffect(() => {
        if (text) {
            predictNextWord();
        }
    }, [text]);

    return (
        <div style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <h1>Wortvorhersage mit TensorFlow.js</h1>
            <h5>Hinweis: Das Modell wird zwar geladen, aber die Prediction ist nicht Fehlerfrei. Deswegen wird eine Dummy-Liste angezeigt, um die Funktion zu demonstrieren. Das Laden der Modelle wird in der Console dokumentiert.</h5>
            <Select value={modelName} onChange={handleModelChange}>
                <MenuItem value="1">Bitte wählen Sie ein Modell aus</MenuItem>
                <MenuItem value="ffnn">FFNN</MenuItem>
                <MenuItem value="rnn">RNN</MenuItem>
            </Select>

            <div style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'row' }}>
                <TextField
                    multiline
                    rows={4}
                    fullWidth
                    placeholder="Geben Sie hier Ihren Text ein..."
                    style={{ marginBottom: '20px', width: '50%', marginRight: '20px', marginTop: '20px' }}
                    value={text}
                    onChange={handleTextChange}
                    onKeyDown={handleKeyDown}
                />

                <div>
                    <h5>Clicken sie ein Wort an oder drücken sie Tab</h5>
                    <List>
                        {wordSuggestions.map((word, index) => (
                            <ListItem key={index} onClick={() => handleWordSuggestionClick(word)}>
                                {word}
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div></div>
    );
};

export default WordPredictionApp;
