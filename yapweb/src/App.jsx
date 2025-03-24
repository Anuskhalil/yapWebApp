import React, { useState, useEffect } from 'react';
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
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SocietiesSlider />
                <PresWords />
                <UniversityPage />
                <ContactWithLoader />
              </>
            }
          />
          <Route
            path="/our-team"
            element={<OurTeamLoader />}
          />
          <Route
            path="/register"
            element={<RegistrationFormWithLoader />}
          />
          <Route
            path="/SocietyForm"
            element={<SocietyFormWithLoader />}
          />
          <Route
            path="/society/:id"
            element={<SocietyDetailWithLoader />}
          />
          <Route
            path="/AboutYap"
            element={<AboutYapWithLoader />}
          />
          <Route
            path="/missionVisionValues"
            element={<MissionVisionValuesWithLoader />}
          />
          <Route
            path="/InternationalWorkshops"
            element={<InternationalWorkshopsWithLoader />}
          />
          <Route
            path="/volunteering"
            element={<VolunteersWithLoader />}
          />
          <Route
            path="/VolunteeringRegistration"
            element={<VolunteeringRegistrationWithLoader />}
          />
          <Route
            path="/Internees"
            element={<InterneesWithLoader />}
          />
          <Route
            path="/YapEvents"
            element={<YapEventsWithLoader />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;