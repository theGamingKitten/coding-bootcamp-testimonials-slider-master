import arrow_left from './assets/slider/icon-prev.svg';
import arrow_right from './assets/slider/icon-next.svg';
import portrait_tanya from './assets/portrait/image-tanya.jpg';
import portrait_john from './assets/portrait/image-john.jpg';

export default function App() {  
  function prevSlide() {
    console.log("previous slide");
  };

  function nextSlide() {
    console.log("next slide");
  };

  return (
    <>
      <main>      
        <div className="testimonial-container">
            <div className="testimonial-text">
              <p className="testimonial-quote">
                “ I’ve been interested in coding for a while but never taken the jump, until now. 
                I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
                excited about the future. ”
              </p>
              <p>
              <span className="person-name">Tanya Sinclair</span>
              <span className="person-job">UX Engineer</span>
              </p>
            </div>

            <div className="testimonial-avatar">
              <img
                src={portrait_tanya}
                alt="Portrait of Tanya Sinclair"
              />
            </div>
          </div> 

          <div className="testimonial-container hide">
            <div className="testimonial-text">
              <p className="testimonial-quote">
              “ If you want to lay the best foundation possible I’d recommend taking this course. 
              The depth the instructors go into is incredible. I now feel so confident about 
              starting up as a professional developer. ”
              </p>
              <p>
              <span className="person-name">John Tarkpor</span>
              <span className="person-job">Junior Front-end Developer</span>
              </p>
            </div>

            <div className="testimonial-avatar">
              <img
                src={portrait_john}
                alt="Portrait of John Tarkpor"
              />
            </div>        
          </div>  

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
      </main>
    </>
  )
}