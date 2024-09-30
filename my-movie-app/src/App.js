import logo from './logo.svg';
import './App.css';
import Content from './Components/content';

function App() {
  return (//removed 
    <div className="App">
      <Content></Content>

      <h1>Hello world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
