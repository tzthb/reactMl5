import React, { useState } from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Underfitting from "./underfitting";
import Bestfit from "./bestfit";
import Overfitting from "./overFitting";

function PredictWith2d() {
    const [selectedOption, setSelectedOption] = useState('Underfitting');

    return (
        <div>
            <h1>Pretrained Model</h1>
            <div>Here you see a pretrained example for a underfitting, best-fit and overfitting model.</div>
            <div style={{
                width: '100%',
                marginLeft: '200px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center'
            }} >
                <RadioGroup row value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                    <FormControlLabel value="Underfitting" control={<Radio />} label="Underfitting" />
                    <FormControlLabel value="Best-Fit" control={<Radio />} label="Best-Fit" />
                    <FormControlLabel value="Overfitting" control={<Radio />} label="Overfitting" />
                </RadioGroup>
            </div>
            <div style={{
                display: 'flex', marginTop: '100px', marginLeft: '50px', flexDirection: 'row',
            }}>

                <div style={{
                    flexDirection: 'column',
                    minWidth: '500px',
                }} >
                    {selectedOption === 'Underfitting' &&
                        <><h2>Underfitting</h2><Underfitting /></>
                    }
                    {selectedOption === 'Best-Fit' && <><h2>Bestfit</h2><Bestfit /></>}
                    {selectedOption === 'Overfitting' && <><h2>Overfitting</h2><Overfitting /></>}
                </div>


            </div>
        </div>
    );
}

export default PredictWith2d;