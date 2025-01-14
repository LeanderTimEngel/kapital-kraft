import Image from 'next/image'

interface LogoProps {
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <Image
      src="/logo.svg"
      alt="KapitalKraft Logo"
      width={32}
      height={32}
      className={className}
      priority
    />
  )
}

