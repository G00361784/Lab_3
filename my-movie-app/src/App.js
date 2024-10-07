import logo from './logo.svg';
import './App.css';
import Content from './Components/content';
import Header from './Components/header';//importing the component Header
import Footer from './Components/footer';//importing the footer from components
import NavigationBar from './Components/navbar';//importing the nav bar from components
import Read from './Components/read';
import Create from './Components/create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (//removed default content from react
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Read/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>
      <Footer />
    </Router>

    
    
  );//returning the html like content
}

export default App;
