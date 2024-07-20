"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Skills from "@/components/skills/Skills";
import Footer from "@/components/Footer";
import { projects } from "../../Data/Data";
import { testimonials } from "../../Data/Data";

export default function Home() {
  const [pageTransition, setPageTransition] = useState(true);

  useEffect(() => {
    console.log(projects, testimonials);
    setTimeout(() => {
      setPageTransition(false);
    }, 8000);
  }, []);
  return (
    <div>
      {pageTransition && (
        <div className="overlay">
          <div class="loader">
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
          </div>
        </div>
      )}
      <div>
        <Navbar />
        <Hero />
        <Works title="Works" projectData={projects} />
        <Works title="Testimonials" projectData={testimonials} />
        <Skills />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
