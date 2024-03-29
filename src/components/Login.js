import { useRef, useState } from "react";
import { BODY_BACKGROUND } from "../utils/Constants";
import Header from "./Header";
import { validateEmail, validatePassword } from "../utils/CheckValidation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userInfoSlice";

const Login = () => {
    // handling the signIn and SignUp form with this state variable.
    const[isSignIn, setIsSignIn] = useState(true);
    // state variable to get the error message coming from validateEmail function.
    const[errorEmailMessage, setEmailErrorMessage] = useState(null);

    // state variable to get the error message coming from validatePassword function.
    const[errorPassMessage, setErrorPassMessage] = useState(null);
    const[autherrorMessage, setAuthErrorMessage] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // defining variable 
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleValidationOnClick = () => {
        const emailMessage = validateEmail(email.current.value);
        setEmailErrorMessage(emailMessage);
        const passMessage = validatePassword(password.current.value);
        setErrorPassMessage(passMessage);

        if(emailMessage && passMessage) return;

        if(!isSignIn)
        {
            // creating sign up page
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value
                  })
                  
                  .then(() => {
                    const {uid, email, displayName} = user;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName}));
                    navigate("/browser")
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthErrorMessage(errorMessage);
                
            });
        }
        else{

            // sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              navigate("/browser");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setAuthErrorMessage(errorMessage);
            });

        }

       
    }

    const handleSignIn = () =>
    {
        setIsSignIn(!isSignIn);
    }
    return (
        <div >
            <Header/>
            <img src={BODY_BACKGROUND} alt="background image" className="absolute"></img>
            <form  onSubmit = {(e) => e.preventDefault()}className="absolute my-24 w-[28%] p-14  left-0 right-0 mx-auto bg-black bg-opacity-80 text-white rounded-lg">
                <h1 className="font-bold text-4xl mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                
                {!isSignIn && <input className="p-3 mt-6 mb-2 text-sm w-full rounded-lg bg-gray-800"
                type="text"
                ref={name}
                placeholder="Full Name"
                ></input>}
                
               
        
                <input className="p-3 my-2 w-full text-sm rounded-lg bg-gray-800"
                ref={email}
                type="text"
                placeholder="Email Address"
                ></input>
                <p className="text-xs text-red-700">{errorEmailMessage}</p>
              
               
                
                <input className=" p-3 my-2 w-full text-sm rounded-lg bg-gray-800"
                ref={password}
                type="password"
                placeholder="Enter Password"
                ></input>
                <p className="text-xs  text-red-700">{errorPassMessage}</p>
                
                <button className="p-3 mt-10 mb-2 w-full bg-red-700 rounded-lg" onClick={handleValidationOnClick}>{isSignIn? "Sign In" : "Sign Up"}</button>
                <p className="text-xs  text-red-700">{autherrorMessage}</p>
                <div className="flex flex-wrap justify-between">
                <label className="flex items-center mr-4">
                <input type="checkbox" className="form-checkbox h-3 w-3 mx-2 text-blue-600 focus:ring-1 focus:ring-blue-500 rounded"/>
                <span className=" text-xs text-gray-300">Remember me</span>
                </label>
                <a href="#" className="text-xs text-blue-500 hover:underline">Need help?</a>
                </div>

                <div className="mt-10 mb-2 text-left p-2 text-sm text-gray-500" onClick={handleSignIn}>
                   {isSignIn ? 
                   <p>New to Netflix? <a className="text-blue-500 hover:underline cursor-pointer text-md" >Sign up now </a></p>:
                   <p>Already registered User? <a className="text-blue-500 hover:underline cursor-pointer text-md" >Sign In now</a></p>

                } 
                </div>
            </form>
        </div>
    )
}

export default Login;