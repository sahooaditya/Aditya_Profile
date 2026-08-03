import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./MouseFollower.css";

const MouseFollower = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const trailRef = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return undefined;
    }

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    const trails = trailRef.current;
    const moveCursor = gsap.quickTo(cursor, "x", { duration: 0.16, ease: "power3.out" });
    const moveCursorY = gsap.quickTo(cursor, "y", { duration: 0.16, ease: "power3.out" });
    const moveRing = gsap.quickTo(ring, "x", { duration: 0.42, ease: "power3.out" });
    const moveRingY = gsap.quickTo(ring, "y", { duration: 0.42, ease: "power3.out" });
    const moveGlow = gsap.quickTo(glow, "x", { duration: 0.75, ease: "power3.out" });
    const moveGlowY = gsap.quickTo(glow, "y", { duration: 0.75, ease: "power3.out" });
    const trailMoves = trails.map((trail, index) => ({
      x: gsap.quickTo(trail, "x", { duration: 0.2 + index * 0.045, ease: "power3.out" }),
      y: gsap.quickTo(trail, "y", { duration: 0.2 + index * 0.045, ease: "power3.out" }),
    }));

    const handleMouseMove = (event) => {
      moveCursor(event.clientX);
      moveCursorY(event.clientY);
      moveRing(event.clientX);
      moveRingY(event.clientY);
      moveGlow(event.clientX);
      moveGlowY(event.clientY);
      trailMoves.forEach((move, index) => {
        const drift = (index + 1) * 2;
        move.x(event.clientX - drift);
        move.y(event.clientY + drift);
      });
    };

    const handleMouseDown = () => {
      document.body.classList.add("cursor-clicked");
    };

    const handleMouseUp = () => {
      document.body.classList.remove("cursor-clicked");
    };

    const handleEnterInteractive = () => {
      document.body.classList.add("cursor-hovering");
    };

    const handleLeaveInteractive = () => {
      document.body.classList.remove("cursor-hovering");
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, .about-card, .skill-card, .explore-card, .timeline-card, .project-card, .contact-card",
    );

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleEnterInteractive);
      element.addEventListener("mouseleave", handleLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleEnterInteractive);
        element.removeEventListener("mouseleave", handleLeaveInteractive);
      });
      document.body.classList.remove("cursor-hovering", "cursor-clicked");
    };
  }, []);

  return (
    <>
      <span className="cursor-glow" ref={glowRef} aria-hidden="true" />
      {Array.from({ length: 7 }).map((_, index) => (
        <span
          className="cursor-trail"
          key={index}
          ref={(element) => {
            trailRef.current[index] = element;
          }}
          aria-hidden="true"
        />
      ))}
      <span className="cursor-dot" ref={cursorRef} aria-hidden="true" />
      <span className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
};

export default MouseFollower;
