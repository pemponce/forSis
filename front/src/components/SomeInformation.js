import * as React from "react";
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";

export default function SomeInformation() {

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
                    <div className="ImgK">
                        <div className="VladKarina">
                            Влад <tr/>И <tr/> Карина
                        </div>
                    </div>
                </Box>
            </Paper>
        </Container>
    );
}
