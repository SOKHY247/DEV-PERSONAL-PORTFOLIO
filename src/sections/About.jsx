import { Lightbulb, Rocket, Users,Code2 } from 'lucide-react'

function About() {

  const highlights = [
    {
      icon : Code2,
      title: "Clean Code",
      desc: "Writing clean and readable code is one of my top priorities when developing software."
    },
    {
      icon : Rocket,
      title: "Performance",
      desc: "Optimizing for speed and delivering lightning-fast user experinces."
    },
    {
      icon : Users,
      title: "Collaboration",
      desc: "Working closely with teams to bring ideas to life."
    },
    {
      icon : Lightbulb,
      title: "Innovation",
      desc: "Staying ahead with the latest technology and best practices."
    },
  ]
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
             <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
            Building the future,
            <span className='font-serif italic font-normal text-white '> {""}One component at a time.</span>
          </h2>
          <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
            <p>
              I'm a passionate software engineering with over 2 years of experince crafting digital products that make a different.
              My journey started with a curisoity for how things work on the web, and it has evolved into a deep experince in modern frontend technology.
            </p>
            <p>
              I specialize in React Next.js and TypeScript, building everything from sleek landing pages to complex web applications.
              My approach combines technical expertise with a keen eye for design, ensuring that every project I work on is not only functional but also visually appealing and user-friendly.

            </p>
            <p>
              When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
            <p className='text-lg font-medium italic text-foreground'>
              " My mission is to create digital experince that are not just functional, but truly delightfull - products that users love to use and developers love to maitain."
            </p>
          </div>
          </div>

          {/* Right Column - Hilights */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {highlights.map((item, index) =>(
              <div key={index} 
              className='glass p-6 rounded-2xl animate-fade-in'
              style={{animationDelay : `${(index + 1) * 100}sm`}}>
                  <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                    <item.icon className=''/>
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground'>{item.desc}</p>
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { About }
