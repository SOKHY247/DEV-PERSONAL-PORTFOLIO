import { Github, Linkedin, Twitter, Send, Facebook } from "lucide-react"


const socialLinks = [
    {icon : Github , href : "https://github.com/SOKHY247", label : "Github"},
    {icon : Linkedin , href : "https://www.linkedin.com/in/sokhy-vann-7b5659308/", label : "Linkedin"},
    {icon : Send , href : "https://t.me/SOKHY_VAN", label : "Send"},
    {icon : Facebook , href : "https://web.facebook.com/sokhy.vann", label : "Facebook"},
];

const footerLinks = [
    {href : "#about", label : "About"}
    ,{href : "#projects", label : "Projects"}
    ,{href : "#experience", label : "Experience"}
    ,{href : "#contact", label : "Contact"}
    
    
]

export const Footer = () =>{
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Logo & Copyright */}
                <div className="text-center md:text-left">
                    <a href="#"
                    className="text-xl font-bold tracking-tight">
                        SH <span className="text-primary">.</span>
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                     © {currentYear} Sokhy Van. All rights reserved.</p>
                </div>
                {/* Links */}
                <nav className="flex flex-wrap justify-center gap-6">
                    {footerLinks.map((link) =>(
                        <a 
                        key={link.href}
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    {/* SocialLinks */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) =>(
                            <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            className="p-2 rounded-full glass hover:bg-primary transition-all"
                            >
                                <social.icon className="w-5 h-5"/>
                            </a>
                        ))}

                    </div>
                </nav>
                </div>
            </div>
        </footer>
    )
}