import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper, Button} from "@mui/material";
import {useState} from "react";
import CheckBoxes from "./CheckBoxes";

export default function Person() {

    const paperStyle = {padding: "50px 20px", width: 600, margin: "20px auto"}
    const formstyle = {padding: "0px 0px 10px 0px"}
    const [name, setName] = useState('')
    const [anotherName, setAnotherName] = useState('')
    const [preferences, setPreferences] = useState('');
    // let pref = ''

    const handleChangeCheckbox = (checkboxName, isChecked) => {
        // Добавляем или удаляем пожелание в переменную типа строки в зависимости от состояния чекбокса
        if (isChecked) {
            setPreferences(prevPreferences => prevPreferences + checkboxName + '; ');
        } else {
            setPreferences(prevPreferences => prevPreferences.replace(checkboxName + '; ', ''));
        }
    };


    const handleClick = (e) => {
        e.preventDefault()
        const person = {
            name,
            anotherName,
            preferences
        }
        console.log(person)
        fetch("http://localhost:8080/person/add", {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(person)
        }).then(()=>{
            console.log("new Person added")
        })
    }

    return (<Container>
        <Paper elevation={3} style={paperStyle}>

            <h1 style={{color: "blue"}}>
                <u>Add a person</u>
            </h1>
            <Box>
                <TextField id="outlined-basic" label="Имя и Фамилия" variant="outlined" style={formstyle} fullWidth
                           value={name}
                           onChange={(e) => setName(e.target.value)}/>
                <TextField id="outlined-basic" label="С кем вы будете?" variant="outlined" style={formstyle} fullWidth
                           value={anotherName}
                           onChange={(e) => setAnotherName(e.target.value)}/>
                <Button variant="contained" onClick={handleClick}>отправить</Button>
            </Box>

            <div>
                <CheckBoxes onChange={handleChangeCheckbox}/>
            </div>
        </Paper>
    </Container>);
}
