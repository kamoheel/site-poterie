
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/index.scss';

import ScrollToTop from './utils/helpers/ScrollToTop';
import Header from './components/header';

function App() {
  return (
    <>

        <BrowserRouter>
             <ScrollToTop />
              <Header />
             {/* <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              </Routes>
              <Footer /> */}
        </BrowserRouter>
    </>
  );
}

export default App;
