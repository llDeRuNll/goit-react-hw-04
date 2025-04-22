import { useEffect, useRef } from "react";
import ImageGalleryCard from "../ImageGalleryCard/ImageGalleryCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      window.scrollBy({
        top: 140 * 2,
        behavior: "smooth",
      });
    }
  }, [images]);

  return (
    <ul className={s.imageGallery} ref={galleryRef}>
      {images.map((image) => (
        <ImageGalleryCard
          key={image.id}
          imageData={image}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
