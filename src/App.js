import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="grid h-screen grid-rows-[min-content_1fr]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
