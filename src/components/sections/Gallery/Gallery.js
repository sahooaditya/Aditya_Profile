import React, { useEffect, useMemo, useState } from "react";
import { FiMaximize2, FiX } from "react-icons/fi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { galleryFilters, galleryImages } from "../../../data/portfolioData";
import "./Gallery.css";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [previewImage, setPreviewImage] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") return galleryImages;
    return galleryImages.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (!previewImage) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setPreviewImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [previewImage]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [filteredImages]);

  return (
    <section className="gallery-section motion-section section-frame" id="gallery">
      <SectionHeading
        eyebrow="Gallery"
        title="Visual gallery with clickable filters and image preview."
        text="Browse profile, technology, and branding images. Click any image to preview it in full screen."
      />

      <div className="gallery-filters" data-animate="bottom">
        {galleryFilters.map((filter) => (
          <button
            className={activeFilter === filter ? "active" : ""}
            type="button"
            key={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((item, index) => (
          <button
            className="gallery-card"
            type="button"
            key={`${item.title}-${item.category}`}
            onClick={() => setPreviewImage(item)}
            data-animate={index % 3 === 0 ? "left" : index % 3 === 1 ? "bottom" : "right"}
            data-delay={(index % 4) * 0.05}
          >
            <span className="gallery-image-wrap">
              <img src={item.image} alt={item.title} />
              <span className="gallery-preview-icon">
                <FiMaximize2 />
              </span>
            </span>
            <span className="gallery-info">
              <small>{item.category}</small>
              <strong>{item.title}</strong>
              <em>{item.description}</em>
            </span>
          </button>
        ))}
      </div>

      {previewImage ? (
        <div className="gallery-preview" role="dialog" aria-modal="true" aria-label={`${previewImage.title} preview`}>
          <button className="gallery-preview-backdrop" type="button" onClick={() => setPreviewImage(null)} aria-label="Close gallery preview" />
          <div className="gallery-preview-frame">
            <button className="gallery-preview-close" type="button" onClick={() => setPreviewImage(null)} aria-label="Close gallery preview">
              <FiX />
            </button>
            <img src={previewImage.image} alt={previewImage.title} />
            <div className="gallery-preview-caption">
              <small>{previewImage.category}</small>
              <h3>{previewImage.title}</h3>
              <p>{previewImage.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Gallery;
