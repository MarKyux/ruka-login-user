export const Header = () => {

  const openBurgerMenu = () => {
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');
    if (burger.length && menu.length) {
      for (let j = 0; j < menu.length; j++) {
        menu[j].classList.toggle('hidden');
      }
    }
  }

  const closeBurgerMenu = () => {
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');
    const menu = document.querySelectorAll('.navbar-menu');

    if (close.length) {
      for (let j = 0; j < menu.length; j++) {
        menu[j].classList.toggle('hidden');
      }
    }

    if (backdrop.length) {
      for (let i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener('click', function () {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }
  }


  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow ">
        <a className="text-3xl font-bold leading-none" href="/">
          <img className="h-10 ml-10" src="/logo192.png" alt="logo" />
        </a>
        <div className="lg:hidden mr-10">
          <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={openBurgerMenu}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          className="hidden absolute top-1/2 right-60 transform -translate-y-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-10">
          <li><a className="text-sm text-gray-500 font-bold hover:text-blue-500" href="/">Inicio</a></li>
          <li><a className="text-sm text-gray-500 font-bold hover:text-blue-500" href="/about">Servicios</a></li>
          <li><a className="text-sm text-gray-500 font-bold hover:text-blue-500" href="/services">Whitepaper</a></li>
          <li><a className="text-sm text-gray-500 font-bold hover:text-blue-500" href="/contact">Nosotros</a></li>
        </ul>
        <a className="hidden lg:inline-block lg:ml-auto lg:mr-14 py-2 px-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-3xl transition duration-200" href="/login">
          Accede
        </a>
      </nav>
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav
          className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="/">
              <img className="h-12" src="/logo192.png" alt="logo" />
            </a>
            <button className="navbar-close" onClick={closeBurgerMenu}>
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/">Inicio</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/">Servicios</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/">Whitepaper</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/">Nosotros</a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                href="/">Accede</a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2022</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  )
}