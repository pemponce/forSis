import * as React from "react";
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";

export default function PlaceInformation() {

    const paperStyle = {
        padding: "50px 20px",
        width: "95%",
        margin: "20px auto",
        borderRadius: 20,
        backgroundColor: "#e9dbd3"
    }


    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Box>
                    <h1>Место Проведения</h1>

                    <h3 className="textContent" style={{fontSize: "2rem"}}>
                        "Villa Небеса"
                        <tr/>
                        Ул. Техническая, 4б
                    </h3>

                    <div style={{width:"600px", height:"400px"}}></div>
                </Box>
            </Paper>
        </Container>
    );
}
