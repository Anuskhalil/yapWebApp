import React, { useEffect } from "react";
import "./InternationalWorkshops.css";
import AOS from "aos";
import "aos/dist/aos.css";

const InternationalGuests = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const workshopGroups = [
    // {
    //   heading: "UIT - World Culture Festival",
    //   images: ["workshop1", "workshop2"], 
    // },
    // {
    //   heading: "DHA Suffa University - World Culture Festival",
    //   images: ["workshop3", "workshop4"], 
    // },
    // {
    //   heading: "Szabist - World Culture Festival",
    //   images: ["workshop5"], 
    // },
    {
      heading: "Workshop by Nepal Group at Salim Habib University in World Culture Festival",
      images: ["workshop13", "workshop9", "workshop11", "workshop10", "workshop12"],
    },
    // {
    //   heading: "Arts Council of Pakistan - World Culture Festival",
    //   images: ["workshop7", "workshop8"], 
    // },
    {
      heading: "Indus University - World Culture Festival",
      images: ["workshop36", "workshop48", "workshop38", "workshop39", "workshop40", "workshop41", "workshop42", "workshop43", "workshop44", "workshop45", "workshop46", "workshop47", "workshop37", "workshop49"],
    },
    {
      heading: "Workshop by Germany and France Group at Greenwich University in  World Culture Festival",
      images: ["workshop16", "workshop17", "workshop18", "workshop19", "workshop20", "workshop21", "workshop22"],
    },
    {
      heading: "Workshop by Kososvo Group at SMIU in World Culture Festival",
      images: ["workshop23", "workshop24", "workshop25", "workshop26", "workshop27", "workshop28", "workshop29", "workshop30", "workshop31"],
    },
    {
      heading: "SSUET - World Culture Festival",
      images: ["workshop32", "workshop33", "workshop35", "workshop34"],
    },
  ];

  return (
    <div className="international-guests-container mt-5 py-5">
      <h1 className="international-guests-title">International Guests Workshops</h1>
      <div className="container">
        {workshopGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="workshop-group" data-aos="fade-up">
            <h2 className="group-heading">{group.heading}</h2>
            <div className="row">
              {group.images.map((image, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={index} data-aos="zoom-in">
                  <div className="workshop-card">
                    <img
                      src={`./src/images/WorkshopsByInternationalGuests/${image}.jpeg`}
                      alt={image}
                      className="workshop-image img-fluid"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalGuests;
