function App() {
  return (
    <body>
      <header className="header">
        <h1>Bootcamp</h1>
      </header>
      <section className="DayOne">
        <h2>Day1</h2>
        <nav className="nav">
          <ul className="navlist">
            <li className="navitem">
              <a href="#Environment">Environment setup</a>
            </li>
            <li className="navitem">
              <a href="#Initialize">Initialize react app</a>
            </li>
            <li className="navitem">
              <a href="#Connect">Create and connect Repo</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="DayTwo">
        <h2>Day2</h2>
        <nav className="nav">
          <ul className="navlist">
            <li className="navitem">
              <a href="#Environment">Personalportfolio page task</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="DayThree">
        <h2>Day3</h2>
        <nav className="nav">
          <ul className="navlist">
            <li className="navitem">
              <a href="#Copilot">Copilot signup</a>
            </li>
            <li className="navitem">
              <a href="#Symentics">Symentic project</a>
            </li>
          </ul>
        </nav>
      </section>
    </body>
  );
}

export default App;
