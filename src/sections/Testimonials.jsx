import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import React, { useState } from 'react'

function Testimonials() {

  const testimonials =
    [
      {
        quote : "Pedro is one of the most talented engineeris I've worked with. His attend to detail and ability to translate complex requirenments into elegant solution is remarkable. ",
        author : "Sarah Chen",
        role : "CTO, Tech Innovators Inc.",
        avatar :"https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740&q=80"
      },
      {
        quote : "Pedro is one of the most talented engineeris I've worked with. His attend ",
        author : "Sarah Chen",
        role : "CTO, Tech Innovators Inc.",
        avatar :"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80"
      },
      {
        quote : "Pedro is one of the most talented engineeris I've worked with. His attend ",
        author : "Sarah Chen",
        role : "CTO, Tech Innovators Inc.",
        avatar :"https://img.freepik.com/free-photo/bearded-young-man-wearing-white-t-shirt_273609-5993.jpg?semt=ais_hybrid&w=740&q=80"
      },
      {
        quote : "Pedro is one of the most talented engineeris I've worked with. His attend ",
        author : "Sarah Chen",
        role : "CTO, Tech Innovators Inc.",
        avatar :"https://img.freepik.com/free-photo/young-bearded-man-with-denim-shirt_273609-7230.jpg?semt=ais_hybrid&w=740&q=80"
      },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const next = () =>{
      setActiveIndex((prev) => (prev + 1 ) % testimonials.length);
    };

    const previous = () =>{
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
  return (
    <section 
    id='testimonials'
    className='py-32 relative overflow-hidden'>
      <div 
      className='absolute top-1/2 left-1/2 w-[800] h-[800] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2' />
      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
              What People Say
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Kind words from{" "}
            <span className='font-serif italic font-normal text-white'>
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className='max-w-4xl mx-auto'>
          <div className='relative'>

            {/* Main Testimonial */}

            <div className='glass p-8 rounded-3xl md:12 glow-border animate-fade-in animation-delay-200'>
              <div className='absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center'>
                <Quote className='w-6 h-6 text-primary-foreground'/>
              </div>

              <blockquote
              className='text-xl md:text-2xl font-medium leading-relaxed pt-4 mb-8'>
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className='flex items-center gap-4'>
                <img 
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].author}
                className='w-14 h-14 rounded-full ring-2 ring-primary/20 '
                />
                  <div >
                    <div className='font-semibold'>{testimonials[activeIndex].author}</div>
                    <div className='text-sm text-muted-foreground'>{testimonials[activeIndex].role}</div>
                  </div>
               </div>
            </div>
            {/* Testimonials Navigation */}
          <div 
          className='flex items-center justify-center gap-4 mt-8'>
            <button className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all '
            onClick={previous}>
              <ChevronLeft/>
            </button>
            <div className='flex gap-2'>
              {testimonials.map((_, idx)=>(
                <button 
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}/>
            ))}
            </div>
            <button 
            onClick={next} 
            className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all '>
              <ChevronRight/>
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Testimonials }
