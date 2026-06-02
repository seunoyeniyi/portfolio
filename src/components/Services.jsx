const services = [
  {
    title: 'Full Stack Development',
    description:
      'End-to-end application development from frontend to backend, including database architecture, API design, authentication, deployment, and scalable infrastructure solutions.',
  },
  {
    title: 'Backend & API Development',
    description:
      'Design and build robust RESTful APIs, microservices architecture, database optimization, server-side logic, and third-party integrations for enterprise-grade applications.',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Cloud infrastructure setup, CI/CD pipelines, containerization with Docker, deployment automation, monitoring, and performance optimization for production environments.',
  },
]

function Services() {
  return (
    <div
      id="services"
      className="px-5 sm:px-14 py-16 md:py-20"
      style={{ backgroundImage: 'url(/assets/img/skye-bg5.svg)' }}
    >
      <h2 className="text-center font-header text-4xl font-black uppercase text-primary2 sm:text-5xl lg:text-6xl">
        Here's what I'm good at
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl">
        These are the services I offer
      </h3>

      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        {services.map(({ title, description }) => (
          <div key={title} className="rounded px-8 py-12 shadow bg-primary">
            <div className="text-center">
              <h3 className="pt-8 text-lg font-black uppercase text-yellow lg:text-xl">{title}</h3>
              <p className="text-white pt-4 text-sm md:text-base">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
