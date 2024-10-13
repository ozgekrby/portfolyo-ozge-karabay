import "./index.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { retrievalData } from "./redux/actions/actions";
import { getSystemLanguage } from "./hooks/getLanguage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./components/Error";
import Hero from "./components/Body/Hero";
import Skills from "./components/Body/Skills";
import Profile from "./components/Body/Profile";
import Projects from "./components/Body/Projects";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ModeSwitch from "./components/Header/ModeSwitch";
import Loading from "./components/Loading";

function App() {
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [lang] = useLocalStorage("lang", getSystemLanguage());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrievalData(lang));
  }, [dispatch, lang]);

  useEffect(() => {
    if (error.length > 0) {
      if (lang === "tr") {
        toast.error("Veri yüklenemedi");
      } else {
        toast.error("Data loading failed");
      }
    }
  }, [error, lang]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="font-sans flex flex-col gap-5 w-full">
      {error.length > 0 ? (
        <Error />
      ) : (
        <>
          <div className="w-4/5 m-auto mt-4 flex flex-col gap-7">
            <ModeSwitch />
            <Header />
            <Hero />
            <Skills />
            <Profile />
            <Projects />
          </div>
          <Footer />
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={1400}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ marginTop: "2rem" }}
      />
    </div>
  );
}

export default App;
