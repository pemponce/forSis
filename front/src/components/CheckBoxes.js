import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckBoxes({ onChange }) {
    const handleChange = (event) => {
        const { name, checked } = event.target;
        onChange(name, checked);
    };

    return (

        <FormGroup>
            <FormControlLabel
                control={<Checkbox className="custom-checkbox" name="красное вино" onChange={handleChange}/>}
                label="красное вино"/>
            <FormControlLabel
                control={<Checkbox className="custom-checkbox" name="белое вино" onChange={handleChange}/>}
                label="белое вино"/>

            <FormControlLabel
                control={<Checkbox className="custom-checkbox" name="мясо" onChange={handleChange}/>}
                label="мясо"/>

            <FormControlLabel
                control={<Checkbox className="custom-checkbox" name="рыба" onChange={handleChange}/>}
                label="рыба"/>

            <FormControlLabel
                control={<Checkbox className="custom-checkbox" name="курица" onChange={handleChange}/>}
                label="курица"/>
        </FormGroup>
    );
}
