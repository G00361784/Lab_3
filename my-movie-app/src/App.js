import logo from './logo.svg';
import './App.css';
import Content from './Components/content';
import Header from './Components/header';//importing the component Header
import Footer from './Components/footer';//importing the footer from components
import NavigationBar from './Components/navbar';//importing the nav bar from components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (//removed default content from react
    <Router>
      <NavigationBar />/**adding the NavigationBarfrom components */
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<h1>Read Component</h1>} />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
      <Footer />
    </Router>

    
    
  );//returning the html like content
}

export default App;
