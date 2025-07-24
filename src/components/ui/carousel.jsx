// src/components/ui/carousel.jsx
import React, { useState } from "react";
import { Card, CardContent } from "./card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./carousel.scss";

export function CardCarousel({ items = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 20,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider carousel-wrapper">
        {items.map((item, index) => (
          <div className="keen-slider__slide" key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Card>
                <CardContent>
                  <img src={item.img} alt={item.title} />
                  <h4>{item.title}</h4>
                </CardContent>
              </Card>
            </a>
          </div>
        ))}
      </div>

      <div className="dots">
        {items.map((_, idx) => (
          <div
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`dot ${currentSlide === idx ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </>
  );
}
