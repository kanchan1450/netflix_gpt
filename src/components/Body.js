import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browser from "./Browser";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userInfoSlice";
import { useEffect } from "react";

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browser",
            element: <Browser/>
        }
    ])

    useEffect(() =>
        {
            onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName} = user;
                dispatch(addUser({uid : uid, email: email, displayName: displayName}));

                
            } else {
                dispatch(removeUser());
            }
            });
            
        }, []);
    return (
       <div>
        <RouterProvider router={appRouter}/>
       </div>
        
    )
}

export default Body;