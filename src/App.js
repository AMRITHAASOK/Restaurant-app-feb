
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Allrest from './Components/AllRest/Allrest';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import View from './Components/ViewRest/View';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        <Routes>
          {/* localhost://3000  - all restaurant view*/}
          <Route path='/' element={<Allrest/>}/>
          <Route path='/view/:id' element={<View/>}/>
        </Routes>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
