import "./App.css";
import About from "./Components/About/About";
import Booking from "./Components/Booking/Booking";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Specials from "./Components/Specials/Specials";
import Testomonials from "./Components/Testomonials/Testomonials";
import { fetchAPI, submitAPI } from "./Functions";
function App() {
  return (
    <>
      <Navigation />
      <Header />

      <div className="container">
        <Specials />
        <Booking />
        <Testomonials />
        <About />
      </div>
      <Footer />
    </>
  );
}

export default App;
