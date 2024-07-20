import { useRef, useEffect, useState } from "react";

const AboutMe = () => {
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
      id="aboutme"
      className={`aboutme ${observerVisible ? "fadeScroll" : "obfade"}`}
      ref={myRef}
    >
      <p className="aboutHeader dark:text-white">About Me</p>

      <div className="mt-[40px] lg:mt-[50px]">
        <p className="aboutText dark:text-white"> Hello, I’m Karan!</p>
        <p className="aboutText dark:text-white">
          I’m a front-end developer based in Bangalore, specializing in building
          responsive and fast web applications from the ground up, transforming
          them into modern, user-friendly web experiences.
        </p>
        <p className="aboutText dark:text-white">
          For over a year, I&apos;ve been passionate about converting my
          creativity and knowledge into effective websites and web applications.
          I&apos;ve assisted various clients in establishing a strong online
          presence and continually strive to stay updated with the latest
          technologies and frameworks.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
