import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header mb-4">Dictionary</header>
        <Dictionary defaultKeyword="adventure" />
      </div>
      <div className="footer">
        <a
          href="https://github.com/AshJungers/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-a"
        >
          Open-sourced{" "}
        </a>
        code by{" "}
        <a
          href="https://www.linkedin.com/in/ashleyjungers/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ashley Jungers
        </a>
      </div>
    </div>
  );
}
