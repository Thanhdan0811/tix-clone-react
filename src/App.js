import Banner from './components/banner';
import SliderFilms from './components/carousel-films';
import Cinemas from './components/cinemas';
import Contacts from './components/contacts';
import FilmDetail from './components/film-detail';
import Footer from './components/footer';
import Header from './components/header';
import MobileApp from './components/mobile-app';
import News from './components/news';

function App() {
  return (
    <>
      <Header/>
      <FilmDetail/>
      
      {/* <Banner/> 
      <SliderFilms/>
      <Cinemas/>
      <News/>
      <MobileApp/> */}
      <Contacts/>
      <Footer />
    </>
  );
}

export default App;
