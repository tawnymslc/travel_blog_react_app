import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SearchBar from './components/Searchbar';
import TravelCard from './components/TravelCard';
import Footer from './components/Footer';
import StripeContainer from './components/StripeContainer';
import { Container } from 'reactstrap';
import 'font-awesome/css/font-awesome.css';


function App() {
  
  return (
    <>
    <Header />
    <Container>
    <HomePage />
    <TravelCard />
    <SearchBar />
    </Container>
    <StripeContainer />
    <Footer />
    </>
  );
}

export default App;
