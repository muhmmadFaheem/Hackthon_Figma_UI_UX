import Link from "next/link";


const Navbar = () => {
    return (
      <nav className="bg-white border-b border-gray-300">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#">
              <img src="/logo.png" alt="Nike Logo" className="h-14" />
            </a>
          </div>
  
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                New & Featured
              </a>
            </li>
            <li>
              <Link href="/about" className="text-gray-800 hover:text-gray-500">
                Men
              </Link>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Kids
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Sale
              </a>
            </li>
          </ul>
  
          {/* Search Icon */}
          <div className="flex items-center space-x-4">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m-2.65 1.35a7 7 0 1114 0 7 7 0 01-14 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
  