import { useNavigate } from "react-router-dom";
import { HEADER_LOGO, SIGN_IN_ICON } from "../utils/Constants";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";

const Header = () => {
    const naviagte = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () =>
    {
        signOut(auth).then(() => {
            // Sign-out successful.
            naviagte("/")
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className = {"absolute p-2 z-10 bg-gradient-to-b w-screen from-black flex flex-wrap justify-between"}>
            
            <img className = " w-48" src={HEADER_LOGO} alt="Logo"></img>
        {user && <div className="flex flex-wrap  justify-between items-center">
            <img className="w-10 h-10 mx-2 rounded-full" src={SIGN_IN_ICON}></img>
            <div className="font-bold text-white text-sm text-left flex flex-col mx-4"><spna>{user.displayName}</spna>
            <button className="cursor-pointer" onClick={handleSignOut}>Sign Out</button></div>
            </div>
        }

        </div>
    )
}

export default Header;