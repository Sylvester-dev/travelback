import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Feature from './components/Feature/Feature';
import HotelDetail from './components/HotelDetail/HotelDetail';
import QuickHotelDetail from './components/QuickHotelDetail/QuickHotelDetail';
import item1 from './images/img1.jpg';
import item2 from './images/img2.jpg';
import item3 from './images/img3.jpg';
import item5 from './images/img5.jpg';
import item6 from './images/img6.jpg';
import item7 from './images/img7.jpg';
import item8 from './images/img8.jpg';
import item9 from './images/img9.jpg';

const HomesDetails = [
    {
        id: 1,
        img: item1,
        title: 'SeaScape',
        location: 'Barcelona',
        price: '$135',
        rating: '9.5',
    },
    {
        id: 2,
        img: item2,
        title: 'SilverCloud',
        location: 'Lisbon',
        price: '$105',
        rating: '8.7',
    },
    {
        id: 3,
        img: item3,
        title: 'The Goring',
        location: 'London',
        price: '$165',
        rating: '9.5',
    },
    {
        id: 4,
        img: item5,
        title: 'The tower of Chevel',
        location: 'Chevel',
        price: '$135',
        rating: '9.6',
    },
];
const QuickHomesDetails = [
    {
        id: 5,
        img: item6,
        title: 'The Front Bay',
        location: 'Barcelona',
        price: '1 wei/sec',
        rating: '9.5',
    },
    {
        id: 6,
        img: item7,
        title: 'The Nine',
        location: 'Lisbon',
        price: '2 wei/sec',
        rating: '8.7',
    },
    {
        id: 7,
        img: item8,
        title: 'Sun and Sand Hotel',
        location: 'London',
        price: '4 wei/sec',
        rating: '9.5',
    },
    {
        id: 8,
        img: item9,
        title: 'The True Eyes',
        location: 'Chevel',
        price: '3 wei/sec',
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
      <QuickHotelDetail homesDetails={QuickHomesDetails}  />
    </div>
  );
}

export default App;
