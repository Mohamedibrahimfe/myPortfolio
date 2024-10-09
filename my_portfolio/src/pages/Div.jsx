import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
// import the font

const Div = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("#intro-slider", {
        opacity: 0,
        duration: 0.5,
        xPercent: -100,
        delay: 0.5,
      })
        .from(["#title1", "#title2"], {
          opacity: 0,
          duration: 1,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title1", "#title2"], {
          opacity: 0,
          y: "-=30",
          stagger: 0.5,
        })
        .to("#intro-slider", {
          opacity: 0,
          duration: 0.5,
          xPercent: 100,
          delay: 0.5,
          onComplete: () => {
            document.getElementById("intro-slider").style.display = "none";
          },
        });
    }, comp);
    return () => ctx.revert();
  });
  return (
    <div ref={comp}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
          color: "white",
          position: "absolute",
          width: "100%",
          background: "url(/giphy.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: "99",
          top: "0",
          left: "0",
          gap: "40px",
          height: "103%",
        }}
        id="intro-slider"
      >
        <h1
          style={{
            fontSize: "7rem",
            fontFamily: "Sixtyfour Convergence sans-serif",
          }}
          id="title1"
        >
          {" "}
          Welcome
        </h1>
        <h1
          style={{
            fontSize: "7rem",
            fontFamily: "Sixtyfour Convergence sans-serif",
          }}
          id="title2"
        >
          {" "}
          To My Portfolio
        </h1>
      </div>
    </div>
  );
};

export default Div;
