import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleGame, updateName, updateUsn } from "../utils/loginSlice";
// import './Login.css';

function Login() {

    const name = useRef(null);
    const usn = useRef(null);
    const navigate = useNavigate();
    const showBrowse = useSelector((store) => store.login.startGame);
    const dispatch = useDispatch();


    const handleButtonClick = () => {
        // console.log(name.current.value, usn.current.value);
        dispatch(toggleGame());
        dispatch(updateName(name.current.value));
        dispatch(updateUsn(usn.current.value));
        navigate("/browse");
    }

    useEffect(() => {
        if (showBrowse) {
            navigate("/browse");
        }
    }, []);

    return (


        <div  className="flex justify-center items-center h-screen bg-cover bg-center">
                <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 z-20">
                    <h1 className="font-bold text-3xl py-4">
                        Enter the GAME
                    </h1>


                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-4 w-full bg-gray-700"
                    />
                    <input
                        ref={usn}
                        type="text"
                        placeholder="USN"
                        className="p-4 my-4 w-full bg-gray-700"
                    />

                    <button
                        className="p-4 my-6 bg-red-700 w-full rounded-lg"
                        onClick={handleButtonClick}
                    >
                        ENTER
                    </button>
                </form>
        </div>
    );
}

export default Login;
