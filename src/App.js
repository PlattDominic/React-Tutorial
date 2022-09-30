import './App.css';

function App() {
  const title = 'Welcome to the new react site!';
  const dislikes = 20;
  const link = 'https://reactjs.org/';

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Dislikes { dislikes } times</p>

        <p>{ "Hello there" }</p>
        <p>{ ["html", "css", "react"] }</p>
        <p>{ Math.random() * 50 }</p>

        <a href={ link } target="_blank" rel='noreferrer'>React Site</a>
      </div>
    </div>
  );
}

export default App;
