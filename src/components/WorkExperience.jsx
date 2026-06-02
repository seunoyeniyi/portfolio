const experiences = [
  {
    logo: '/assets/img/logo-cynegiehr.png',
    alt: 'CynegieHR',
    period: 'February 2025 - PRESENT',
    title: 'Lead Engineer',
    description:
      'I lead the development team in building and maintaining multiple software products across diverse domains, including HR solutions, Fintech applications, and eCommerce platforms.',
  },
  {
    logo: '/assets/img/logo-areahire.png',
    alt: 'AreaHire',
    period: 'August 2022 - 2024',
    title: 'Full Stack Developer',
    description:
      'Developed full-stack web and mobile applications that allow their customers to buy their product (vehicles) on installment. REST API, Web and Mobile Applications.',
  },
  {
    logo: '/assets/img/logo-greybutterfly.png',
    alt: 'Grey Butterfly',
    period: 'February 2021 - 2022',
    title: 'Full Stack Developer',
    description:
      'Developed extension eCommerce that allow selection of customized designed job variation, editing, design submission, order modification and to Mobile App.',
  },
]

const logoFilter = 'invert(58%) sepia(2%) saturate(12%) hue-rotate(12deg) brightness(104%) contrast(95%)'

function WorkExperience() {
  return (
    <div
      id="work"
      className="container py-16 md:py-20 bg-cover"
      style={{ backgroundImage: 'url(/assets/img/skye-bg4.svg)' }}
    >
      <h2 className="text-center font-header text-4xl font-black uppercase text-primary sm:text-5xl lg:text-6xl">
        My work experience
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Key projects and positions throughout my career
      </h3>

      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block" />

        {experiences.map(({ logo, alt, period, title, description }) => (
          <div key={title + period} className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img
                    src={logo}
                    className="h-14 w-auto"
                    alt={alt}
                    style={{ filter: logoFilter }}
                  />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70" />
                </div>
              </div>
            </div>

            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block" />
                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block" />
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">{period}</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      {title}
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">{description}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
