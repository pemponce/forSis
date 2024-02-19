import * as React from "react";
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";

export default function DayPlan() {

    const paperStyle = {
        padding: "50px 20px",
        width: "95%",
        margin: "20px auto",
        borderRadius: 20,
        backgroundColor: "#e9dbd3"
    }

    const H4Style = {
        lineHeight: "1.5rem"
    }


    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Box>
                    <h1>План Дня</h1>

                    <div className="container">
                        <table className="table">
                            <tbody>
                            <tr>
                                <td>
                                    <div className="tdContent">16:00</div>
                                </td>
                                <td>
                                    <div className="glassImage"/>
                                </td>
                                <td>
                                    <div className="tdContent">
                                        <h4 style={H4Style}>Сбор гостей, фуршет</h4>
                                        <tr>Собираясь на торжество возьмите с собой свои улыбки и хорошее настроение</tr>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="tdContent"> 16:30</div>
                                </td>
                                <td>
                                    <div className="weddingCeremonyImage"/>
                                </td>
                                <td>
                                    <div className="tdContent">
                                        <h4 style={H4Style}>Церемония бракосочетания</h4>
                                        <tr>Приготовьте платочки для трогательного момента</tr>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="tdContent"> 17:00</div>
                                </td>
                                <td>
                                    <div className="FestiveBanquetImage"/>
                                </td>
                                <td>
                                    <div className="tdContent">
                                        <h4 style={H4Style}>Праздничный банкет</h4>
                                        <tr>Время танцев, вкусной еды, теплых пожеланий и развлечений</tr>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="tdContent"> 00:00</div>
                                </td>
                                <td>
                                    <div className="EndOfTheEveningImage"/>
                                </td>
                                <td>
                                    <div className="tdContent">
                                        <h4 style={H4Style}>Конец Банкета</h4>
                                        <tr>К сожалению, даже такой волшебный вечер может закончиться</tr>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </Box>
            </Paper>
        </Container>
    );
}
