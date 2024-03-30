import Testimonial from './components/Testimonial';
import portrait_tanya from './assets/portrait/image-tanya.jpg';
import portrait_john from './assets/portrait/image-john.jpg';

export default function App() {  

  const testTanya = {
    quote: `I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future.`,
    name: "Tanya Sinclair",
    job: "UX Engineer",
    portraitSrc: portrait_tanya
  }

  const testJohn = {
    quote: `If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer.`,
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    portraitSrc: portrait_john
  }

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

  return (
    <>
      <main>      
        <Testimonial props={testimonials}
        />                                 
      </main>
    </>
  )
}
/*
<Testimonial 
          data={testimonials}
/>   
*/