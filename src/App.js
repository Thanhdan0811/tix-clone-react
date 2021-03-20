import Banner from './components/banner';
import SliderFilms from './components/carousel-films';
import Checkout from './components/checkout';
import Cinemas from './components/cinemas';
import Contacts from './components/contacts';
import FilmDetail from './components/film-detail';
import Footer from './components/footer';
import Header from './components/header';
import MobileApp from './components/mobile-app';
import News from './components/news';
import Profile from './components/profile';
import SignIn from './components/signin';
import SignUp from './components/signup';

function App() {
  return (
    <>
      <Header/>
      <Profile/>
      {/* <FilmDetail/> */}
      {/* <Checkout/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
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
