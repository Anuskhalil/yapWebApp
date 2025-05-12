import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import logo from "../images/yap_logo_white.png";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const handleToggle = () => setExpanded(!expanded);
  const handleNavItemClick = (navigateTo) => {
    setExpanded(false);
    navigate(navigateTo);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Youth Ambassador Programme Logo"
              className="h-16 w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavItem text="Home" onClick={() => handleNavItemClick("/")} />
            <DropdownMenu
              title="Philosophy"
              items={[
                { text: "About Us", path: "/AboutYap" },
                { text: "Mission, Vision & Values", path: "/missionVisionValues" },
                { text: "Upcoming Events", path: "/upcomingEvents" },
                { text: "Our Societies", path: "/" },
              ]}
              onItemClick={handleNavItemClick}
            />
            <NavItem text="Our Courses" onClick={() => handleNavItemClick("/ourCourses")} />
            <DropdownMenu
              title="Events"
              items={[
                { text: "International Workshops", path: "/InternationalWorkshops" },
                { text: "YAP Events/Workshops", path: "/yapEvents" },
              ]}
              onItemClick={handleNavItemClick}
            />
            <DropdownMenu
              title="Network"
              items={[{ text: "Our MoU's", path: "/" }]}
              onItemClick={handleNavItemClick}
            />
            <NavItem text="Library" onClick={() => handleNavItemClick("/library")} />
            <DropdownMenu
              title="Work With Us"
              items={[
                { text: "Volunteering", path: "/volunteering" },
                { text: "Internship Opportunities", path: "/internees" },
                { text: "Contact", path: "/" },
              ]}
              onItemClick={handleNavItemClick}
            />
            <button
              onClick={() => handleNavItemClick("/our-team")}
              className="px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              Our Team
            </button>
            {/* {userName && (
              <DropdownMenu
                title={
                  <span className="flex items-center">
                    <FaUser className="mr-2 text-teal-400" />
                    {userName}
                  </span>
                }
                items={[
                  {
                    text: "Logout",
                    icon: <FaSignOutAlt className="mr-2 text-teal-400" />,
                    onClick: handleLogout,
                  },
                ]}
                onItemClick={() => {}}
              />
            )} */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-md text-white bg-gray-800/50 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 z-50"
            onClick={handleToggle}
            aria-controls="mobile-menu"
            aria-expanded={expanded}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={expanded ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-20 left-0 w-full bg-gray-900/95 transform transition-transform duration-300 ease-in-out ${expanded ? "translate-x-0" : "-translate-x-full"
          }`}
        id="mobile-menu"
      >
        <div className="flex flex-col space-y-1 px-4 py-6">
          <MobileNavItem text="Home" onClick={() => handleNavItemClick("/")} />
          <MobileDropdownMenu
            title="Philosophy"
            items={[
              { text: "About Us", path: "/AboutYap" },
              { text: "Mission, Vision & Values", path: "/missionVisionValues" },
              { text: "Upcoming Events", path: "/upcomingEvents" },
              { text: "Our Societies", path: "/" },
            ]}
            onItemClick={handleNavItemClick}
          />
          <MobileNavItem text="Our Courses" onClick={() => handleNavItemClick("/ourCourses")} />
          <MobileDropdownMenu
            title="Events"
            items={[
              { text: "International Workshops", path: "/InternationalWorkshops" },
              { text: "YAP Events/Workshops", path: "/yapEvents" },
            ]}
            onItemClick={handleNavItemClick}
          />
          <MobileDropdownMenu
            title="Network"
            items={[{ text: "Our MoU's", path: "/" }]}
            onItemClick={handleNavItemClick}
          />
          <MobileNavItem text="Library" onClick={() => handleNavItemClick("/library")} />
          <MobileDropdownMenu
            title="Work With Us"
            items={[
              { text: "Volunteering", path: "/volunteering" },
              { text: "Internship Opportunities", path: "/internees" },
              { text: "Contact", path: "/" },
            ]}
            onItemClick={handleNavItemClick}
          />
          <MobileNavItem
            text="Our Team"
            onClick={() => handleNavItemClick("/our-team")}
            highlight
          />
          {/* {userName && (
            <MobileNavItem
              text={
                <span className="flex items-center">
                  <FaUser className="mr-2 text-teal-400" />
                  {userName}
                </span>
              }
              onClick={handleLogout}
            >
              <span className="flex items-center">
                <FaSignOutAlt className="mr-2 text-teal-400" />
                Logout
              </span>
            </MobileNavItem>
          )} */}
        </div>
      </div>
    </nav>
  );
};

// Desktop Nav Item Component
const NavItem = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="px-3 py-2 text-white font-medium hover:text-teal-400 transition-colors duration-200"
  >
    {text}
  </button>
);

// Desktop Dropdown Menu Component
const DropdownMenu = ({ title, items, onItemClick }) => (
  <div className="relative group">
    <button className="px-3 py-2 text-white font-medium hover:text-teal-400 transition-colors duration-200 flex items-center">
      {title}
      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => item.onClick ? item.onClick() : onItemClick(item.path)}
          className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 hover:text-teal-400 transition-colors duration-200"
        >
          {item.icon && <span className="inline-flex items-center">{item.icon}</span>}
          {item.text}
        </button>
      ))}
    </div>
  </div>
);

// Mobile Nav Item Component
const MobileNavItem = ({ text, onClick, highlight, children }) => (
  <div>
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 text-white font-medium ${highlight ? "bg-teal-600 rounded-lg" : "hover:text-teal-400"
        } transition-colors duration-200`}
    >
      {text}
    </button>
    {children && <div className="pl-4">{children}</div>}
  </div>
);

// Mobile Dropdown Menu Component
const MobileDropdownMenu = ({ title, items, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-3 text-white font-medium hover:text-teal-400 transition-colors duration-200 flex items-center justify-between"
      >
        {title}
        <svg
          className={`w-5 h-5 transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pl-4 space-y-1">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => onItemClick(item.path)}
              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 hover:text-teal-400 transition-colors duration-200"
            >
              {item.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavigationBar;