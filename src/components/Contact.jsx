const contactItems = [
  {
    icon: 'bx-phone',
    label: 'Phone/WhatsApp',
    value: '(+234) 816 7545 487',
    href: 'tel:+2348167545487',
  },
  {
    icon: 'bx-envelope',
    label: 'My Email',
    value: 'iamseunoyeniyi@gmail.com',
    href: 'mailto:iamseunoyeniyi@gmail.com',
  },
  {
    icon: 'bx-map',
    label: 'My Address',
    value: 'Opebi Lagos, Nigeria',
    href: null,
  },
]

function Contact() {
  return (
    <div
      id="contact"
      className="px-5 sm:px-14 py-16 md:py-20 mt-2"
      style={{ backgroundImage: 'url(/assets/img/skye-bg6.svg)' }}
    >
      <h2 className="text-center font-header text-4xl font-black uppercase text-primary2 sm:text-5xl lg:text-6xl">
        GET IN TOUCH
      </h2>

      <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
        <p className="font-body text-white">
          I'm open to collaborating on challenging projects that require scalable, high-quality
          engineering solutions. Whether you're building a new product, scaling an existing platform,
          or need expertise in full stack development, I bring technical depth and a proven track
          record of delivering production-grade systems.
        </p>
        <p className="mt-4 font-body text-white">
          Let's discuss how we can work together to build something exceptional. Reach out through any
          of the platforms below.
        </p>
      </div>

      <div className="flex flex-col pt-5 lg:flex-row">
        {contactItems.map(({ icon, label, value, href }, i) => (
          <div
            key={label}
            className={`w-full border-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 ${
              i > 0 ? 'border-t-0 lg:border-l-0 lg:border-t-2' : ''
            }`}
          >
            <div className="flex items-center">
              <i className={`bx ${icon} text-2xl text-grey-40`} />
              <p className="pl-2 font-body font-bold uppercase text-white lg:text-lg">{label}</p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary2 lg:text-lg">
              {href ? (
                <a href={href} className="hover:text-white">
                  {value}
                </a>
              ) : (
                value
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact
