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
                    "Bild hochladen: Klicken Sie auf den 'Upload-Button' oder ziehen Sie ein Bild per Drag & Drop in den definierten Bereich.",
                    "Bildklassifizierung: Klicken Sie auf eines der vorgegebenen Bilder, um dessen Klassifizierung und Vertrauenswürdigkeit anzuzeigen.",
                    "Zurücksetzen: Nachdem ein Bild hochgeladen wurde, kann es durch Klicken auf die 'Reset'-Schaltfläche zurückgesetzt werden."
                ]}
            />

            {/* Technische Dokumentation */}
            <DocumentationSection
                title="2) Technisch"
                content={[
                    "Verwendete Frameworks:",
                    "- React: Eine JavaScript-Bibliothek zur Entwicklung von Benutzeroberflächen.",
                    "- react-dropzone: Eine React-Komponente für den Umgang mit Drag & Drop-Datei-Uploads.",
                    "- @mui/material: Das Material-UI-Framework für React, das vorgefertigte UI-Komponenten bereitstellt.",
                    "- ml5.js: Eine JavaScript-Bibliothek für maschinelles Lernen, die es ermöglicht, vortrainierte Modelle einfach zu verwenden.",
                    "",
                    "Technische Besonderheiten:",
                    "- Die Anwendung nutzt das ml5-Framework, insbesondere das vortrainierte Modell 'MobileNet' für die Bildklassifizierung.",
                    "- React Hooks werden verwendet, um den Zustand der Komponente zu verwalten und asynchrone Operationen durchzuführen.",
                    "- Die Anwendung integriert das Material-UI-Framework für ein ansprechendes Benutzererlebnis."
                ]}
            />

            {/* Fachliche Dokumentation */}
            <DocumentationSection
                title="3) Fachlich"
                content={[
                    "Implementierung der Logik:",
                    "- Bei Hochladen oder Auswahl eines Bildes wird dieses mit dem MobileNet-Modell von ml5.js klassifiziert.",
                    "- Die Klassifizierungsergebnisse werden in einem Diagramm (Chart) dargestellt, das die Vertrauenswürdigkeit der Top-2-Klassifikationen zeigt.",
                    "- Es gibt vordefinierte Bilder, auf die geklickt werden kann, um deren Klassifizierung und Vertrauenswürdigkeit anzuzeigen.",
                    "- Die Anwendung ermöglicht das Zurücksetzen des ausgewählten Bildes.",
                ]}
            />

            {/* Besonderheiten der Bildklassifizierung */}
            <DocumentationSection
                title="Interpretation der Bildklassifizierung"
                content={[
                    "Die Bilder in der zweiten Reihe der vorgegebenen Bilder weisen im Vergleich zu denen in der ersten Reihe eine niedrigere Vertrauenswürdigkeit (Confidence) auf. Dies liegt daran, dass die Auswahl dieser Bilder bewusst so getroffen wurde, dass das MobileNet-Modell Schwierigkeiten bei der korrekten Klassifizierung haben könnte.",
                    "",
                    "Interpretation der Confidence:",
                    "- Hohe Confidence (nahe 1): Wenn die Confidence nahe 1 liegt, bedeutet dies, dass das Modell sehr sicher ist, dass die Vorhersage korrekt ist.",
                    "- Niedrige Confidence (nahe 0): Eine Confidence nahe 0 deutet darauf hin, dass das Modell unsicher ist und die Vorhersage mit Vorsicht interpretiert werden sollte.",
                    "",
                    "Mögliche Gründe für niedrige Confidence:",
                    "- Komplexität der Bilder: Bilder mit mehreren Objekten oder komplexen Strukturen können die Klassifizierung beeinträchtigen, da das Modell möglicherweise Schwierigkeiten hat, das Hauptobjekt zu identifizieren.",
                    "- Ähnlichkeit zu anderen Klassen: Wenn ein Bild Merkmale aufweist, die mehreren Klassen zugeordnet werden können, kann die Confidence für die ausgewählte Klasse sinken.",
                    "- Qualität der Daten: Die Qualität der vortrainierten Modelle hängt stark von der Qualität der Trainingsdaten ab. Wenn die Trainingsdaten nicht repräsentativ sind, kann dies zu niedriger Confidence führen.",
                    "- Fehlende Klasse in den Trainingsdaten: Wenn eine Klasse nicht ausreichend in den Trainingsdaten vertreten ist, kann das Modell Schwierigkeiten haben, sie zuverlässig zu erkennen.",
                    "",
                    "Es ist wichtig zu beachten, dass niedrige Confidence nicht unbedingt auf einen Fehler hinweist, sondern darauf, dass das Modell unsicher ist. Das Verständnis dieser Nuancen ist entscheidend für eine angemessene Interpretation der Klassifizierungsergebnisse."
                ]}
            />

            {/* Quellen und Benutzungshinweise */}
            <DocumentationSection
                title="4) Quellen"
                content={[
                    "ml5.js-Dokumentation: (https://learn.ml5js.org/docs/#/)",
                    "React-Dokumentation: (https://reactjs.org/docs/getting-started.html)",
                    "Material-UI-Dokumentation: (https://mui.com/getting-started/installation/)",
                    "react-dropzone-Dokumentation: (https://react-dropzone.js.org/, https://www.codemzy.com/blog/react-drag-drop-file-upload)",
                    "uuid-Dokumentation: (https://www.npmjs.com/package/uuid)",
                    "Bilder: (https://www.pexels.com/de-de/)",
                    "Usage of React and Ml5.js: (https://blog.greenroots.info/how-i-attempted-image-classification-in-the-browser-using-ml5js-and-react), https://julienrioux.medium.com/in-browser-ml-with-react-js-and-ml5-js-f3eeb5149404"
                ]}
            />
            <DocumentationSection
                title="5) Benutzungshinweise"
                content={[

                    "- Ziehen Sie ein Bild in den definierten Bereich oder verwenden Sie die 'Upload'-Schaltfläche.",
                    "- Klicken Sie auf die vordefinierten Bilder, um Klassifizierung und Vertrauenswürdigkeit anzuzeigen.",
                    "- Das ausgewählte Bild kann durch Klicken auf 'Reset' zurückgesetzt werden."
                ]}
            />
        </div>
    );
};

export default Docs;
