import React from 'react';
import './Skills.css'; // Reuse existing styles

const Hobbies = () => {
  const hobbies = [
    {
      title: "Ironman Triathlon",
      description: "Completed multiple Ironman events, combining swimming, cycling, and marathon running. Brings discipline, focus, and executional endurance to fast-moving product and engineering teams.",
      icon: "🏊‍♂️"
    },
    {
      title: "Ultramarathon Running", 
      description: "Long-distance running events pushing physical and mental endurance limits. Training requires strategic planning and consistent execution.",
      icon: "🏃‍♂️"
    },
    {
      title: "Technology Innovation",
      description: "Exploring cutting-edge AI tools, staying current with emerging tech trends, and experimenting with new development frameworks.",
      icon: "🤖"
    },
    {
      title: "Fitness & Wellness",
      description: "Maintaining peak physical condition through disciplined training regimens and holistic wellness practices.",
      icon: "💪"
    }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1>Hobbies & Interests</h1>
        <p>Passion projects and personal pursuits that drive creativity and excellence</p>
      </div>
      
      <div className="skills-section">
        <div className="skills-grid">
          {hobbies.map((hobby, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <span style={{ fontSize: '2rem' }}>{hobby.icon}</span>
              </div>
              <div className="skill-content">
                <h3>{hobby.title}</h3>
                <p>{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;