import './App.css';
import Project from './Project.js';

function App() {
  return (
    <>
    <section id='section-1'>
      <h1>Welcome to my Website!</h1>
      <a href='#section-2'>
        <button>My Projects</button>
      </a>
    </section>


    <section id='section-2'>
      <h1>My Projects</h1>
      <Project />
    </section>
    </>
  );
}

export default App;