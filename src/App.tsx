// App.tsx
// Main React component. Sets up routing and layout for all pages in the app.
// Removed unused React import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PackageDetail from './pages/PackageDetail';
import Membership from './pages/Membership';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import UsersInformation from './pages/UsersInformation.tsx';
import TrekDetail from './pages/TrekDetail';
import BikeRidingPackageDetail from './pages/BikeRidingPackageDetail';
import BookingPage from './pages/BookingPage';

function App() {
  // Sets up the router and renders the header, main content (routes), and footer
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Defines routes for each main page/component */}
            <Route path="/" element={<Home />} />
            <Route path="/package/:id" element={<PackageDetail />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/users" element={<UsersInformation />} />
            <Route path="/trek/:id" element={<TrekDetail />} />
            <Route path="/bikeriding/:id" element={<BikeRidingPackageDetail />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;