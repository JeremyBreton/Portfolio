import memoji5 from '../../../public/images/memoji-5.png';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={memoji5}
          alt="Jérémy Breton, développeur web fullstack"
          className="imgScale"
        />
        <div>
          <h1>Jérémy Breton</h1>
          <h2>Développeur Web Fullstack </h2>
        </div>
      </header>
    </div>
  );
}

export default App;
