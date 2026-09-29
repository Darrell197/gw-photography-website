"use client";

import { useEffect, useState } from "react";

type GalleryImage = { src: string; alt: string };

type Props = { images: GalleryImage[] };

export default function PortfolioGallery({ images }: Props) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => current === null ? 0 : (current + 1) % images.length);
      if (event.key === "ArrowLeft") setActive((current) => current === null ? images.length - 1 : (current - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, images.length]);

  return (
    <>
      <div className="masonry" aria-label="Photography portfolio">
        {images.map((image, index) => (
          <button
            className={`media gallery-tile ${index % 5 === 0 ? "tall" : index % 3 === 0 ? "wide" : "square"}`}
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Open image ${index + 1} of ${images.length}`}
          >
            <img src={image.src} alt={image.alt} loading={index < 4 ? "eager" : "lazy"} />
            <span className="gallery-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="gallery-open">View</span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Full-screen photograph" onClick={() => setActive(null)}>
          <button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="Close photograph">×</button>
          <button className="lightbox-arrow lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); setActive((active - 1 + images.length) % images.length); }} aria-label="Previous photograph">←</button>
          <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
            <img src={images[active].src} alt={images[active].alt} />
            <figcaption><span>{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span><span>{images[active].alt}</span></figcaption>
          </figure>
          <button className="lightbox-arrow lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); setActive((active + 1) % images.length); }} aria-label="Next photograph">→</button>
        </div>
      )}
    </>
  );
}
