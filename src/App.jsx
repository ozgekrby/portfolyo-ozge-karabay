import "./index.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Loading from "./components/Loading";
import { retrievalData } from "./redux/actions/actions";
import { getSystemLanguage } from "./hooks/getLanguage";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Hero = lazy(() => import("./components/Body/Hero"));
const Skills = lazy(() => import("./components/Body/Skills"));
const Profile = lazy(() => import("./components/Body/Profile"));
const Projects = lazy(() => import("./components/Body/Projects"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Header = lazy(() => import("./components/Header/Header"));
const ModeSwitch = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./components/Header/ModeSwitch")), 2000)
    )
);

function App() {
  const loading = useSelector((state) => state.data.loading);
  const [lang] = useLocalStorage("lang", getSystemLanguage());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrievalData(lang));
  }, [dispatch]);

  useEffect(() => {
    if (loading === false && lang === "tr") {
      toast.info("Yönlendiriliyorsunuz...");
    } else if (loading === false && lang === "en") {
      toast.info("Redirecting...");
    }
  }, [loading]);

  return (
    <div
      className="font-sans flex flex-col gap-5"
      
    >
      <Suspense fallback={<Loading />}>
        <TransitionGroup>
          <CSSTransition
            classNames="fade"
            timeout={300}
            key={loading ? "loading" : "loaded"}
          >
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
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
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
