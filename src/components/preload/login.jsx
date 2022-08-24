import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";

//Store imports
import { store } from '../store/store';
import { changeUser } from '../store/reducer';

const Login = () => {
    let user = React.useRef();
    let pass = React.useRef();
    const navigate = useNavigate();
    const data = store.getState().user;

    const validate = () => {
        const email = user.current.children[1].children[0].value;
        const password = pass.current.children[1].children[0].value;

        if (!email || !password) {
            alert('Por favor preencha todos os campos!');
        } else if (password.length < 8) {
            alert('Senha muito curta! Precisa de 8 caracteres ou mais');
        } else if ((email !== data.email && email !== data.user) && password !== data.password) {
            alert('Usuário não registrado');
        } else if ((email !== data.email && email !== data.user) || password !== data.password) {
            alert('Senha incorreta');
        }
        else{
            store.dispatch(changeUser(data.user, data.email, data.password))
            navigate('../dashboard', { replace: true });
        }
    };

    return (
        <form className="login">
            <Grid container
                className="container"
            >
                <Grid container item
                    className="inputs"
                    height="180px"
                >
                    <TextField ref={user} required className="loginIpt" type="text" label="Email ou nome de usuário" variant='standard' />
                    <TextField ref={pass} required className="passwordIpt" type="password" label="Sua senha" variant='standard' />
                    <span><Link to="/">Esqueceu sua senha?</Link></span>
                </Grid>

                <Grid container item
                    className="buttons"
                    height="140px"
                >
                    <Button onClick={validate} color="primary" size="small" variant="contained" disableElevation>Log in</Button>

                    <span>Não tem conta? <Link to="/signin">Registre-se</Link></span>
                </Grid>
            </Grid>

        </form>
    )
};

export default Login;