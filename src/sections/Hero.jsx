import { Button } from "@/components/Button"
import { ArrowRight, Github, Linkedin, Twitter, Facebook, ChevronDown, Download, Link } from 'lucide-react'
import { AnimateBorderButton } from '@/components/AnimateBorderButton'
const dots = [...Array(30)].map(() => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: `${15 + Math.random() * 20}s`,
  delay: `${Math.random() * 5}s`,
}))


const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "PHP",
  "Laravel",
  "Git Control",
  "C#",
  "Node.js",
  "Tailwind CSS",
  "JavaScript",
  "HTML",
  "CSS",
  "Java"
]
function Hero() {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* Bg */}
      <div className='absolute inset-0'>
        <img 
        src='/hero-BG.jpg' 
        alt='Hero image' 
        className='w-full h-full object-cover opacity-100' 
        />
        <div className='absolute inset-0 bg-gradient-to-bar from-transparent via-background to-background' />
      </div>

      {/* Green Dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {dots.map((dot, i) => (
          <div
            key={i}
            className='absolute w-1.5 h-1.5 rounded-full opacity-60'
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className='relative z-10 container mx-auto px-6 pb-20 pt-32'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column Text Content */}
          <div className='space-y-8'>
            <div className="animate-fade-in">
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse'/>Student Web Development 
                </span>
            </div>
            {/* Headline */}
            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                Crafting <span className='text-primary glow-text'>digital</span>
                <br/>
                web experiences with
                <br/>
                <span className='font-serif italic font-normal text-white'>
                  precision and performance.
                </span>
              </h1>
              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                I build exceptional digital experiences that are fast, accessible, and visually appealing. I’m committed to improving my coding skills every day, with a clear goal of becoming a Software Engineer in the future.
              </p>
            </div>
            {/* CTA  */}
            <div className='flex flex-wrap gap-4 animated-fade-in animation-delay-300 items-center'> 
              <a href="https://t.me/SOKHY_VAN">
              <Button size="lg">
                Contact Me 
                <ArrowRight className='w-5 h-5'/>
              </Button>
              </a>
              <AnimateBorderButton >
                  <Download className='w-5 h-5'/>
                  Download CV
              </AnimateBorderButton>
            </div>
            {/* Social Mediel Links */}
            <div className='flex items-center gap-4 animated-fade-in animation-delay-400'>
              <span className='text-sm text-muted-foreground font-bold'> 
                Follow me on : 
                </span>
                {[
                  {icon : Github , href : "https://github.com/SOKHY247"},
                  {icon : Linkedin , href : "#"},
                  {icon : Twitter , href : "#"},
                  {icon : Facebook, href : "#"},
                ].map((social, index) => (
                  <a key={index} href={social.href}
                  className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'>
                    {< social.icon className='w-5 h-5'/>}
                    </a>
                ))}
             
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className='relatice animated-fade-in animation-delay-300'>
            {/* Profile Image */}
            <div className='relative max-w-md mx-auto'>
              <div
              className='absolute inset-0 rounded-3xl bg-gradient-to-bar 
              from-primary/30 via-transparent
              to-primary/10 blur-2xl animate-pulse'
              />
             
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img src='profile.jpg' 
                alt='Sokhey Van '
                className='w-full aspect-4/5 object-cover rounded-2xl' 
                />

                {/* Floating Badge */}
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                    <span className='text-sm font-medium'>
                      Available for work
                      </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-2xl font-bold text-primary'>2+</div>
                  <div className='text-xs text-shadow-muted-foreground'>Labeler Project data entry</div>
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* Skills Section */}
         <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I learned and work with</p>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
             {[...skills, ...skills].map((skill ,index) =>(
              <div key={index}
              className='flex shrink-0 px-8 py-4' >
                <span 
                className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>
                  {skill}
                  </span>
              </div>
             ))}
            </div>
          </div>
         </div>
      </div>
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800'>
        <a 
        href='#about'
        className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300'>
          <span className='text-xs uppercase tracking-wider'>Scroll</span>
          <ChevronDown className='w-5 h-5 animate-bounce' />

        </a>
      </div>
    </section>
  )
}

export { Hero }
