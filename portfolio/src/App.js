import Header from './components/Header'
import MyStory from './components/MyStory'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    //classNameApp edited in index.css
    <div className="App" >
      <Header />
      <MyStory/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
