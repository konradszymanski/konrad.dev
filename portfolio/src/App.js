import {BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import MyStory from './components/MyStory'
//import Navigation from './components/Navigation'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ScrollHandler from "./components/ScrollHandler";
function App() {

 
  return (
    //classNameApp edited in index.css
    
    <div className="App" >
      <BrowserRouter>
      <Header />
      <ScrollHandler />
      <MyStory/>
      <Projects />
      <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
