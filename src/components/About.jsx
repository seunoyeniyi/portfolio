const skills = [
  { label: 'Backend Development', percent: 100 },
  { label: 'Frontend Development', percent: 90 },
  { label: 'API & Database', percent: 92 },
  { label: 'DevOps & Cloud', percent: 85 },
  { label: 'System Architecture', percent: 88 },
]

const socials = [
  { href: 'https://facebook.com/seunoyeniyi123', icon: 'bxl-facebook-square' },
  { href: 'https://twitter.com/skye_create', icon: 'bxl-twitter' },
  { href: 'https://www.linkedin.com/in/seun-oyeniyi-89a88b15b/', icon: 'bxl-linkedin' },
  { href: 'https://www.instagram.com/seun_oyeniyi/', icon: 'bxl-instagram' },
]

function About() {
  return (
    <div
      id="about"
      className="bg-grey-50"
      style={{ backgroundImage: 'url(/assets/img/skye-bg1.svg)' }}
    >
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-4xl font-black uppercase text-primary sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I'm Seun Oyeniyi, a Full Stack Engineer
          </h4>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            I architect and build scalable full stack solutions, and I love what I do. Since beginning
            my journey as a software engineer nearly 7 years ago, I've collaborated with technology
            agencies, delivered solutions for innovative startups, and built production systems for
            growing businesses. I'm quietly confident, naturally curious, and perpetually working on
            improving my skills one engineering challenge at a time.
          </p>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            Dedicated and efficient full stack engineer with 7+ years experience in software
            development, specializing in frontend and backend architecture, RESTful APIs, database
            design, cloud infrastructure, and CI/CD pipelines. Expert in building production-grade
            applications from concept to deployment.
          </p>

          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">Connect with me</p>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-2xl text-primary" />
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              {socials.map(({ href, icon }) => (
                <a key={icon} href={href} className="pl-4 first:pl-0">
                  <i className={`bx ${icon} text-2xl text-primary hover:text-yellow`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          {skills.map(({ label, percent }) => (
            <div key={label} className="pt-6 first:pt-0">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">{label}</h4>
                <h3 className="font-body text-3xl font-bold text-primary">{percent}%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div
                  className="h-3 rounded-full bg-primary"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
