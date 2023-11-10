import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleGame, updateName, updateUsn } from "../utils/loginSlice";
import { GAMEIDS } from "../utils/constants";

function LeftDescription() {
  return (
    <div className="flex flex-col justify-center items-start w-full md:w-6/12 p-8 bg-gray-900 text-gray-200 overflow-auto h-screen">
      <h1 className="font-bold text-4xl mb-4">UnMasked</h1>
      <p className="text-lg">
        Uncover the secrets within these encrypted messages, each accompanied by captivating stories offering hints about the cryptographic methods used. It's a thrilling twist that will keep you on the edge of your seat! 🧐💥
      </p>
    </div>
  );
}

function RightLoginForm() {
  const name = useRef(null);
  const usn = useRef(null);
  const gameId = useRef(null);
  const navigate = useNavigate();
  // const showBrowse = useSelector((store) => store.login.startGame);
  const dispatch = useDispatch();
  const gameIds = JSON.parse(GAMEIDS);

  const handleButtonClick = () => {
    if(!name.current.value || !usn.current.value || !gameId.current.value) {
      navigate("/")
    }
    else {
      if(!gameIds.includes(gameId.current.value)) {
        navigate("/")
      }
      else {
        dispatch(toggleGame());
        dispatch(updateName(name.current.value));
        dispatch(updateUsn(usn.current.value));
        navigate("/browse");
      }
    }
  };

 

  return (
    <div className="w-full md:w-6/12 p-8 bg-gray-800 text-white h-screen overflow-auto">
      <form onSubmit={(e) => e.preventDefault()} className="w-8/12 mx-16 my-16 md:w-5/12 absolute p-12 bg-black md:my-36 md:mx-auto right-auto text-white rounded-lg bg-opacity-80 z-20">
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
        <input
          ref={gameId}
          type="text"
          placeholder="Game ID"
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

function Login() {

  const navigate = useNavigate();
  const showBrowse = useSelector((store) => store.login.startGame);

  useEffect(() => {
    if (showBrowse) {
      navigate("/browse");
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <LeftDescription />
      <RightLoginForm />
    </div>
  );
}

export default Login;
