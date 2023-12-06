import { Paper, Typography, Grid } from '@mui/material';
import React from 'react';

const DocumentationSection = ({ title, content }) => {
    return (
        <Paper elevation={3} style={{
            padding: '20px', marginTop: '20px',
            background: '#fcebeb'
        }}>
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>
            <Grid container spacing={2}>
                {content.map((item, index) => (
                    <Grid item xs={12} key={index}>
                        <Typography>{item}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Paper>
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