import * as React from 'react';
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";

export default function Users() {
    const [users, setUsers] = React.useState([])

    const onClick = (e) => {
        fetch("http://localhost:8080/person/getAll")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }


    const paperStyle = {
        fontFamily: "sans-serif",
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
                    <div>
                        <button onClick={onClick}>List
                        </button>
                        <div>
                            <u1>
                                {
                                    users.map((list, index) => (

                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="tdContent" key={index}>
                                                        {list.id}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="tdContent">
                                                        {list.name}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="tdContent">
                                                        {list.anotherName}
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                            ))}
                        </u1>
                    </div>
                </div>
            </Box>
        </Paper>
</Container>
)
    ;
}
