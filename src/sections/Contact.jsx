import { Button } from '@/components/Button'
import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  const contactInfo = [
    { icon: Mail, label: "Email", value: "sokhyvann247@gmail.com", href: "mailto:sokhyvann247@gmail.com" },
    { icon: Phone, label: "Phone", value: "069784480", href: "tel:+85569784480" },
    { icon: MapPin, label: "Location", value: "st.217, Stung Meanchey", href: "#" },
    { icon: Send, label: "Telegram", value: "Contact Me on Telegram", href: "https://t.me/SOKHY_VAN" },
  ]

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus({ type: null, message: "" })
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      if (!serviceId || !templateId || !publicKey) throw new Error("Missing EmailJS configuration")
      await emailjs.send(serviceId, templateId, { name: formData.name, email: formData.email, message: formData.message }, publicKey)
      setSubmitStatus({ type: "success", message: t('contact.successMsg') })
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      setSubmitStatus({ type: "error", message: err.text || t('contact.errorMsg') })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className='py-32 relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
      </div>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>{t('contact.label')}</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            {t('contact.title1')}{" "}
            <span className='font-serif italic font-normal text-white'>{t('contact.title2')}</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>{t('contact.desc')}</p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <div className='glass p-8 rounded-3xl border border-primary animate-fade-in animation-delay-300'>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name' className='block text-sm font-medium mb-2'>{t('contact.name')}</label>
                <input id='name' type="text" required placeholder={t('contact.namePlaceholder')}
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className='w-full px-4 py-3 bg-surface rounded-xl border-border focus:border-primary focus:ring-primary focus:ring-1 outline-none transition-all' />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-medium mb-2'>{t('contact.email')}</label>
                <input id='email' type="email" required placeholder={t('contact.emailPlaceholder')}
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className='w-full px-4 py-3 bg-surface rounded-xl border-border focus:border-primary focus:ring-primary focus:ring-1 outline-none transition-all' />
              </div>
              <div>
                <label htmlFor='message' className='block text-sm font-medium mb-2'>{t('contact.message')}</label>
                <textarea id='message' rows={5} required placeholder={t('contact.messagePlaceholder')}
                  value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className='w-full px-4 py-3 bg-surface rounded-xl border-border focus:border-primary focus:ring-primary focus:ring-1 outline-none transition-all resize-none' />
              </div>
              <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                {isLoading ? t('contact.sending') : <>{t('contact.send')} <Send className='w-5 h-5' /></>}
              </Button>
              {submitStatus.type && (
                <div className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-red-500/10 text-red-500 border border-red-500/20"}`}>
                  {submitStatus.type === "success" ? <CheckCircle className='w-5 h-5 shrink-0' /> : <AlertCircle className='w-5 h-5 shrink-0' />}
                  <p className='text-sm'>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          <div className='space-y-6 animate-fade-in animation-delay-400'>
            <div className='glass rounded-3xl p-8'>
              <h3 className='text-xl font-semibold mb-6'>{t('contact.infoTitle')}</h3>
              <div className='space-y-4'>
                {contactInfo.map((item, i) => (
                  <a key={i} href={item.href} className='flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group'>
                    <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                      <item.icon className='w-5 h-5 text-primary' />
                    </div>
                    <div>
                      <div className='text-sm text-muted-foreground'>{item.label}</div>
                      <div className='font-medium'>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className='glass rounded-3xl p-8 border border-primary/30'>
              <div className='flex items-center gap-3 mb-4'>
                <span className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                <span className='font-medium'>{t('contact.available')}</span>
              </div>
              <p className='text-muted-foreground text-sm'>{t('contact.availableDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Contact }
