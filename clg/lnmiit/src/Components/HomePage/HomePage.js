import React from "react";
import Neutrino from "./Assets/neutrinowhlogo-1.png";
import SafeSecurity from "./Assets/SafeSecurity.jpeg";
import WiJungle from "./Assets/WiJungle-Logo-White.png";
import StartUpCard from "./StartUpCard";
import "./HomePage.css";

const StartUpsData = [
  {
    img: Neutrino,
    title: "Neutrino Group",
    Desc: "Neutrino provides various services in the space of the aviation sector across the MENA and South East Asia focused on enhancing the customer experience.",
    url: "	https://neutrino-group.com/",
  },
  {
    img: SafeSecurity,
    title: "Safe Security",
    Desc: "Safe Security Launches First Cybersecurity MGA to Underwrite Cyber Insurance Based on Continuous “Inside-Out” Cyber Risk Telemetry.",
    url: "https://www.safe.security/",
  },
  {
    img: WiJungle,
    title: "Wijungle",
    Desc: "WiJungle Receives ICSA Labs. Certification, Becomes First Make In India Cyber Security Product to have both BIS & ICSA.",
    url: "https://www.wijungle.com/",
  },
];

const HomePage = () => {
  return (
    <div>
      <div className="StartUpLNMIIT">
        <div className="StartUpHeadingContent">
          <p className="StartupHeading">Startups @ LNMIIT</p>
          <hr></hr>
          <p className="StartupContent">
            The LNMIIT Jaipur has developed a strong footprint in
            entrepreneurship and yielded several companies serving the nation in
            terms of job creation and revenue generation.
          </p>
        </div>
        <div className="StartUpCardsContent">
          <StartUpCard data={StartUpsData[0]} />
          <StartUpCard data={StartUpsData[1]} />
          <StartUpCard data={StartUpsData[2]} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
