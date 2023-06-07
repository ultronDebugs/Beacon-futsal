import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase.utils";
import { nullUserState, updateUserState } from "./redux/userSlice";
// import type { RootState } from "./redux/store";
import { useEffect } from "react";

function App() {
  // const [userState, setUserState] = useState<null | User>(null);
  // setUserState(data);

  // const userState = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();

  const getUserAuth = () => {
    onAuthStateChanged(auth, (data) => {
      if (data === null) {
        dispatch(nullUserState);
      }
      dispatch(
        updateUserState({
          displayName: data?.displayName,
          email: data?.email,
          uid: data?.uid,
          photoUrl: data?.photoURL,
        })
      );
      console.log("user data not in state", data);
    });
  };
  useEffect(getUserAuth, [dispatch]);
  return (
    <>
      {/* <div onClick={getUserAuth}> something</div> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>home page</h1>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
