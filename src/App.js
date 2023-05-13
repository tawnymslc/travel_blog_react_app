import './App.css';
import Header from './components/Header';
import SearchBar from './components/Searchbar';
import TravelCard from './components/TravelCard';
import { Container } from 'reactstrap';
import HomePage from './pages/HomePage';

function App() {
  
  return (
    <>
    <Header />
    <Container>
    <HomePage />
    <TravelCard />
    <SearchBar />
    </Container>
    </>
  );
}

export default App;
