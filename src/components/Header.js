import { HEADER_LOGO } from "../utils/Constants";

const Header = () => {
    return (
        <div>
            <img className = {"absolute w-48 p-2 z-10 bg-gradient-to-b from-black"}src={HEADER_LOGO} alt="Logo"></img>

        </div>
    )
}

export default Header;