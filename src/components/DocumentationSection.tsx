import React from 'react';

const DocumentationSection = ({ title, content }) => {
    return (
        <div style={sectionStyle}>
            <h2 style={titleStyle}>{title}</h2>
            <ul style={listStyle}>
                {content.map((item, index) => (
                    <li key={index} style={listItemStyle}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const sectionStyle = {
    marginBottom: '30px',
    marginLeft: '50px',
};

const titleStyle = {
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '10px',
};

const listStyle = {
    listStyleType: 'none',
    padding: 0,
};

const listItemStyle = {
    marginBottom: '8px',
};

export default DocumentationSection;