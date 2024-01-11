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
                        "Upload Pretrained Model Tab: Der Benutzer kann ein vortrainiertes Modell hochladen, indem er auf die Schaltfläche 'Durchsuchen' klickt und eine entsprechende Datei auswählt.",
                        "Train Model Tab: Der Benutzer kann die Hyperparameter für das Training festlegen, einschließlich der Anzahl der versteckten Schichten, Neuronen pro Schicht, Aktivierungsfunktion, Lernrate, Optimierer und Anzahl der Epochen. Durch Klicken auf die Schaltfläche 'Train Model' wird das Modell trainiert und die Verlustwerte werden in einem Streudiagramm dargestellt.",
                        "Test Pretrained Model Tab: Der Benutzer kann die Varianz für die Testdaten festlegen. Nach dem Hochladen eines vortrainierten Modells kann der Benutzer auf die Schaltfläche 'Test Model' klicken, um Vorhersagen auf Testdaten zu generieren. Die Ergebnisse werden in der Konsole angezeigt.",
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
                        "- TensorFlow.js: Das Modell wird mithilfe von TensorFlow.js erstellt, trainiert und getestet. Die Trainingsfortschritte werden in Echtzeit in einem Streudiagramm dargestellt.",
                        "- React Hooks werden verwendet, um den Zustand der Komponente zu verwalten und asynchrone Operationen durchzuführen.",
                        "- Die Anwendung integriert das Material-UI-Framework für ein ansprechendes Benutzererlebnis.",
                        "- Chart.js: Die Bibliothek wird für die Visualisierung von Streudiagrammen verwendet, um Trainings- und Testdaten zu zeigen.",
                        "",
                        "Bereitstellung:",
                        "- Netify: Diese App wird mit Netlify bereitgestellt. Netlify ist ein All-in-one-Plattform, die automatisches Bauen, Bereitstellen und Servern Ihrer Webprojekte ermöglicht.",
                    ]}
                />

                {/* Fachliche Dokumentation */}
                <DocumentationSection
                    title="3) Fachlich"
                    content={[
                        "Implementierung der Logik:",
                        "- Data Generation: generateData erstellt zufällige Trainingsdaten für die Regression.",
                        "- Modellerstellung: createModel erstellt ein neuronales Netzwerk mit konfigurierbaren Hyperparametern.",
                        "- Modelltraining: trainModel trainiert das Modell mit den bereitgestellten Trainingsdaten.",
                        "- Modelltest: Model testet das Modell mit neuen Daten und zeigt die Vorhersagen in der Konsole an.",
                        "- Streudiagramme: Trainings- und Testverluste werden in Echtzeit in Streudiagrammen dargestellt.",
                        "- Modellzusammenfassung: getModelSummary erstellt eine Zusammenfassung der Modellschichten und ihrer Parameter.",
                    ]}
                />

                {/* Besonderheiten der Bildklassifizierung */}
                <DocumentationSection
                    title="Resultate der Regression"
                    content={[
                        "Trainingsdaten: ",
                        "Die Trainingsdaten werden mit der Funktion generateData erstellt. Die Anzahl der Datenpunkte und die Varianz können konfiguriert werden.",
                        "Training:",
                        "- Der Fortschritt des Modelltrainings wird durch die Verlustwerte in einem Streudiagramm veranschaulicht.",
                        "- Die Anzahl der Epochen kann konfiguriert werden.",
                        "Testdaten:",
                        "- Die Varianz der Testdaten kann konfiguriert werden.",
                        "- Die Testdaten werden mit der Funktion generateData erstellt.",
                        "",
                        "Interpretation der Ergebnisse:",
                        "- Die Ergebnisse können mit den tatsächlichen Werten verglichen werden, die durch die Funktion generateData erstellt wurden.",
                        "- Die Ergebnisse können auch mit den Verlustwerten verglichen werden, die in den Streudiagrammen angezeigt werden.",
                        "Loss:",
                        "- Der Verlust sollte mit der Anzahl der Epochen abnehmen.",
                        "- Der Verlust sollte mit der Varianz der Testdaten zunehmen.",
                    ]}
                />

                {/* Quellen und Benutzungshinweise */}
                <DocumentationSection
                    title="4) Quellen"
                    content={[
                        "React-Dokumentation: (https://reactjs.org/docs/getting-started.html)",
                        "Material-UI-Dokumentation: (https://mui.com/getting-started/installation/)",
                        "TensorFlow.js-Dokumentation: (https://www.tensorflow.org/js)",
                        "Netify: (https://www.netlify.com/docs/)",
                    ]}
                />

                <DocumentationSection
                    title="5) Benutzungshinweise"
                    content={[
                        "Tabs:",
                        "- Upload Pretrained Model: Hier können Sie ein vortrainiertes Modell hochladen.",
                        "- Train Model: Hier können Sie ein Modell trainieren.",
                        "- Test Pretrained Model: Hier können Sie ein vortrainiertes Modell testen.",
                        "",
                        "Upload Pretrained Model Tab:",
                        "- Klicken Sie auf die Schaltfläche 'Durchsuchen', um ein vortrainiertes Modell hochzuladen.",
                        "- Klicken Sie auf die Schaltfläche 'Upload Model', um das Modell hochzuladen.",
                        "Train Model Tab:",
                        "- Legen Sie die Hyperparameter für das Training fest.",
                        "- Klicken Sie auf die Schaltfläche 'Train Model', um das Modell zu trainieren.",
                        "Test Pretrained Model Tab:",
                        "- Legen Sie die Varianz für die Testdaten fest.",
                        "- Klicken Sie auf die Schaltfläche 'Test Model', um das Modell zu testen.",
                    ]}
                />

                {/* Dokumentation der Modelle */}
                <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', background: '#fcebeb' }}>
                    <Typography variant="h4" gutterBottom>
                        Dokumentation der Parameter und Einstellungen
                    </Typography>

                    {/* Underfitting */}
                    <Paper elevation={1} style={{ padding: '10px', margin: '10px 0', background: '#fcebeb' }}>
                        <Typography variant="h6" gutterBottom>
                            Underfitting
                        </Typography>
                        <Typography>
                            <strong>Modellkonfiguration:</strong>
                            <ul>
                                <li>Input-Layer: Lineare Aktivierungsfunktion mit 1 Einheit.</li>
                                <li>Hidden Layer: Dense-Layer mit 10 Einheiten und ReLU-Aktivierung.</li>
                                <li>Output-Layer: Lineare Aktivierungsfunktion mit 1 Einheit.</li>
                            </ul>
                        </Typography>
                        <Typography>
                            <strong>Begründung:</strong> Das einfache Modell mit nur einem Hidden Layer und linearer Aktivierung ist anfällig für Underfitting. Es kann die komplexe Form der Ziel-Funktion nicht angemessen erfassen.
                        </Typography>
                    </Paper>

                    {/* Best-fit */}
                    <Paper elevation={1} style={{ padding: '10px', margin: '10px 0', background: '#fcebeb' }}>
                        <Typography variant="h6" gutterBottom>
                            Best-fit
                        </Typography>
                        <Typography>
                            <strong>Modellkonfiguration:</strong>
                            <ul>
                                <li>Input-Layer: Lineare Aktivierungsfunktion mit 1 Einheit.</li>
                                <li>Hidden Layers: Dense-Layer mit 14 Einheiten, abwechselnd ReLU, tanh, sigmoid und softmax Aktivierungen.</li>
                                <li>Output-Layer: Lineare Aktivierungsfunktion mit 1 Einheit.</li>
                            </ul>
                        </Typography>
                        <Typography>
                            <strong>Begründung:</strong> Die Best-fit-Konfiguration zielt darauf ab, einen Kompromiss zwischen Underfitting und Overfitting zu finden. Durch die Verwendung verschiedener Aktivierungsfunktionen in den Hidden Layers kann das Modell eine breitere Palette von Mustern erfassen.
                        </Typography>
                    </Paper>

                    {/* Over-fitting */}
                    <Paper elevation={1} style={{ padding: '10px', margin: '10px 0', background: '#fcebeb' }}>
                        <Typography variant="h6" gutterBottom>
                            Over-fitting
                        </Typography>
                        <Typography>
                            <strong>Modellkonfiguration:</strong>
                            <ul>
                                <li>Input-Layer: ReLU-Aktivierungsfunktion mit 1 Einheit.</li>
                                <li>Hidden Layers: Mehrere Dense-Layer mit 14 Einheiten und ReLU-Aktivierung.</li>
                                <li>Output-Layer: Lineare Aktivierungsfunktion mit 1 Einheit.</li>
                            </ul>
                        </Typography>
                        <Typography>
                            <strong>Begründung:</strong> Das Overfitting-Modell ist komplexer und kann dazu neigen, sich zu stark an die Trainingsdaten anzupassen. Die Verwendung von mehreren Hidden Layers mit ReLU-Aktivierung trägt zu dieser Komplexität bei.
                        </Typography>
                    </Paper>

                    {/* Bias und Variance */}
                    <Paper elevation={1} style={{ padding: '10px', margin: '10px 0', background: '#fcebeb' }}>
                        <Typography variant="h6" gutterBottom>
                            Bias und Variance
                        </Typography>
                        <Typography>
                            <strong>Bias:</strong> Bias bezieht sich auf den Fehler, der eingeführt wird, wenn ein Modell zu einfache Annahmen über die zugrunde liegenden Daten trifft. Ein Modell mit hohem Bias ignoriert komplexe Muster in den Daten und führt zu Underfitting.
                        </Typography>
                        <Typography>
                            <strong>Variance:</strong> Variance bezieht sich auf die Empfindlichkeit eines Modells gegenüber kleinen Schwankungen in den Trainingsdaten. Ein Modell mit hoher Variance passt sich den Trainingsdaten sehr genau an, kann jedoch Schwierigkeiten haben, auf neuen Daten gut zu generalisieren.
                        </Typography>
                        <Typography>
                            Die Wahl der Modelle und ihrer Parameter spiegelt daher die Absicht wider, die Balance zwischen Bias und Variance zu finden und so ein angemessenes Modell für die gegebene Regression aufzubauen.
                        </Typography>
                    </Paper>
                </Paper>
            </Container>
        </div>
    );
};

export default DocsWordPrediction;
