import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper, Button} from "@mui/material";
import {useState} from "react";

export default function Person() {

    const paperStyle = {padding: "50px 20px", width: "95%", margin: "20px auto", borderRadius: 20}
    const formStyle = {padding: "0px 0px 10px 0px"}
    const [name, setName] = useState('')
    const [anotherName, setAnotherName] = useState('')


    const handleClick = (e) => {
        e.preventDefault()
        const person = {
            name,
            anotherName
        }
        console.log(person)
        fetch("http://localhost:8080/person/add", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(person)
        }).then(() => {
            console.log("new Person added")
        })
    }

    return (<Container>
        <Paper elevation={3} style={paperStyle}>
            <Box>
                <TextField id="outlined-basic" label="Имя и Фамилия" variant="outlined" style={formStyle} fullWidth
                           value={name}
                           onChange={(e) => setName(e.target.value)}/>
                <TextField id="outlined-basic" label="С кем вы будете?" variant="outlined" style={formStyle} fullWidth
                           value={anotherName}
                           onChange={(e) => setAnotherName(e.target.value)}/>

                <Button variant="contained" onClick={handleClick}>отправить</Button>
            </Box>

        </Paper>
    </Container>);
}
