import { useState } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import EnvelopePage from "./components/EnvelopePage";
import MainPage from "./pages/MainPage";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      {entered ? (
        <MainPage />
      ) : (
        <EnvelopePage onEnter={() => setEntered(true)} />
      )}
    </LazyMotion>
  );
}
