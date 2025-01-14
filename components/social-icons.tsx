import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'

interface SocialIconProps {
  platform: 'twitter' | 'linkedin' | 'instagram'
  url: string
}

const SocialIcon = ({ platform, url }: SocialIconProps) => {
  const iconClasses = "w-5 h-5 transition-colors duration-200"
  const icons = {
    twitter: <Twitter className={iconClasses} />,
    linkedin: <Linkedin className={iconClasses} />,
    //facebook: <Facebook className={iconClasses} />,
    instagram: <Instagram className={iconClasses} />,
  }

  return (
    <Link 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-400 hover:text-primary transition-colors duration-200 group"
    >
      <span className="block p-2 rounded-full bg-gray-100 group-hover:bg-primary/10 transition-colors duration-200">
        {icons[platform]}
      </span>
    </Link>
  )
}

export function SocialIcons() {
  return (
    <div className="flex space-x-3">
      <SocialIcon platform="twitter" url="https://twitter.com/" />
      <SocialIcon platform="linkedin" url="https://www.linkedin.com/" />
      {/* <SocialIcon platform="facebook" url="https://www.facebook.com/ventureboard" /> */}
      <SocialIcon platform="instagram" url="https://www.instagram.com/" />
    </div>
  )
}

