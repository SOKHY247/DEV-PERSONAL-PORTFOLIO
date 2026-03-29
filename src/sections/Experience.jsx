function Experience() {

  const experinces = [
    {
    period: "2024 - Present",
    role: "Information Technology Student",
    company: "National University Of Management",
    desc: "Focusing on web development fundamentals and building modern web applications using React, Next.js, and TypeScript. Continuously improving problem-solving and frontend architecture skills.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
    current: true
  },
  {
    period: "2023 - 2024",
    role: "Frontend Developer (Personal Projects)",
    company: "Self-Driven Projects",
    desc: "Developed responsive and user-friendly web applications, including landing pages and dynamic interfaces. Gained hands-on experience with component-based architecture and state management.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Git"],
    current: false
  },
  {
    period: "2022 - 2023",
    role: "Web Development Learner",
    company: "Online Platforms",
    desc: "Started learning web development fundamentals including HTML, CSS, and JavaScript. Built small projects to understand core concepts and browser behavior.",
    technologies: ["HTML", "CSS", "JavaScript"],
    current: false
  },
  {
    period: "2026 - Present",
    role: "Web Development",
    company: "TCI Professional Center",
    desc: "I'm a student focus on Web Development fundamentals include HMTL , CSS , JavaScript, Tailwindcss and React.js (Frontend) and then​ Continue learn PHP , Mysql and Laravel framwork (Backend).",
    technologies: ["HTML", "CSS", "JavaScript"],
    current: false
  }
  ]
  return (
    <section 
    id='experience'
    className='py-32 relative overflow-hidden'>
      <div 
      className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 blur-3xl -translate-y-1/2'
      />
      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
          <div className='max-w-3xl mb-16'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Career Journey</span>
              <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>Experince that 
                <span className='font-serif italic font-normal text-white'>{" "}speaks volumes.</span>
              </h2>
              <p className='text-muted-foreground animate-fade-in animation-delay-200'>
                A timeline of my growth as a web development student—from a curious beginner learning the fundamentals to a developer building real-world projects and continuously improving my skills.
              </p>
          </div>
          {/* Timeline */}
          <div className='relative'>
            <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2] bg-gradient-to-bar from-primary/70 via-primary/30 to-transparent md:translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]'/>
              {/* Experience Items */}
              <div className='space-y-12'>
                 {experinces.map((exp, idx) =>(
                  <div 
                  key={idx}
                  className='relative grid md:grid-cols-2 gap-8 animate-fade-in'
                  style={{animationDelay : `${(idx + 1) * 150}ms`}}>
                    {/* Timeline Dot */}
                      <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10'>
                      {exp.current && (
                        <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75'/>
                      )}
                      </div>
                      {/* Content */}
                      <div className={`pl-8 md:pl-0 ${idx % 2 ===0 ? "md:text-right" : "md:col-start-2 md:pl-16"}`}>
                        <div className={`glass p-6 rounded-2xl border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                          <span className='text-sm text-primary font-medium'>{exp.period}</span>
                          <h3 className='text-xl font-semibold mt-2'>{exp.role}</h3>
                          <p className=' text-muted-foreground'>{exp.company}</p>
                          <p className='text-sm text-muted-foreground mt-4'>{exp.desc}</p>
                          <div 
                          className={`flex flex-wrap gap-2 mt-4 
                            ${idx %2 ===0 ? "md:justify-end" : ""}`}>
                              {exp.technologies.map((tech, techidx)=>(
                            <span 
                            key={techidx}
                            className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground'>{tech}</span>
                          ))}</div>
                        </div>
                      </div>
                  </div>
                 ))}

              </div>
          </div>
      </div>
      
    </section>
  )
}

export { Experience }
