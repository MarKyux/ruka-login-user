export const Footer = () => {
  return (
    <>
      <footer className="footer-1 bg-slate-50 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 className="text-xl font-bold mb-6">Menú</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a href="/"
                    className="border-b border-solid border-transparent hover:border-blue-600 hover:text-blue-600">
                    Inicio</a>
                </li>
                <li className="mb-2">
                  <a href="/"
                    className="border-b border-solid border-transparent hover:border-blue-600 hover:text-blue-600">
                    Servicios</a>
                </li>
                <li className="mb-2">
                  <a href="/"
                    className="border-b border-solid border-transparent hover:border-blue-600 hover:text-blue-600">
                    Whitepaper</a>
                </li>
                <li className="mb-2">
                  <a href="/"
                    className="border-b border-solid border-transparent hover:border-blue-600 hover:text-blue-600">
                    Nosotros</a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6">Servicios</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a href="/"
                    className="border-b border-solid border-transparent hover:border-blue-600 hover:text-blue-600">
                    DAO
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/"
                    className="border-b border-solid border-transparent hover:border-blue-600 hover:text-blue-600">
                    NFT
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/"
                    className="border-b border-solid border-transparent hover:border-blue-600 hover:text-blue-600">
                    Token
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/"
                    className="border-b border-solid border-transparent hover:border-blue-600 hover:text-blue-600">
                    Desarrollo Software
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">Whitepaper</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a href="/"
                    className="border-b border-solid border-transparent hover:border-blue-600 hover:text-blue-600">
                    Documento
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/"
                    className="border-b border-solid border-transparent hover:border-blue-600 hover:text-blue-600">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">Nosotros</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a href="/"
                    className="border-b border-solid border-transparent hover:border-blue-600 hover:text-blue-600">
                    Equipo
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/"
                    className="border-b border-solid border-transparent hover:border-blue-600 hover:text-blue-600">
                    Contacto
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/"
                    className="border-b border-solid border-transparent hover:border-blue-600 hover:text-blue-600">
                    Talento
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-center">Redes sociales</h5>
              <div className="flex sm:justify-center xl:justify-center">
                <a href="https://twitter.com/RUKACOIN" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 border border-gray-400 rounded-full text-center text-gray-600 hover:text-white hover:border-blue-500 transition duration-200">
                    <svg className="fill-blue-500 w-7 mt-0.5 ml-0.5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="https://www.instagram.com/ruka.coin/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 ml-4 h-12 border border-gray-400 rounded-full text-center text-gray-600 hover:text-white hover:border-pink-500 transition duration-200">
                    <svg className="fill-pink-500 w-7" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 ml-4 h-12 border border-gray-400 rounded-full text-center text-gray-600 hover:text-white hover:border-blue-500">
                    <svg className="fill-blue-500 w-7" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
            <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
              <a className="mb-4 text-sm" href="/">Política de cookies</a>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
              <a className="mb-4 text-sm" href="/">Aviso legal</a>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
              <a className="mb-4 text-sm" href="/">Política de privacidad</a>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
              <a className="mb-4 text-sm" href="/">Copyright © 2022</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}