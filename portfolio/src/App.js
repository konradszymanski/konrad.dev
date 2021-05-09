// import logo from './logo.svg';
// import './App.css';
import  Header  from './components/Header'
import MyStory from './components/MyStory'
import Navigation from './components/Navigation'
import Projects from './components/Projects'

function App() {
  return (
    
    <div className="App">
    <Navigation />
    <Header />
    <MyStory />
    <Projects />
    </div>
  );
}

export default App;
