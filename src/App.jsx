import "./index.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Loading from "./components/Loading";
import { retrievalData } from "./redux/actions/actions";
import { getSystemLanguage } from "./hooks/getLanguage";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Hero = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./components/Body/Hero")), 2000)
    )
);
const Skills = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./components/Body/Skills")), 2000)
    )
);
const Profile = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./components/Body/Profile")), 2000)
    )
);
const Projects = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./components/Body/Projects")), 2000)
    )
);
const Footer = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./components/Footer/Footer")), 2000)
    )
);
const Header = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./components/Header/Header")), 2000)
    )
);
const ModeSwitch = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./components/Header/ModeSwitch")), 2000)
    )
);

function App() {
  const [darkMode] = useLocalStorage(
    "darkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const loading = useSelector((state) => state.data.loading);
  const [lang] = useLocalStorage("lang", getSystemLanguage());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrievalData(lang));
  }, [dispatch]);

  return (
    <div
      className={
        darkMode
          ? "dark bg-slate-900 h-screen font-sans flex flex-col gap-0"
          : "font-sans flex flex-col gap-5"
      }
    >
      <Suspense fallback={<Loading />}>
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={300} key={loading ? "loading" : "loaded"}>
            {loading === false ? (
              <>
                {" "}
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
            ) : (
              <Loading />
            )}
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </div>
  );
}

export default App;
