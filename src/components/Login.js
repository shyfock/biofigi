import { ui, uiConfig } from '../firebase';
import 'firebaseui/dist/firebaseui.css';
import '../App.css'
import { useEffect } from 'react';


const Login = () => {
    useEffect(()=>ui.start('#firebaseui-auth-container', uiConfig),[])
    return (
        <div className='App'>
            <h1>Welcome to BioFigi</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
        </div>
    )
}

export default Login;