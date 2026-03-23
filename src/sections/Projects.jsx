
import { ArrowUpRight, Github } from 'lucide-react'
import React from 'react'
import { AnimateBorderButton } from '@/components/AnimateBorderButton'
function Projects() {

  const projects =[
    {
      title : "Hotel Management System",
      desc : "Bulid about hotel management system by self",
      image : "/projects/ProjectManagement.jpg",
      tags  : ["React","NodeJs","MongoDB"],
      link : "#",
      github : "#",
    },
     {
      title : "Book store",
      desc : "Sale book online platform E-commerce",
      image : "/projects/ProjectManagement.jpg",
      tags  : ["React","NodeJs","MongoDB"],
      link : "#",
      github : "#",
    },
    {
      title : "University Management",
      desc : "Web site University build popurse that allowe student learn from home , course and many major byself. ",
      image : "/projects/ProjectManagement.jpg",
      tags  : ["React","NodeJs","MongoDB"],
      link : "#",
      github : "#",
    },
     {
      title : "E-commerce sale ",
      desc : "I'm a passionate software engineering with over 2 years of experince crafting digital products that make a different",
      image : "/projects/ProjectManagement.jpg",
      tags  : ["React","NodeJs","MongoDB"],
      link : "#",
      github : "#",
    },
     {
      title : "AI web Technology",
      desc : "AI is technology is importent in the world.",
      image : "/projects/ProjectManagement.jpg",
      tags  : ["React","NodeJs","MongoDB"],
      link : "#",
      github : "#",
    },
     {
      title : "University Management",
      desc : "Web site University build popurse that allowe student learn from home , course and many major byself. ",
      image : "/projects/ProjectManagement.jpg",
      tags  : ["React","NodeJs","MongoDB"],
      link : "#",
      github : "#",
    },
    {
      title : "Khmer Post",
      desc : "This web site build for post many event that has in currently and provide imformation to the people aroud the countries and the world.",
      image : "/projects/ProjectManagement.jpg",
      tags  : ["React","NodeJs","MongoDB"],
      link : "#",
      github : "#",
    },
    {
      title : "Hotel Management System",
      desc : "Bulid about hotel management system by self",
      image : "/projects/ProjectManagement.jpg",
      tags  : ["React","NodeJs","MongoDB"],
      link : "#",
      github : "#",
    },
  ]
  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      {/* Bg glows */}
      <div className='absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'></div>
      <div className='container mx-auto px-6 relative z-10'>
           {/* Section Header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'> Feature Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Project that
          <span className='font-serif italic font-normal text-white'>{" "}make an impact.
          </span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            A selection of my recent work, from complex web application to innovative that solve real-world problems.
          </p>
        </div>
        {/* Projects Grid */}
        <div className='grid md:grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'> 
          {projects.map((project, index) =>(
            <div 
            key={index}
            className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
            style={{animationDelay : `${(index +1 ) * 100}ms`}}>
              {/* Image */}
              <div className='relative overflow-hidden aspect-video '>
                  <img 
                  src ={project.image} 
                  alt={project.title} 
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
                  />
                  <div 
                  className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent optional-60'
                  />
                  {/* Overlay links */}
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <a 
                    href={project.link} 
                    className='p-3 rounded-full glass hover:bg-primary/60 hover:text-primary-foreground transition-all'>
                      <ArrowUpRight className='w-5 h-5'/>
                    </a >
                    <a 
                    href={project.link} 
                    className='p-3 rounded-full glass hover:bg-primary/60 hover:text-primary-foreground transition-all'>
                      <Github className='w-5 h-5'/>
                    </a>
                  </div>
              </div>
              {/* Content */}
              <div className='p-6 space-y-4 '>
                <div className='flex items-center justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>
                    {project.title}
                    </h3>
                  <ArrowUpRight 
                  className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all'/>
                </div>
                <p className='text-muted-foreground text-sm'>
                  {project.desc}
                  </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag,tagIndex) =>(
                    <span 
                    key={tagIndex}
                    className='px-4 py1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All CTA */}
        <div className='text-center mt-12 animate-fade-in animation-delay-500'>
            <AnimateBorderButton >
              View All Projects 
              <ArrowUpRight  className='w-5 h-5'/>
            </AnimateBorderButton>
        </div>
      </div>

    </section>
  )
}

export { Projects }
