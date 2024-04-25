import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import WorkoutList from './pages/WorkoutList'
import AddWorkout from './pages/AddWorkout'
import Navbar from './components/Navbar'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/workouts" element={<WorkoutList />} />
            <Route path="/add-workout" element={<AddWorkout />} />
          </Routes>
        </div>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;