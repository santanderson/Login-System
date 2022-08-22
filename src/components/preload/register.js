import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
//Store imports
import { store } from '../store/store';
import { registerUser } from '../store/reducer';

const Register = () => {
    const navigate = useNavigate();
    let user = React.useRef();
    let pass = React.useRef();
    let email = React.useRef();
    const data = store.getState();

    const validate = () => {
        const name = user.current.children[1].children[0].value;
        const mail = email.current.children[1].children[0].value;
        const password = pass.current.children[1].children[0].value;

        if (name === data.user || mail === data.email) {
            console.log('Usuário já registrado')
        } else if (!mail || !password || !name) {
            console.log('Por favor preencha todos os campos!');
        } else if (password.length < 8) {
            console.log('Senha muito curta! Precisa de 8 caracteres ou mais');
        } else {
            store.dispatch(registerUser(name, mail, password));
            navigate('../dashboard', { replace: true });
        }
    };
    return (
        <form className="Register">
            <Grid container
                className='container'
            >

                <Grid container item
                    height="170px"
                    width="300px"
                >
                    <TextField required ref={user} type="text" variant='standard' label="Seu nome de usuário" />
                    <TextField required ref={email} type="email" variant='standard' label="Seu melhor email" />
                    <TextField required ref={pass} type="password" variant='standard' label="Crie uma senha" />
                </Grid>

                <Grid container item
                    width="300px"
                    height="150px"
                >

                    <span>Ao se registrar você concorda com os <a href="#">termos de uso e política de privacidade</a></span>

                    <Button onClick={validate} color="primary" size="small" variant="contained" disableElevation>registrar</Button>

                    <span>Já tem uma conta? <Link to="/login">Então faça log in</Link></span>
                </Grid>
            </Grid>

        </form>
    )
};

export default Register;