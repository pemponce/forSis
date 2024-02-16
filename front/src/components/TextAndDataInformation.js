import * as React from "react";
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateCalendar, LocalizationProvider} from "@mui/x-date-pickers";
import {DemoContainer, DemoItem} from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

export default function TextAndDataInformation() {

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
                    <div className="textContent">
                        <h1>Дорогие гости!</h1>
                        <tr/>
                        <tr/>
                        <h3>
                            Lorem ipsum dolor sit amet . Графические и типографические операторы хорошо это знают, на самом деле все профессии, имеющие дело со вселенной коммуникации, имеют устойчивую связь с этими словами, но что это такое? Lorem ipsum - это фиктивный текст без всякого смысла.

                            Lorem ipsum dolor sit amet . Графические и типографические операторы хорошо это знают, на самом деле все профессии, имеющие дело со вселенной коммуникации, имеют устойчивую связь с этими словами, но что это такое? Lorem ipsum - это фиктивный текст без всякого смысла.

                            Lorem ipsum dolor sit amet . Графические и типографические операторы хорошо это знают, на самом деле все профессии, имеющие дело со вселенной коммуникации, имеют устойчивую связь с этими словами, но что это такое? Lorem ipsum - это фиктивный текст без всякого смысла.

                        </h3>
                        <tr/>
                        <tr/>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateCalendar', 'DateCalendar']} >
                                    <DemoItem>
                                        <DateCalendar style={{margin:"auto"}} defaultValue={dayjs('2024-06-9')} disabled/>
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>

                        </div>
                    </div>
                </Box>
            </Paper>
        </Container>
);
}
