import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/HeaderAndNav/Header';
import Footer from '@/components/Footer';

function App() {
  useEffect(() => {
    document.body.style.background =
      'linear-gradient(to bottom, rgb(27, 27, 27) 6%, rgb(75, 72, 72) 135%, rgb(151, 150, 150))';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.minHeight = '100vh';
  }, []);

  return (
    <div className="contentWrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
