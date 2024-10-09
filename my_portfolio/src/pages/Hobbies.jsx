import data from "../data/about.json";
import "../style/Hobbies.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const Hobbies = () => {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      {
        opacity: 0,
        y: 100,
        rotate: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        rotate: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".hobbies",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

   
  })
  return (
    <section id="hobbies">
      <h1 className="title hobbys-title">Hobbies</h1>
      <div className="hobbies">
        {data.hobbies.map((hobby) => (
          <div className="card">
            <img src={hobby.image} className="hobby-image" alt={hobby.title} />
            <p className="description">{hobby.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
