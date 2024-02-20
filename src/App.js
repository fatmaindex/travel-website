import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
      </>
    </div>
  );
}

export default App;
