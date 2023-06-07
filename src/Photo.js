import React from "react";
import "./Photo.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Photo = ({ photo }) => {
  return (
    <div className="photo">
      <LazyLoadImage
        effect="blur"
        className="photo-image"
        src={photo?.urls?.raw}
        alt={photo?.alt_description}
        width="300px"
        height="250px"
      />
      <p className="photo-desc">
        <span className="photo-tag">Description : </span>
        {photo?.alt_description}
      </p>
      <p className="photo-author">
        <span className="photo-tag">Author : </span>
        {photo?.user?.name}
      </p>
      <a href={photo?.links?.html} target="_blank" rel="noopener">
        See Original
      </a>
    </div>
  );
};

export default Photo;
