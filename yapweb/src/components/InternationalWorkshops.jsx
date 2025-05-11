import React, { useEffect } from "react";
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
    {
      heading: "Workshop by Nepal Group at Salim Habib University in World Culture Festival",
      images: ["workshop13", "workshop9", "workshop11", "workshop10", "workshop12"],
    },
    {
      heading: "Indus University - World Culture Festival",
      images: ["workshop36", "workshop48", "workshop38", "workshop39", "workshop40", "workshop41", "workshop42", "workshop43", "workshop44", "workshop45", "workshop46", "workshop47", "workshop37", "workshop49"],
    },
    {
      heading: "Workshop by Germany and France Group at Greenwich University in World Culture Festival",
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
    <div className="international-guests-container py-16 mt-10 text-center bg-gray-100">
      <h1 className="international-guests-title text-5xl md:text-6xl font-bold text-[#0D7292] mb-10">
        International Guests Workshops
      </h1>
      <div className="container mx-auto">
        {workshopGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="workshop-group mb-10" data-aos="fade-up">
            <h2 className="group-heading text-2xl md:text-3xl text-gray-600 text-left mb-6">
              {group.heading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {group.images.map((image, index) => (
                <div key={index} className="mb-4" data-aos="zoom-in">
                  <div className="workshop-card border border-gray-300 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
                    <img
                      src={`./src/images/WorkshopsByInternationalGuests/${image}.jpeg`}
                      alt={image}
                      className="w-full h-auto"
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