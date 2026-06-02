const socials = [
  { href: 'https://github.com/seunoyeniyi', icon: 'bxl-github' },
  { href: 'https://facebook.com/seunoyeniyi123', icon: 'bxl-facebook-square' },
  { href: 'https://twitter.com/skye_create', icon: 'bxl-twitter' },
  { href: 'https://www.linkedin.com/in/seun-oyeniyi-89a88b15b/', icon: 'bxl-linkedin' },
  { href: 'https://www.instagram.com/seun_oyeniyi/', icon: 'bxl-instagram' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright {year}. All right reserved, Seun Oyeniyi.
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          {socials.map(({ href, icon }) => (
            <a key={icon} href={href} className="pl-4 first:pl-0">
              <i className={`bx ${icon} text-2xl text-white hover:text-yellow`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
