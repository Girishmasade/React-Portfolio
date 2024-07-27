import React, { useState } from "react";
import "../pages/pages-Css/Skill.css";
import { SKILLS } from "../utils/data";
import SkillCard from "./SkillCard";
import Skillinfocard from "./Skillinfocard";

const Skill = () => {
  const [selectedskill, setselectedskill] = useState(SKILLS[0]);

  const handleselectedskill = (data) => {
    setselectedskill(data);
  };

  return (
    <section className="Skill-cont">
      <h2>Skill</h2>
      <div className="skill-container">
        <h5>Technical Skills</h5>
      </div>

      <div className="Skill-content">
        <div className="skill">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedskill.title === item.title}
              onClick={() => {
                handleselectedskill(item);
              }}
            />
          ))}
        </div>

        <div className="skil-info">
          <Skillinfocard
            heading={selectedskill.title}
            skills={selectedskill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;
