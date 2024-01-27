import logo from "./cat-detective.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1> Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/taegen-seto"
            target="_blank"
            title="github profile"
          >
            coded by Taegen Seto 🖤
          </a>
          <a
            href="https://github.com/taegen-seto/react-dictionary-project"
            target="_blank"
            title="github repository"
          >
            {" "}
            open sourced on GitHub 🐈‍⬛
          </a>
          <a
            href="https://dapper-crumble.netlify.app/"
            target="_blank"
            title="netlify site"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
