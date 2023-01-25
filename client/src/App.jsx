
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/index.scss';

import ScrollToTop from './utils/helpers/ScrollToTop';
import Header from './components/header';
import Footer from './components/footer';
import PrivacyPolicy from './pages/privacyPolicy';
import Home from './pages/home';
import AdultClasses from './pages/adultClasses';
import TeenClasses from './pages/teenClasses';
import KidClasses from './pages/kidClasses';
import Blog from './pages/blog';

function App() {
  return (
    <>

        <BrowserRouter>
             <ScrollToTop />
              <Header />
             <Routes>
              
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cours-de-poterie-ceramique-adultes" element={<AdultClasses />} />
                <Route exact path="/cours-de-poterie-ceramique-adolescents" element={<TeenClasses />} />
                <Route exact path="/cours-de-poterie-ceramique-enfants" element={<KidClasses />} />
                <Route exact path="/actus-atc" element={<Blog />} />
               {/*  <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />*/}
                <Route path="/mentions-legales" element={<PrivacyPolicy />} />
              </Routes>
              <Footer /> 
        </BrowserRouter>
    </>
  );
}

export default App;
