import React, { useState, useEffect } from 'react';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import OurTeam from './components/OurTeam';
import SocietiesSlider from './components/SocietiesSlider';
import PresWords from './components/PresWord';
import UniversityPage from './components/MainPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WithLoader from './components/WithLoader';
import Loader from './components/Loader';
import RegistrationForm from './components/RegistrationForm';
import SocietyDetail from './components/SocietyDetail';
import SocietyForm from './components/SocietyForm';
import AboutYap from './components/AboutYap';
import VolunteeringPage from './components/Volunteering';
import VolunteeringRegistration from './components/VolunteerRegistration';
import Internees from './components/Internees';
import MissionVisionValues from './components/MissionVisionValues';
import YapEvents from "./components/YapEvents";
import InternationalWorkshops from "./components/InternationalWorkshops";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const ContactWithLoader = WithLoader(Contact);
const OurTeamLoader = WithLoader(OurTeam);
const RegistrationFormWithLoader = WithLoader(RegistrationForm);
const SocietyFormWithLoader = WithLoader(SocietyForm);
const SocietyDetailWithLoader = WithLoader(SocietyDetail);
const AboutYapWithLoader = WithLoader(AboutYap);
const MissionVisionValuesWithLoader = WithLoader(MissionVisionValues);
const InternationalWorkshopsWithLoader = WithLoader(InternationalWorkshops);
const VolunteersWithLoader = WithLoader(VolunteeringPage);
const VolunteeringRegistrationWithLoader = WithLoader(VolunteeringRegistration);
const InterneesWithLoader = WithLoader(Internees);
const YapEventsWithLoader = WithLoader(YapEvents);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>

      <div>
        <ScrollToTop />
        <GlobalStyle />
        <NavigationBar />
        <Routes>
          {/* Public Routes (No Protection) */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <>
                  <Hero />
                  <SocietiesSlider />
                  <PresWords />
                  <UniversityPage />
                  <ContactWithLoader />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/our-team"
            element={
              <ProtectedRoute>
                <OurTeamLoader />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <RegistrationFormWithLoader />
              </ProtectedRoute>
            }
          />
          <Route
            path="/SocietyForm"
            element={
              <ProtectedRoute>
                <SocietyFormWithLoader />
              </ProtectedRoute>
            }
          />
          <Route
            path="/society/:id"
            element={
              <ProtectedRoute>
                <SocietyDetailWithLoader />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AboutYap"
            element={
              <ProtectedRoute>
                <AboutYapWithLoader />
              </ProtectedRoute>
            }
          />
          <Route
            path="/missionVisionValues"
            element={
              <ProtectedRoute>
                <MissionVisionValuesWithLoader />
              </ProtectedRoute>
            }
          />
          <Route
            path="/InternationalWorkshops"
            element={
              <ProtectedRoute>
                <InternationalWorkshopsWithLoader />
              </ProtectedRoute>
            }
          />
          <Route
            path="/volunteering"
            element={
              <ProtectedRoute>
                <VolunteersWithLoader />
              </ProtectedRoute>
            }
          />
          <Route
            path="/VolunteeringRegistration"
            element={
              <ProtectedRoute>
                <VolunteeringRegistrationWithLoader />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Internees"
            element={
              <ProtectedRoute>
                <InterneesWithLoader />
              </ProtectedRoute>
            }
          />
          <Route
            path="/YapEvents"
            element={
              <ProtectedRoute>
                <YapEventsWithLoader />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;