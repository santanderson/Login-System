import { useEffect } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
//Store imports
import { store } from "../store/store";

const Preload = () => {
    let navigate = useNavigate();
    const data = store.getState();
    useEffect(() => {
        async function verify() {
            if (data.isLogged === true) {
                navigate("dashboard", {replace: true});//Se o usuário estiver logado, o dashboard será redirecionado.
            } else {
                navigate("login", { replace: true });//Se não estiver logado, a tela de login será mostrada.
            }
        }
        verify();
        });
    return (
        <div className="preload">
            <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        </div>
    )
};

export default Preload;