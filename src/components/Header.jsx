import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Factory, Phone, Mail } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const products = [
    { name: 'Geotextil', path: '/produto/geotextil' },
    { name: 'Tubo Dreno', path: '/produto/tubo-dreno' }
  ]

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/#sobre' },
    { name: 'Produtos', hasDropdown: true },
    { name: 'Contato', path: '/#contato' }
  ]

  const handleProductsToggle = () => {
    setIsProductsOpen(!isProductsOpen)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Factory className={`h-8 w-8 ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`} />
              <span className={`text-2xl font-bold ${
                isScrolled ? 'text-secondary-900' : 'text-white'
              }`}>
                GEO<span className="text-gradient">BRA</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={handleProductsToggle}
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isScrolled 
                          ? 'text-secondary-700 hover:text-primary-600' 
                          : 'text-white hover:text-primary-200'
                      }`}
                    >
                      <span>Produtos</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        isProductsOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                        >
                          {products.map((product) => (
                            <Link
                              key={product.name}
                              to={product.path}
                              onClick={() => setIsProductsOpen(false)}
                              className="block px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150"
                            >
                              {product.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isScrolled 
                        ? 'text-secondary-700 hover:text-primary-600' 
                        : 'text-white hover:text-primary-200'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+5544991040774"
              className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isScrolled 
                  ? 'text-secondary-700 hover:text-primary-600' 
                  : 'text-white hover:text-primary-200'
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>(44) 99104-0774</span>
            </a>
            <a
              href="mailto:ffbrunoff@yahoo.com.br"
              className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isScrolled 
                  ? 'text-secondary-700 hover:text-primary-600' 
                  : 'text-white hover:text-primary-200'
              }`}
            >
              <Mail className="h-4 w-4" />
              <span>Contato</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled 
                ? 'text-secondary-700 hover:bg-secondary-100' 
                : 'text-white hover:bg-white hover:bg-opacity-10'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 py-4"
            >
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={handleProductsToggle}
                        className="flex items-center justify-between w-full px-4 py-3 text-secondary-700 hover:bg-primary-50 hover:text-primary-600"
                      >
                        <span>Produtos</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                          isProductsOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {isProductsOpen && (
                        <div className="pl-8">
                          {products.map((product) => (
                            <Link
                              key={product.name}
                              to={product.path}
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setIsProductsOpen(false)
                              }}
                              className="block px-4 py-2 text-sm text-secondary-600 hover:text-primary-600"
                            >
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-secondary-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="border-t border-gray-100 mt-4 pt-4">
                <a
                  href="tel:+5544991040774"
                  className="flex items-center space-x-2 px-4 py-2 text-secondary-700 hover:text-primary-600"
                >
                  <Phone className="h-4 w-4" />
                  <span>(44) 99104-0774</span>
                </a>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="flex items-center space-x-2 px-4 py-2 text-secondary-700 hover:text-primary-600"
                >
                  <Mail className="h-4 w-4" />
                  <span>ffbrunoff@yahoo.com.br</span>
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}