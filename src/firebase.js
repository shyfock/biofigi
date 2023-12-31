import { initializeApp } from "firebase/app";
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";
import 'firebaseui/dist/firebaseui.css';
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyChVqI1RpFdunSjliDPWvnu1RKHFUP7a20",
    authDomain: "galvanic-being-394923.firebaseapp.com",
    databaseURL: "https://galvanic-being-394923-default-rtdb.firebaseio.com",
    projectId: "galvanic-being-394923",
    storageBucket: "galvanic-being-394923.appspot.com",
    messagingSenderId: "626645470790",
    appId: "1:626645470790:web:dcc4a96d18a1f9d5158447",
    measurementId: "G-RLV851FZ1Q"
}

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
export const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '/',
    // Privacy policy url.
    privacyPolicyUrl: '/'
};
// ui.start('#firebaseui-auth-container', uiConfig);

export default app;