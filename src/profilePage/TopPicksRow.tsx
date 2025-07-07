import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaPassport, FaCode, FaBriefcase, FaCertificate, FaHeart, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Work Permit", imgSrc: "https://picsum.photos/seed/workpermit/250/200", icon: <FaPassport />, route: "/work-permit" },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/skills/250/200", icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/workexperience/250/200", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/certifications/250/200", icon: <FaCertificate />, route: "/certifications" },
    { title: "Hobbies", imgSrc: "https://picsum.photos/seed/hobbies/250/200", icon: <FaHeart />, route: "/hobbies" },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/projects/250/200", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/contact/250/200", icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: "https://picsum.photos/seed/coding/250/200", route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/development/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/badge/250/200", route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/work/250/200", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Hobbies", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/hobbies", icon: <FaHeart /> },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Hobbies", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/hobbies", icon: <FaHeart /> },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/call/250/200", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/planning/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/resume/250/200", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/achievements/250/200", route: "/certifications", icon: <FaCertificate /> },
  ],
  adventure: [
    { title: "Hobbies", imgSrc: "https://picsum.photos/seed/hobbies/250/200", route: "/hobbies", icon: <FaHeart /> },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/innovation/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/medal/250/200", route: "/certifications", icon: <FaCertificate /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;