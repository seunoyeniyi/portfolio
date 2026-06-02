const stats = [
  { icon: '/assets/img/icon-project.svg', alt: 'projects', value: 22, label: 'Finished Projects' },
  { icon: '/assets/img/icon-award.svg', alt: 'awards', value: 1, label: 'Awards Won' },
  { icon: '/assets/img/icon-happy.svg', alt: 'clients', value: 8, label: 'Happy Clients' },
  { icon: '/assets/img/icon-puzzle.svg', alt: 'bugs', value: 99, label: 'Bugs Fixed' },
]

function Statistics() {
  return (
    <div
      id="statistics"
      className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24 border-[1px] border-[#5540AE]"
      style={{ backgroundImage: 'url(/assets/img/experience-figure.png)' }}
    >
      <div className="container">
        <div className="mx-auto w-5/6 bg-white py-16 shadow border-[1px] border-grey-60 md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
          <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
            {stats.map(({ icon, alt, value, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center justify-center text-center md:flex-row md:text-left ${
                  i >= 2 ? 'mt-6 md:mt-10 lg:mt-0' : ''
                }`}
              >
                <div>
                  <img src={icon} className="mx-auto h-12 w-auto md:h-20" alt={alt} />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">{value}</h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    {label}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics
