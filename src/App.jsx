import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageHome from './pages/pageHome';
import PageProducts from './pages/pageProducts';
import Provider from './components/context/Provider';




function App() {
  return (
    <div>
      <Provider>
        <Router>
          <Routes>
            <Route path="/" element={<PageHome/>}/>
            <Route path="/produtos"  element={<PageProducts/>} />
            <Route path="/carrinho" />
            <Route path="/checkout" />
            <Route path="*"  />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
