import { useTranslation } from 'react-i18next'
import { ArrowUpRight, Clock, Tag } from 'lucide-react'

const colors = [
  'bg-primary/10 text-primary',
  'bg-highlight/10 text-highlight',
  'bg-blue-500/10 text-blue-400',
  'bg-purple-500/10 text-purple-400',
]

const images = [
  'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
  'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&q=80',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
]

function Blog({ onReadMore }) {
  const { t } = useTranslation()
  const items = t('blog.items', { returnObjects: true })

  return (
    <section id='blog' className='py-32 relative overflow-hidden'>
      <div className='absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            {t('blog.label')}
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            {t('blog.title1')}{' '}
            <span className='font-serif italic font-normal text-white'>{t('blog.title2')}</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            {t('blog.desc')}
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          {items.map((item, index) => (
            <div
              key={index}
              className='group glass rounded-2xl overflow-hidden hover:border-primary/50 border border-transparent transition-all duration-300 animate-fade-in'
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className='relative overflow-hidden aspect-video'>
                <img
                  src={images[index]}
                  alt={item.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-card/80 to-transparent' />
                <span className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${colors[index % colors.length]}`}>
                  <Tag className='w-3 h-3' />{item.tag}
                </span>
              </div>

              {/* Content */}
              <div className='p-6'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                  <Clock className='w-3 h-3' />
                  {item.readTime} {t('blog.minRead')}
                </div>
              </div>

              <h3 className='text-xl font-semibold mb-3 group-hover:text-primary transition-colors leading-snug'>
                {item.title}
              </h3>

              <p className='text-sm text-muted-foreground leading-relaxed mb-6'>
                {item.desc}
              </p>

              <div className='flex items-center justify-between'>
                <span className='text-xs text-muted-foreground'>{item.date}</span>
                <button
                  onClick={() => onReadMore(item.slug)}
                  className='inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all duration-300 font-medium'>
                  {t('blog.readMore')}
                  <ArrowUpRight className='w-4 h-4' />
                </button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Blog }
