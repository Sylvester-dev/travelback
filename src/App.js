import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Feature from './components/Feature/Feature';
import HotelDetail from './components/HotelDetail/HotelDetail';
import item6 from './images/img1.jpg';
import item7 from './images/img2.jpg';
import item8 from './images/img3.jpg';
import item9 from './images/img1.jpg';

const HomesDetails = [
    {
        id: 2,
        img: item6,
        title: 'The patio Barcelona',
        location: 'Barcelona',
        price: '$135',
        rating: '9.5',
    },
    {
        id: 1,
        img: item7,
        title: 'Flora Ciado Apartments',
        location: 'Lisbon',
        price: '$105',
        rating: '8.7',
    },
    {
        id: 3,
        img: item8,
        title: 'Sea front Apartments',
        location: 'London',
        price: '$165',
        rating: '9.5',
    },
    {
        id: 4,
        img: item9,
        title: 'The tower of Chevel',
        location: 'Chevel',
        price: '$135',
        rating: '9.6',
    },
];

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      <HotelDetail homesDetails={HomesDetails}  />
    </div>
  );
}

export default App;
