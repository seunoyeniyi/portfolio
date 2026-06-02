const socials = [
  { href: 'https://github.com/seunoyeniyi', icon: 'bxl-github' },
  { href: 'https://facebook.com/seunoyeniyi123', icon: 'bxl-facebook-square' },
  { href: 'https://twitter.com/seun_skye', icon: 'bxl-twitter' },
  { href: 'https://www.linkedin.com/in/seun-oyeniyi-89a88b15b/', icon: 'bxl-linkedin' },
  { href: 'https://www.instagram.com/seun_oyeniyi/', icon: 'bxl-instagram' },
]

function Hero() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-8"
      style={{ backgroundImage: 'url(/assets/img/header-bg.svg)' }}
    >
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to opacity-0" />

      <div className="container relative z-30 pt-20 pb-12 sm:pt-40 sm:pb-48 lg:pt-40 lg:pb-48">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="rounded-full border-8 border-primary shadow-xl">
            <img
              src="/assets/img/peter2.jpg"
              className="h-48 w-48 rounded-full sm:h-56 sm:w-56 object-cover"
              alt="Seun Oyeniyi"
            />
          </div>

          <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
            <h1 className="text-center font-header font-black text-4xl text-[#CCF381] lg:text-left sm:text-5xl md:text-6xl">
              Full Stack<br />Engineer
            </h1>

            <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
              <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <p className="font-body text-lg uppercase text-white">Let's connect</p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-3xl text-yellow" />
                </div>
              </div>

              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                {socials.map(({ href, icon }) => (
                  <a key={icon} href={href} className="pl-4 first:pl-0">
                    <i className={`bx ${icon} text-2xl text-primary2 hover:text-white`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
