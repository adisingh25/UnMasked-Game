import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleGame, updateName, updateUsn } from "../utils/loginSlice";

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
  const navigate = useNavigate();
  const showBrowse = useSelector((store) => store.login.startGame);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(toggleGame());
    dispatch(updateName(name.current.value));
    dispatch(updateUsn(usn.current.value));
    navigate("/browse");
  };

  useEffect(() => {
    if (showBrowse) {
      navigate("/browse");
    }
  }, []);

  return (
    <div className="w-full md:w-6/12 p-8 bg-gray-800 text-white">
      <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-5/12 absolute p-12 bg-black my-36 mx-auto right-auto text-white rounded-lg bg-opacity-80 z-20">
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

function Login() {
  return (
    <div className="flex">
      <LeftDescription />
      <RightLoginForm />
    </div>
  );
}

export default Login;
