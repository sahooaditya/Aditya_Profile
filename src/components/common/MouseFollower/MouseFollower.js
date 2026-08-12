import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./MouseFollower.css";

const MouseFollower = () => {
  const pointerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return undefined;
    }

    const pointer = pointerRef.current;
    const moveX = gsap.quickTo(pointer, "x", { duration: 0.14, ease: "power3.out" });
    const moveY = gsap.quickTo(pointer, "y", { duration: 0.14, ease: "power3.out" });

    const handleMouseMove = (event) => {
      moveX(event.clientX);
      moveY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <span className="mouse-point" ref={pointerRef} aria-hidden="true" />;
};

export default MouseFollower;
