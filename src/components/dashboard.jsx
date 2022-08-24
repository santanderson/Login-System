import * as React from 'react';
import { useNavigate } from "react-router-dom";
//Store imports
import { store } from './store/store';
import { logOut } from './store/reducer';

const Dashboard = () => {
    const navigate = useNavigate();
    const data = store.getState().user;
    const logout = () => {
        store.dispatch(logOut());
        navigate("/", { replace: true })
    }

    if (data.user !== "" && data.isLogged === true) {
        return (
            <div className='dashboard'>
                <h1>Bem vindo {data.user}!</h1>
                <h4>Seu email é: {data.email}</h4>
                <h4>Sua senha é: {data.password}</h4>
                <button onClick={logout}>Log out</button>
            </div>
        )
    } else {
        return (
            <div className='dashboard'>
                <h1>Usuário não logado :(</h1>
            </div>
        )
    }
}

export default Dashboard;