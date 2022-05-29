import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header mb-4">Dictionary</header>
        <Dictionary defaultKeyword="adventure" />
        <footer className="App-footer">
          <small>Coded by Ashley Jungers</small>
        </footer>
      </div>
    </div>
  );
}
