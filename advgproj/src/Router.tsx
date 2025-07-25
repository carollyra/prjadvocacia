import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import Sobre from './pages/sobre';
import Servicos from './pages/servicos';
import Contato from './pages/contato';

export default function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}
