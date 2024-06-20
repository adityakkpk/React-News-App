const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NEWS
          </span>
        </a>
        <a
          href="https://github.com/adityakkpk/React-News-App"
          className="block py-1 px-3 text-slate-200 text-lg rounded dark:text-whilte bg-sky-800 border border-blue-700 hover:bg-sky-400 hover:text-slate-900 duration-200"
          aria-current="page"
          target="_blank"
        >
          Code {'</>'}
        </a>
      </div>
    </nav>
  )
}

export default Navbar;