import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";


// import des pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Page404 from './pages/Page404';
import Favorites from "./pages/Favorites";
import ComicsByCharactersId from "./pages/ComicsByCharactersId";

// import des composants
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";


// import des icones 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
library.add(faHeart);


function App() {

  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);


  return (
    <div className="AppContainer">
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Characters skip={skip} setSkip={setSkip} limit={limit} setLimit={setLimit} />} />
          <Route path="/comics" element={<Comics skip={skip} setSkip={setSkip} limit={limit} setLimit={setLimit} />} />
          <Route path="/comics/:characterId" element={<ComicsByCharactersId />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>);
}

export default App;
