import Header from './components/Header'
import MyStory from './components/MyStory'
import Projects from './components/Projects'
import Footer from './components/Footer'
import StarfieldAnimation from 'react-starfield-animation'

function App() {
  return (
    //classNameApp edited in index.css
    <div className="App" >
       <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          alphaFactor: '0.0',
          depth: '150'
        }}
        />
      <Header />
      <MyStory/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
