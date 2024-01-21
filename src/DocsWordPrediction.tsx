import React from 'react';

import DocumentationSection from './components/DocumentationSection';
import { Container, Paper, Typography } from '@mui/material';


const DocsWordPrediction = () => {

    return (
        <div>
            <Container maxWidth="md" style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif' }}>
                <Typography variant="h2" align="center" gutterBottom>
                    Dokumentation
                </Typography>

                {/* Interaktionsdokumentation */}
                <DocumentationSection
                    title="1) Interaktion"
                    content={[
                        "Der Benutzer kann zwischen zwei Modellen wählen: einem FFNN Modell und einem RNN Modell",
                        "Der Benutzer kann in der Eingabefeld Wörter eingeben und sich die nächsten Wörter vorschlagen lassen.",
                    ]}
                />

                {/* Technische Dokumentation */}
                <DocumentationSection
                    title="2) Technisch"
                    content={[
                        "Verwendete Frameworks:",
                        "- React: Eine JavaScript-Bibliothek zur Entwicklung von Benutzeroberflächen.",
                        "- @mui/material: Das Material-UI-Framework für React, das vorgefertigte UI-Komponenten bereitstellt.",
                        "- TensorFlow.js (tfjs): Eine JavaScript-Bibliothek für maschinelles Lernen.",
                        "",
                        "Technische Besonderheiten:",
                        "- TensorFlow.js: Das Modell wird mithilfe von TensorFlow.js erstellt, trainiert und getestet.",
                        "- React Hooks werden verwendet, um den Zustand der Komponente zu verwalten und asynchrone Operationen durchzuführen.",
                        "- Die Anwendung integriert das Material-UI-Framework für ein ansprechendes Benutzererlebnis.",
                        "",
                        "Bereitstellung:",
                        "- Netlify: Diese App wird mit Netlify bereitgestellt. Netlify ist ein All-in-one-Plattform, die automatisches Bauen, Bereitstellen und Servern Ihrer Webprojekte ermöglicht.",
                    ]}
                />

                {/* Fachliche Dokumentation */}
                <DocumentationSection
                    title="3) Fachlich"
                    content={[
                        "Implementierung der Logik:",
                        "Die Modelle (FFNN und RNN) werden mithilfe von TensorFlow erstellt und trainiert.",
                        "Für die FFNN-Implementierung wird ein Feedforward Neural Network verwendet.",
                        "Die RNN-Implementierung verwendet ein Recurrent Neural Network mit LSTM-Schichten.",
                        // ... Weitere fachliche Informationen hier
                    ]}
                />

                {/* Quellen und Benutzungshinweise */}
                <DocumentationSection
                    title="5) Quellen"
                    content={[
                        "React-Dokumentation: (https://reactjs.org/docs/getting-started.html)",
                        "Material-UI-Dokumentation: (https://mui.com/getting-started/installation/)",
                        "TensorFlow.js-Dokumentation: (https://www.tensorflow.org/js)",
                        "Netify: (https://www.netlify.com/docs/)",
                        "TensorFlow.js-Beispiele: (https://jaketae.github.io/study/auto-complete/, https://towardsdatascience.com/next-word-prediction-with-nlp-and-deep-learning-48b9fe0a17bf)"
                        // ... Weitere Quellen hier
                    ]}
                />

                <DocumentationSection
                    title="6) Benutzungshinweise"
                    content={[
                        "Modell auswählen.",
                        "Text in das Eingabefeld eingeben.",
                        "Die nächsten Wörter werden automatisch vorgeschlagen.",
                    ]}
                />

                <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', background: '#fcebeb' }}>
                    <Typography variant="h4" gutterBottom>
                        Dokumentation der Parameter und Einstellungen
                    </Typography>

                    {/* FFNN-Modell */}
                    <Paper elevation={1} style={{ padding: '10px', margin: '10px 0', background: '#fcebeb' }}>
                        <Typography variant="h6" gutterBottom>
                            Feedforward Neural Network (FFNN)
                        </Typography>
                        <Typography>
                            <strong>Modellkonfiguration:</strong>
                            <ul>
                                <li>Input-Layer: Dense-Layer mit 10000 Einheiten und ReLU-Aktivierung.</li>
                                <li>Hidden Layers: Dense-Layer mit 256 Einheiten, Batch-Normalization und ReLU-Aktivierung.</li>
                                <li>Output-Layer: Dense-Layer mit 10000 Einheiten und Softmax-Aktivierung.</li>
                            </ul>
                        </Typography>
                        <Typography>
                            <strong>Begründung:</strong> Das Modell verwendet eine breite Palette von Einheiten in den Hidden Layers und Batch-Normalization, um Muster besser zu erfassen und Overfitting zu reduzieren.
                        </Typography>
                        <Typography >
                            <strong> Leistungsdaten des FFNN-Modells:</strong>

                            Das FFNN-Modell wurde für 50 Epochen trainiert. In jeder Epoche wurden 519 Batches verarbeitet. Während des Trainings betrug der Verlust (loss) 1.6581 mit einer Genauigkeit (accuracy) von 65.73%. Auf dem Validierungsset wurde ein Verlust von 12.8531 und eine Genauigkeit von 1.11% festgestellt.
                        </Typography>
                        <Typography>
                            <strong>Vorherige Experimente:</strong>
                            Bevor das Modell gefunden wurde, wurde mit verschiedenen Architekturen und Hyperparameterkonfigurationen experimentiert.
                            Die verschiedenen Modelle wurden mit unterschiedlichen Architekturen und Hyperparameterkonfigurationen erstellt, wobei jedes Modell seine eigenen Herausforderungen und Schwächen aufwies.

                            Das erste Feedforward Neural Network (FFNN) Modell wies Anzeichen von Overfitting auf, da die Trainingsgenauigkeit (92,65%) erheblich höher war als die Validierungsgenauigkeit (8,06%). Die Architektur umfasste einen Flatten-Layer gefolgt von mehreren Dense-Layern mit verschiedenen Aktivierungsfunktionen.

                            Das zweite FFNN-Modell integrierte Regularisierungstechniken wie L1-L2-Regularisierung und Batch-Normalization, um Overfitting zu reduzieren. Dennoch konnte Overfitting nicht vollständig behoben werden, und die Auswahl der Anzahl der Neuronen in den Hidden Layers und Aktivierungsfunktionen könnte suboptimal gewesen sein.

                            Das Long Short-Term Memory (LSTM) Modell zeigte im Vergleich zu den FFNN-Modellen eine verbesserte Leistung. Mit einer LSTM- und einer Bidirectional-LSTM-Schicht konnte das Modell langfristige Abhängigkeiten in den Daten besser erfassen.

                            Das dritte FFNN-Modell, das als das beste Modell herausstach, zeigte optimierte Hyperparameter und Architektur. Es umfasste Dense-Layer mit Batch-Normalization, was dazu beitrug, die Konvergenz zu beschleunigen und Overfitting zu reduzieren.

                            Zusammenfassend könnten die schlechteren Leistungen der FFNN-Modelle auf suboptimale Architekturen, mangelnde Regularisierung und Overfitting zurückzuführen sein. Das LSTM-Modell und das optimierte FFNN-Modell zeigten verbesserte Leistungen durch die Berücksichtigung von Architektur, Aktivierungsfunktionen und Regularisierungstechniken. Es ist wichtig, weiterhin verschiedene Ansätze zu erkunden und die Modelle sorgfältig zu überwachen, um eine verbesserte Leistung zu erzielen.
                        </Typography>
                    </Paper>

                    {/* RNN-Modell */}
                    <Paper elevation={1} style={{ padding: '10px', margin: '10px 0', background: '#fcebeb' }}>
                        <Typography variant="h6" gutterBottom>
                            Recurrent Neural Network (RNN)
                        </Typography>
                        <Typography>
                            <strong>Modellkonfiguration:</strong>
                            <ul>
                                <li>Input-Layer: Embedding-Layer mit 10000 Einheiten und Eingangslänge max_sequence_len - 1.</li>
                                <li>Hidden Layers: LSTM-Layer mit 128 Einheiten, Dropout von 0.2 und ReLU-Aktivierung.</li>
                                <li>Output-Layer: Dense-Layer mit 10000 Einheiten und Softmax-Aktivierung.</li>
                            </ul>
                        </Typography>
                        <Typography>
                            <strong>Begründung:</strong> Das Modell verwendet LSTM-Layer mit Dropout, um Overfitting zu verhindern, und ReLU-Aktivierung für die Erfassung komplexer Muster.
                        </Typography>
                        <Typography >
                            Die Zeile model.add(Dropout(0.2)) fügt Ihrem Modell eine Dropout-Schicht hinzu. Dropout ist eine Technik zur Vermeidung von Overfitting in neuronalen Netzwerken.
                            In einer Dropout-Schicht wird während des Trainings zufällig eine Teilmenge der Neuronen "ausgeschaltet" (ihre Ausgaben werden auf Null gesetzt). Die Rate (in diesem Fall 0.2) gibt den Anteil der Neuronen an, die bei jedem Trainingsschritt ausgeschaltet werden. Das bedeutet, dass 20% der Eingabeneuronen bei jedem Trainingsschritt zufällig ignoriert werden.
                            Durch das "Ausschalten" einiger Neuronen wird das Modell gezwungen, redundante Darstellungen der Daten zu lernen, was dazu beiträgt, Overfitting zu vermeiden. Es macht das Modell auch robuster gegen den Verlust spezifischer Neuronen, was zu einem stabileren und generalisierbaren Modell führt.
                        </Typography>
                    </Paper>

                    <Paper elevation={1} style={{ padding: '10px', margin: '10px 0', background: '#fcebeb' }}>
                        <Typography variant="h6" gutterBottom>
                            Training of the RNN models Code
                        </Typography>
                        <Typography >
                            <pre>
                                <code style={{ fontSize: '10px' }}>
                                    {`
                                import json
                                import os
                                import numpy as np
                                import tensorflow as tf
                                from tensorflow.keras.preprocessing.text import Tokenizer
                                from tensorflow.keras.preprocessing.sequence import pad_sequences
                                from tensorflow.keras.models import Sequential
                                from tensorflow.keras.layers import Embedding, Dense, BatchNormalization, LSTM, Dropout
                                from tensorflow.keras.callbacks import ModelCheckpoint, EarlyStopping, TensorBoard

                                # Read all text files from the specified directory
                                directory = './txt'
                                all_texts = []
                                vocab_size = 10000

                                for filename in os.listdir(directory):
                                if filename.endswith(".txt"):
                                filepath = os.path.join(directory, filename)
                                with open(filepath, 'r', encoding='utf-8') as file:
                                all_texts.append(file.read())

                                # Combine all texts into one
                                text = " ".join(all_texts)

                                # Tokenize and preprocess the text
                                tokenizer = Tokenizer(num_words = vocab_size)
                                tokenizer.fit_on_texts([text])
                                total_words = len(tokenizer.word_index) + 1

                                input_sequences = []
                                for line in text.split('\n'):
                                token_list = tokenizer.texts_to_sequences([line])[0]
                                for i in range(1, len(token_list)):
                                n_gram_sequence = token_list[:i + 1]
                                input_sequences.append(n_gram_sequence)

                                max_sequence_len = max([len(seq) for seq in input_sequences])
                                input_sequences = np.array(pad_sequences(input_sequences, maxlen=max_sequence_len, padding='pre'))

                                X = input_sequences[:, :-1]
                                y = input_sequences[:, -1]

                                y = np.array(tf.keras.utils.to_categorical(y, num_classes=total_words))

                                # Split the data into training and validation sets
                                split_ratio = 0.8  # 80% for training, 20% for validation
                                split_index = int(len(X) * split_ratio)

                                X_train, X_val = X[:split_index], X[split_index:]
                                y_train, y_val = y[:split_index], y[split_index:]

                                model = Sequential()
                                model.add(Embedding(total_words, 50, input_length=max_sequence_len-1))
                                model.add(LSTM(512, return_sequences=True))
                                model.add(Dropout(0.2))
                                model.add(LSTM(256))
                                model.add(Dense(total_words, activation='softmax'))
                                print(model.summary())

                                model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

                                # Train the model
                                model.fit(X_train, y_train, epochs=50, verbose=1, batch_size=256,
                                validation_data=(X_val, y_val))

                                # Save the model
                                tf.saved_model.save(model, "rnn")
                                model.save('rnn.h5')

                                # Generate text
                                next_words = 3

                                next_text = "Es kommt dabei oft vor, dass der"

                                for _ in range(next_words):
                                token_list = tokenizer.texts_to_sequences([next_text])[0]
                                token_list = pad_sequences([token_list], maxlen=max_sequence_len - 1, padding='pre')
                                predicted_probs = model.predict(token_list)[0]
                                top_3_indices = np.argsort(predicted_probs)[-3:]  # Get the indices of the top 3 predictions
                                top_3_words = [word for word, index in tokenizer.word_index.items() if index in top_3_indices]

                                # create the vocabulary dictionary
                                vocab = tokenizer.word_index

                                # create the reverse vocabulary dictionary
                                reverse_vocab = dict([(value, key) for (key, value) in vocab.items()])

                                vocab_list = { }
                                for word, index in tokenizer.word_index.items():
                                if index = vocab_size:
                                vocab_list[word] = index

                                with open('tokenizerRnn.json', 'w') as file:
                                json.dump(vocab_list, file)

                                # function to generate text
                                def generate_text(model, seed_text, next_words, max_sequence_len):
                                for _ in range(next_words):
                                token_list = tokenizer.texts_to_sequences([seed_text])[0]
                                token_list = pad_sequences([token_list], maxlen=max_sequence_len - 1, padding='pre')
                                predicted_probs = model.predict(token_list)[0]
                                top_3_indices = np.argsort(predicted_probs)[-3:]  # Get the indices of the top 3 predictions
                                top_3_words = [reverse_vocab[index] for index in top_3_indices]
                                seed_text += " " + top_3_words[0]
                                return seed_text

                                print(next_text)
                                print(top_3_words)
                                print(generate_text(model, next_text, next_words, max_sequence_len))
                                `}
                                </code>
                            </pre>
                        </Typography>
                    </Paper>
                    <Paper elevation={1} style={{ padding: '10px', margin: '10px 0', background: '#fcebeb' }}>
                        <Typography variant="h6" gutterBottom>
                            Training of the FFNN models Code
                        </Typography>
                        <Typography >
                            <pre>
                                <code style={{ fontSize: '10px' }}>
                                    {`
                                    import json
import os
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, Dense, BatchNormalization
from tensorflow.keras.layers import LSTM, Bidirectional,LeakyReLU, Dropout
from tensorflow.keras import regularizers
from tensorflow.keras.callbacks import ModelCheckpoint, EarlyStopping, TensorBoard

# Read all text files from the specified directory
directory = './txt'
all_texts = []
vocab_size = 10000

for filename in os.listdir(directory):
    if filename.endswith(".txt"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as file:
            all_texts.append(file.read())

# Combine all texts into one
text = " ".join(all_texts)

# Tokenize and preprocess the text
tokenizer = Tokenizer(num_words = vocab_size)
tokenizer.fit_on_texts([text])
total_words = len(tokenizer.word_index) + 1

input_sequences = []
for line in text.split('\n'):
    token_list = tokenizer.texts_to_sequences([line])[0]
    for i in range(1, len(token_list)):
        n_gram_sequence = token_list[:i + 1]
        input_sequences.append(n_gram_sequence)

max_sequence_len = max([len(seq) for seq in input_sequences])
input_sequences = np.array(pad_sequences(input_sequences, maxlen=max_sequence_len, padding='pre'))

X = input_sequences[:, :-1]
y = input_sequences[:, -1]

y = np.array(tf.keras.utils.to_categorical(y, num_classes=total_words))

# Split the data into training and validation sets
split_ratio = 0.8  # 80% for training, 20% for validation
split_index = int(len(X) * split_ratio)

X_train, X_val = X[:split_index], X[split_index:]
y_train, y_val = y[:split_index], y[split_index:]


# Create the FFNN model
model = Sequential()
model.add(Dense(total_words, input_shape=(max_sequence_len - 1,), activation='relu', use_bias=True))
model.add(BatchNormalization())
model.add(Dense(256, activation='relu'))
model.add(Dense(512, activation='relu', use_bias=True))
model.add(Dense(256, activation='relu'))
model.add(BatchNormalization())
model.add(Dense(total_words, activation='softmax', use_bias=True))


model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
print(model.summary())


# Train the model
model.fit(X_train, y_train, epochs=50, verbose=1, batch_size=256, validation_data=(X_val, y_val))

print(model.evaluate(X_val, y_val))

# Save the tokenizer
vocab_list = {}
for word, index in tokenizer.word_index.items():
    if index <= vocab_size:
         vocab_list[word] = index

with open('tokenizerFfnn.json', 'w') as file: 
    json.dump(vocab_list, file) 
    
    
next_words = 3
seed_text = "Es kommt dabei oft vor, dass der"

for _ in range(next_words):
    token_list = tokenizer.texts_to_sequences([seed_text])[0]
    token_list = pad_sequences([token_list], maxlen=max_sequence_len - 1, padding='pre')
    predicted_probs = model.predict(token_list)[0]
    top_3_indices = np.argsort(predicted_probs)[-3:]  # Get the indices of the top 3 predictions
    top_3_words = [word for word, index in tokenizer.word_index.items() if index in top_3_indices]
   

# Save the model
tf.saved_model.save(model, "fFNN")
model.save('fFNN.h5')
print(seed_text)
print(top_3_words)

                     `}
                                </code>
                            </pre>
                        </Typography>
                    </Paper>
                </Paper>
            </Container>
        </div>
    )
};

export default DocsWordPrediction;
