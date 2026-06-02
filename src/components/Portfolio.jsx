const projects = [
  { href: 'https://sabiflow.com', img: '/assets/img/portfolio-sabiflow.png', alt: 'Sabiflow' },
  { href: 'https://cynegiehr.com', img: '/assets/img/portfolio-cynegiehr.png', alt: 'CynegieHR' },
  { href: 'https://areaconnectgpt.com', img: '/assets/img/portfolio-areagpt.png', alt: 'AreaConnectGPT' },
  {
    href: 'https://play.google.com/store/apps/details?id=com.area.hire',
    img: '/assets/img/portfolio-areahire.png',
    alt: 'AreaHire',
  },
  { href: 'https://savemartonline.com/', img: '/assets/img/portfolio-savemart.png', alt: 'SaveMart' },
  { href: 'https://greybutterfly.com', img: '/assets/img/portfolio-greybutterfly.png', alt: 'Grey Butterfly' },
]

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="px-5 sm:px-14 py-16 md:py-20"
      style={{ backgroundImage: 'url(/assets/img/skye-bg2.svg)' }}
    >
      <h2 className="text-center font-header text-4xl font-black uppercase text-primary sm:text-5xl lg:text-6xl">
        Check out my Portfolio
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I have done with the past
      </h3>

      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        {projects.map(({ href, img, alt }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src={img}
              className="w-full shadow border-2 border-gray-500"
              alt={alt}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
