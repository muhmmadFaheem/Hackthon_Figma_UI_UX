const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6">
          {/* Top Section */}
          <div className="md:flex justify-between items-center mb-6">
            {/* Brand */}
            <h1 className="text-2xl font-bold text-blue-400">Hackathon</h1>
            
            {/* Navigation Links */}
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
  
          {/* Bottom Section */}
          <div className="text-center border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-400">
              2023 Nike,Inc. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;