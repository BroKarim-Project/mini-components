import './style.css';
import React from 'react';

export default function Carousel() {
  return (
    <>
      <section className="slider-wrapper">
        <ul className="slides-container relative" id="slides-container">
          <li className="slide bg-black"></li>
          <li className="slide bg-blue-500 "></li>
          <li className="slide bg-yellow-300 "></li>
          <li className="slide bg-pink-500 "></li>
        </ul>
      </section>
    </>
  );
}
