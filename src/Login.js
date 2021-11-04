import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider'
import { actionType } from './reducer'

function Login() {
    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionType.SET_USER,
                    user: result.user
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://gwg.ng/wp-content/uploads/2021/05/56A72AC3-3255-40D0-89C1-662DDB028C07.png" alt="" />
                <div className="login__text">
                    <h1>Login to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    );
}

export default Login
