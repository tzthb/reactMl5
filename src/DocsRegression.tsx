import React from 'react';

import DocumentationSection from './components/DocumentationSection';


const Docs = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Dokumentation</h1>

            {/* Interaktionsdokumentation */}
            <DocumentationSection
                title="1) Interaktion"
                content={[
                    "Upload Pretrained Model Tab: Der Benutzer kann ein vortrainiertes Modell hochladen, indem er auf die Schaltfläche 'Durchsuchen' klickt und eine entsprechende Datei auswählt.",
                    "Train Model Tab: Der Benutzer kann die Hyperparameter für das Training festlegen, einschließlich der Anzahl der versteckten Schichten, Neuronen pro Schicht, Aktivierungsfunktion, Lernrate, Optimierer und Anzahl der Epochen. Durch Klicken auf die Schaltfläche 'Train Model' wird das Modell trainiert und die Verlustwerte werden in einem Streudiagramm dargestellt.",
                    "Test Pretrained Model Tab: Der Benutzer kann die Varianz für die Testdaten festlegen. Nach dem Hochladen eines vortrainierten Modells kann der Benutzer auf die Schaltfläche 'Test Model' klicken, um Vorhersagen auf Testdaten zu generieren.Die Ergebnisse werden in der Konsole angezeigt."
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
                    "Chart.js: Die Bibliothek wird für die Visualisierung von Streudiagrammen verwendet, um Trainings - und Testdaten zu zeigen."
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
                    "- Modellzusammenfassung: getModelSummary erstellt eine Zusammenfassung der Modellschichten und ihrer Parameter."
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
                    "- Die Testdaten werden mit der Funktion generateData erstellt.", "",
                    "Interpretation der Ergebnisse:",
                    "- Die Ergebnisse können mit den tatsächlichen Werten verglichen werden, die durch die Funktion generateData erstellt wurden.",
                    "- Die Ergebnisse können auch mit den Verlustwerten verglichen werden, die in den Streudiagrammen angezeigt werden.",
                    "Loss:",
                    "- Der Verlust sollte mit der Anzahl der Epochen abnehmen.",
                    "- Der Verlust sollte mit der Varianz der Testdaten zunehmen."
                ]}
            />

            {/* Quellen und Benutzungshinweise */}
            <DocumentationSection
                title="4) Quellen"
                content={[
                    "React-Dokumentation: (https://reactjs.org/docs/getting-started.html)",
                    "Material-UI-Dokumentation: (https://mui.com/getting-started/installation/)",
                    "TensorFlow.js-Dokumentation: (https://www.tensorflow.org/js)",]}
            />
            <DocumentationSection
                title="5) Benutzungshinweise"
                content={[
                    "Tabs:",
                    "- Upload Pretrained Model: Hier können Sie ein vortrainiertes Modell hochladen.",
                    "- Train Model: Hier können Sie ein Modell trainieren.",
                    "- Test Pretrained Model: Hier können Sie ein vortrainiertes Modell testen.",

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
        </div>
    );
};

export default Docs;
