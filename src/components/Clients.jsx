const clients = [
  { src: '/assets/img/logo-cynegiehr.png', alt: 'CynegieHR', height: 'h-12' },
  { src: '/assets/img/logo-whatsdown.png', alt: 'WhatsDown', height: 'h-12' },
  { src: '/assets/img/logo-areahire.png', alt: 'AreaHire', height: 'h-12' },
  { src: '/assets/img/logo-greybutterfly.png', alt: 'Grey Butterfly', height: 'h-12' },
  { src: '/assets/img/logo-priment.png', alt: 'Priment', height: 'h-12' },
  { src: '/assets/img/logo-dlink.png', alt: 'D-Link', height: 'h-12' },
  { src: '/assets/img/logo-savemart.png', alt: 'SaveMart', height: 'h-12' },
  { src: '/assets/img/logo-fnv.png', alt: 'FNV', height: 'h-12' },
  { src: '/assets/img/logo-uniosun.png', alt: 'Uniosun', height: 'h-7' },
  { src: '/assets/img/logo-wordpress.png', alt: 'WordPress', height: 'h-12' },
]

function Clients() {
  return (
    <div
      id="clients"
      className="bg-grey-50 bg-[#4831D4]"
      style={{ backgroundImage: 'url(/assets/img/skye-bg7.svg)' }}
    >
      <div className="container py-16 md:py-20">
        <div className="mx-auto w-full sm:w-3/4 lg:w-full">
          <h2 className="text-center font-header text-4xl font-black uppercase text-primary2 sm:text-5xl lg:text-6xl">
            My latest clients
          </h2>
          <div className="flex flex-wrap items-center justify-center pt-4">
            {clients.map(({ src, alt, height }) => (
              <span key={alt} className="m-8 block">
                <img
                  src={src}
                  alt={alt}
                  className={`mx-auto block ${height} w-auto`}
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
