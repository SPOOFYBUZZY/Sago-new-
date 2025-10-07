// React default import not required with new JSX transform
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import RegistrationPage from './pages/RegistrationPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;