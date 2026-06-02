import { useState, useEffect } from 'react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'clients', label: 'Clients' },
  { id: 'work', label: 'Work' },
  { id: 'statistics', label: 'Statistics' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', mobileOpen)
    document.body.classList.toggle('max-h-screen', mobileOpen)
    return () => {
      document.body.classList.remove('overflow-hidden', 'max-h-screen')
    }
  }, [mobileOpen])

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleMobileNav(id) {
    setMobileOpen(false)
    setTimeout(() => scrollTo(id), 50)
  }

  return (
    <>
      <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
        <div className="container flex items-center justify-between">
          <div>
            <a href="/" className="text-2xl md:text-3xl text-[#CCF381] font-bold md:block md:w-72">
              Seun Oyeniyi
            </a>
          </div>

          <div className="hidden lg:block">
            <ul className="flex items-center">
              {navItems.map(({ id, label }) => (
                <li key={id} className="group pl-6">
                  <span
                    onClick={() => scrollTo(id)}
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-primary2"
                  >
                    {label}
                  </span>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
              ))}
            </ul>
          </div>

          <div className="block lg:hidden">
            <button onClick={() => setMobileOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-primary2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 transition-opacity lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
          <button className="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMobileOpen(false)}>
            <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="close menu" />
          </button>
          <ul className="mt-8 flex flex-col">
            {navItems.map(({ id, label }) => (
              <li key={id} className="py-2">
                <span
                  onClick={() => handleMobileNav(id)}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-primary2"
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
