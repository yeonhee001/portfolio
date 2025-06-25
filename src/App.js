import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/_common/Header';
import Home from './pages/Home';
import Work from './pages/Work';
import Detail from './pages/Detail';
import About from './pages/About';
import Footer from './component/_common/Footer';
import './styles/_reset.scss';
import './styles/_variables.scss';
import './styles/_style.scss';

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/project' element={<Work/>}/>
          <Route path='/project/detail/:id' element={<Detail/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
