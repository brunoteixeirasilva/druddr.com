/**
 * @description Login
 * @author IgnacioTosi
 * @version 1.1
 */

// DEFAULT
import React, { useState, useEffect } from 'react';

// CSS
import './Login.css';
import msFinance from '../../../../assets/imgs/msfinance.png';
import msLogo from '../../../../assets/imgs/msLogo.png';

// FLUENT UI
import { TextField, PrimaryButton, CommandBarButton } from '@fluentui/react';

// FIREBASE
import firebase from '@firebase/app-compat';
import 'firebase/auth';

// HOME SCREEN IF IS AUTH
import HomeScene from '../../home';

// Login Sceen Component
const LoginScene = () => {

    //firebase google log in provider
	var provider = new firebase.auth.GoogleAuthProvider()

    // state of the userSession
    const [user, setUser] = useState(null);

    useEffect(() => {
		// FIREBASE AUTH STATE OBSERVER
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				var uid = user.uid
                setUser(uid)
			} else {
				var uid = null
                setUser(null)
			}
		})
	}, [])

	function singInWithGooglePopUp() {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				console.log('User has sing in')
			})
			.catch((error) => {
				var errorCode = error.code
				var errorMessage = error.message
				var email = error.email
				var credential = error.credential
				console.log(
					`Errors occurred during sing in: ${errorCode}, ${errorMessage}, ${email}, ${credential}`
				)
			})
	}

	return (

        <>{!user
            ? (
                <div id="loginScene">
                    <img className="logo" src={msFinance} alt="Microsoft Finance" />
                    <h1>Microsoft Finance</h1>

                    <div className="loginControls">
                        <PrimaryButton
                            type="button"
                            text="Login"
                            styles={CustomPrimaryButton}
                            onClick={() => {
                                singInWithGooglePopUp()
                            }}
                        />
                        <CommandBarButton
                            type="button"
                            text="Create Account"
                            styles={CustomCommandBarButton}
                        />
                    </div>

                    <img className="logo2" src={msLogo} alt="Microsoft" />
                </div>
            )
            : (
                <HomeScene />
            )
            }
        </>
	)
}

// same here, dont know how to model hover
const CustomPrimaryButton = {
	root: {
		padding: '20px',
		marginTop: '15px',
		display: 'block',
		width: '100%',
		borderRadius: '10px',
		border: 'none',
		backgroundColor: '#3889D1',
		color: 'white',
	},
}

// same here, dont know how to model hover
const CustomCommandBarButton = {
	root: {
		padding: '10px',
		marginTop: '15px',
		display: 'block',
		width: '100%',
		border: 'none',
		backgroundColor: 'white',
		color: '#3889D1',
	},
}

export default LoginScene
