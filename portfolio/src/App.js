// import logo from './logo.svg';
//import './App.css';
import './styles/body.css'

import  Header  from './components/Header'
import MyStory from './components/MyStory'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    
    <div className="App">
    <Navigation />
    <Header />
    <MyStory />
    <Projects />
    <Footer />
    </div>
  );
}

export default App;
