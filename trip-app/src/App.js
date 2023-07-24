import './App.css';
import { Routes, Route } from 'react-router';
import TripsList from './components/TripsList/TripsList';
import NavBar from './components/NavBar/NavBar';
import InsertTrip from './components/InsertTrip/InsertTrip';
import SelectedTrip from './components/SelectedTrip/SelectedTrip';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<TripsList />} />
        <Route path="/insertTrip" element={<InsertTrip />} />
        <Route path="/trip/:id" element={<SelectedTrip />} />
      </Routes>
    </div>
  );
}

export default App;
