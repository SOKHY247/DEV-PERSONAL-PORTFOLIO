import { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function Navbar({ onHome }) {
  const { t, i18n } = useTranslation()

  const navLinks = [
    { href: "#about", label: t('nav.about') },
    { href: "#experience", label: t('nav.experience') },
    { href: "#projects", label: t('nav.projects') },
     { href: "#contact", label: t('nav.contact') },
    { href: "#blog", label: t('nav.blog') },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'km' : 'en'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a href='#' onClick={onHome} className='text-xl font-bold tracking-tight hover:text-primary'>
          SH <span>.</span>
        </a>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={onHome}
                className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className='hidden md:flex items-center gap-2'>
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className='px-3 py-1.5 rounded-full glass text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all'
          >
            {i18n.language === 'en' ? 'ខ្មែរ' : 'English'}
          </button>
          <a href="https://t.me/SOKHY_VAN">
            <Button size="sm">{t('nav.contactBtn')}</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center gap-2'>
          <button
            onClick={toggleLang}
            className='px-3 py-1.5 rounded-full glass text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all'
          >
            {i18n.language === 'en' ? 'ខ្មែរ' : 'English'}
          </button>
          <button
            className='p-2 text-foreground cursor-pointer'
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden glass-strong animate-fade-in'>
          <div className='container mx-auto px-6 py-6 flex-col flex gap-4'>
            {navLinks.map((link, index) => (
              <a href={link.href} key={index}
                onClick={() => { setIsMobileMenuOpen(false); if(onHome) onHome() }}
                className='text-lg text-muted-foreground hover:text-foreground py-2'>
                {link.label}
              </a>
            ))}
            <Button onClick={() => setIsMobileMenuOpen(false)} size="sm">
              {t('nav.contactBtn')}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export { Navbar }
