import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
// import { useDispatch } from "react-redux";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./utils/firebase.utils";
import "react-toastify/dist/ReactToastify.css";
// import { nullUserState, updateUserState } from "./redux/userSlice";
// import type { RootState } from "./redux/store";
// import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import StatePage from "./pages/Statepage";
import NotFoundPage from "./pages/NotFoundPage";
import SelectPitchPage from "./pages/SelectPitchPage";
import PitchInfoPage from "./pages/PitchInfoPage";
import SatesPage from "./pages/StatesPage";
// import { createPortal } from "react-dom";
// import LoginModal from "./components/LoginModal";s

function App() {
  // const [userState, setUserState] = useState<null | User>(null);
  // setUserState(data);
  // const portal = document.getElementById("portal");
  // const [openModal, setOpenModal] = useState(true);

  // const userState = useSelector((state: RootState) => state.user.value);
  // const dispatch = useDispatch();

  // const getUserAuth = () => {
  //   onAuthStateChanged(auth, (data) => {
  //     if (data === null) {
  //       dispatch(nullUserState);
  //     }
  //     dispatch(
  //       updateUserState({
  //         displayName: data?.displayName,
  //         email: data?.email,
  //         uid: data?.uid,
  //         photoUrl: data?.photoURL,
  //       })
  //     );
  //     console.log("user data not in state", data);
  //   });
  // };
  // useEffect(getUserAuth, [dispatch]);
  return (
    <>
      {/* <div onClick={getUserAuth}> something</div> */}
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/states/:id" element={<StatePage />} />
        <Route path="/states" element={<SatesPage />} />
        <Route path="/pitches" element={<SelectPitchPage />} />
        <Route path="/:id" element={<NotFoundPage />} />
        <Route path="/pitches/pitch/:id" element={<PitchInfoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
