"use client";

import { useRef, useState, useEffect } from "react";
import Project from "./Project";
import Modal from "./Modal";
import { skillset } from "../../../Data/Data";

const Skills = () => {
  const data = skillset;
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [observerVisible, setObserverVisible] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setObserverVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(myRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div
      id="skills"
      className={`aboutme ${observerVisible ? "fadeScroll" : "obfade"}`}
      ref={myRef}
    >
      <p className="aboutHeader dark:text-white">Skills</p>

      <main className="main lg:mt-[50px] hidden lg:block">
        <div className="body">
          {data.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.skill}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>

        <Modal modal={modal} projects={data} />
      </main>

      {/* mobile  */}
      <div className="tech-box mt-[48px] lg:mt-[20px] w-full skill-grid-box lg:hidden ">
        {data.map((item, index) => {
          return (
            <div className="svgs-box dark:bg-white" key={index}>
              <div className={`logo-div${index}`}> {item.src || "-"}</div>
              <p className="skill-text">{item.skill || "-"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
