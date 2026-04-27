import { useTranslation } from 'react-i18next'
import { ArrowLeft, Clock, Tag, Calendar } from 'lucide-react'
import { Navbar } from '@/layout/Navbar'
import { Footer } from '@/sections/Footer'

function AIContenct({ onBack, onNavigate }) {
  const { t } = useTranslation()
  const items = t('blog.items', { returnObjects: true })
  const post = items[0]
  const others = items.slice(1)

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar onHome={onBack} />
      <main className='pt-32 pb-20'>
        <div className='container mx-auto px-6 max-w-3xl'>

          <button onClick={onBack} className='inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group'>
            <ArrowLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform' />
            Back to Home
          </button>

          <div className='mb-10'>
            <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-4 bg-primary/10 text-primary'>
              <Tag className='w-3 h-3' />{post.tag}
            </span>
            <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>{post.title}</h1>
            <div className='flex items-center gap-6 text-sm text-muted-foreground'>
              <div className='flex items-center gap-1.5'><Calendar className='w-4 h-4' />{post.date}</div>
              <div className='flex items-center gap-1.5'><Clock className='w-4 h-4' />{post.readTime} {t('blog.minRead')}</div>
            </div>
          </div>

          <div className='h-px bg-border mb-10' />

          {/* Hero Image */}
          <div className='rounded-2xl overflow-hidden mb-10 aspect-video'>
            <img
              src='https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80'
              alt='Artificial Intelligence'
              className='w-full h-full object-cover'
            />
          </div>

          <p className='text-lg text-muted-foreground leading-relaxed mb-10 glass p-6 rounded-2xl border-l-4 border-primary'>
            {post.desc}
          </p>

          <div className='space-y-10'>
            {post.content?.map((section, i) => (
              <div key={i} className='space-y-3'>
                <h2 className='text-2xl font-semibold flex items-center gap-3'>
                  <span className='w-8 h-8 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center font-bold shrink-0'>{i + 1}</span>
                  {section.heading}
                </h2>
                <p className='text-muted-foreground leading-relaxed pl-11'>{section.body}</p>
              </div>
            ))}
          </div>

          <div className='h-px bg-border mt-16 mb-10' />

          <div>
            <h3 className='text-xl font-semibold mb-6'>{t('blog.label')}</h3>
            <div className='grid sm:grid-cols-2 gap-4'>
              {others.map((other, i) => (
                <button key={i} onClick={() => onNavigate(other.slug)}
                  className='glass p-4 rounded-xl text-left hover:border-primary/50 border border-transparent transition-all duration-300 group'>
                  <p className='text-sm font-medium group-hover:text-primary transition-colors line-clamp-2'>{other.title}</p>
                  <div className='flex items-center gap-1 text-xs text-muted-foreground mt-2'>
                    <Clock className='w-3 h-3' />{other.readTime} {t('blog.minRead')}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}

export { AIContenct }
