import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Screen/Main";
import Projects from "./components/Screen/Projects";
import About from "./components/Screen/About";
import Contacts from "./components/Screen/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Projects />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
