import { Lightbulb, Rocket, Users, Code2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()

  const highlights = [
    { icon: Code2, title: t('about.highlights.cleanCode.title'), desc: t('about.highlights.cleanCode.desc') },
    { icon: Rocket, title: t('about.highlights.performance.title'), desc: t('about.highlights.performance.desc') },
    { icon: Users, title: t('about.highlights.collaboration.title'), desc: t('about.highlights.collaboration.desc') },
    { icon: Lightbulb, title: t('about.highlights.innovation.title'), desc: t('about.highlights.innovation.desc') },
  ]

  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>{t('about.label')}</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
              {t('about.title1')}
              <span className='font-serif italic font-normal text-white'> {t('about.title2')}</span>
            </h2>
            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
            <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
              <p className='text-lg font-medium italic text-foreground'>"{t('about.quote')}"</p>
            </div>
          </div>

          {/* Right Column */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {highlights.map((item, index) => (
              <div key={index} className='glass p-6 rounded-2xl animate-fade-in'
                style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                  <item.icon />
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
