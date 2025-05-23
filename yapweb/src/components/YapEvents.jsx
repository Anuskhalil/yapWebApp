import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const YapEvents = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const eventGroups = [
    {
      heading: "Workshops",
      images: [
        "publicSpeakingWorkshop", "cprTraining", "techWorkshop", "paintingByFineArts", "societyFair",
      ],
    },
    {
      heading: "YAP Team Celebrations",
      images: [
        "yapEv1", "yapEv2", "yapEv3", "yapEv4", "yapEv5", "yapEv6", "yapEv7", "yapEv8", "yapEv9", "yapEv10", "yapEv11", "yapEv12"
      ],
    },
    {
      heading: "Meetups",
      images: [
        "batch1Meetup", "firstAmbassadorMeetup", "secondAmbassadorMeetup", "monthyMegaMeetup", "psychMeetup1", "psychMeetup2",
      ],
    },
    {
      heading: "Azadi Festival",
      images: [
        "azadiFestival1", "azadiFestival2", "azadiFestival3", "azadiFestival4",
        "azadiFestival5", "azadiFestival6", "azadiFestival7", "azadiFestival8",
        "azadiFestival9", "azadiFestival10", "azadiFestival11", "azadiFestival12",
        "azadiFestival13",
      ],
    },
    {
      heading: "World Cultural Performances",
      images: [
        "cultureDance", "wcfCongoDance", "wcfNinaTheatreWorkshop",
        "dadiKaKhilonaTheatreWorkshop", "wcfKushtrimTheatreWorkshop",
      ],
    },
    {
      heading: "Concerts",
      images: [
        "megaConcertWCF", "musicalShowbyYAPatSSUT", "musicalConcert",
      ],
    },
    {
      heading: "Special Events",
      images: [
        "independenceDay", "monthOfResolution",
      ],
    },
    {
      heading: "Drama & Arts",
      images: [
        "dramaticArtsAlliance1", "dramaticArtsAlliance3", "dastanGoe", "dancePerformance",
      ],
    },
    {
      heading: "Youme Difah",
      images: [
        "youmeDifahGroupSinging", "youmeDifahPublicSpeaking1",
        "youmeDifahPublicSpeaking2", "youmeDifahSinging1", "youmeDifahSinging2",
        "youmeDifahSinging3", "youmeDifahSinging4", "youmeDifahSinging5",
        "youmeDifahSinging6", "youmeDifahSinging7", "yapEv7", "yapEv8", "yapEv9",
      ],
    },
    {
      heading: "Tech Workshop",
      images: [
        "techTitanWithKarachiAi1", "techTitanWithKarachiAi2", "techTitanWithKarachiAi3",
        "techTitanWithKarachiAi4", "techTitanWithKarachiAi5",
      ],
    },
  ];

  return (
    <div className="yap-events-container mt-5 py-5 relative top-12">
      <h1 className="yap-events-title text-center mb-10 text-5xl font-bold text-[#0D7292]">
        YAP Events
      </h1>
      <div className="container mx-auto px-4">
        {eventGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="event-group mb-10" data-aos="fade-up">
            <h2 className="group-heading text-2xl mb-5 text-gray-600">{group.heading}</h2>
            <div className="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {group.images.map((image, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" data-aos="zoom-in">
                  <div className="event-card overflow-hidden border border-gray-200 rounded-lg transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
                    <img
                      src={`./src/images/YapEventsWorkshops/${image}.jpg`}
                      alt={image}
                      className="event-image w-full h-auto rounded-lg"
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

export default YapEvents;