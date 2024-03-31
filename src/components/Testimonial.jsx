import arrow_left from '../assets/slider/icon-prev.svg';
import arrow_right from '../assets/slider/icon-next.svg';
import portrait_tanya from '../assets/portrait/image-tanya.jpg';
import portrait_john from '../assets/portrait/image-john.jpg';
import { useState } from 'react';

export default function Testimonial() {  
  const testimonials = [ 
    {
      quote: `I’ve been interested in coding for a while but never taken the jump, until now. 
      I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
      excited about the future.`,
      name: "Tanya Sinclair",
      job: "UX Engineer",
      portraitSrc: portrait_tanya
    },
    {
      quote: `If you want to lay the best foundation possible I’d recommend taking this course. 
      The depth the instructors go into is incredible. I now feel so confident about 
      starting up as a professional developer.`,
      name: "John Tarkpor",
      job: "Junior Front-end Developer",
      portraitSrc: portrait_john
    }
   ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

    function prevSlide() {
      setCurrentIndex((prevIndex) => 
        prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1,
      );
      };
    
      function nextSlide() {
        setCurrentIndex((prevIndex) => 
          prevIndex + 1 === testimonials.length ? 0 : prevIndex +1,
        );
      };

    return (
        <div className="container">
          <div className="quote">
            “ {testimonials[currentIndex].quote} ”
            <div className="details">
            <span className="name">{testimonials[currentIndex].name}</span>
            <span className="job">{testimonials[currentIndex].job}</span>
          </div>
        </div>
        <div className="portrait-container">
      <img 
        className="portrait" 
        src={testimonials[currentIndex].portraitSrc} 
        alt={testimonials[currentIndex].name}/>
      <div className="slider-container">
      <button 
        className="slider-arrow-left"
        onClick={prevSlide}
      >
      <img src={arrow_left}/>
      </button>
      <button 
        className="slider-arrow-right"
        onClick={nextSlide}
      >
      <img src={arrow_right}/>
      </button>
      </div>
        </div>  
        </div>        
    );
}