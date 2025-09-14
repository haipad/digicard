import { createRoot } from "react-dom/client";
import Image from "./components/Image.jsx"
import Content from "./components/Content.jsx"
import Social from "./components/Social.jsx"

function Main() {
  return (
    <main>
        <Image />
        <Content />
        <Social />
    </main>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Main />);