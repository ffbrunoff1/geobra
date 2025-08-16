import React from 'react'
import { motion } from 'framer-motion'
import { Factory, Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    empresa: [
      { name: 'Sobre Nós', path: '/#sobre' },
      { name: 'Nossos Serviços', path: '/#servicos' },
      { name: 'Contato', path: '/#contato' }
    ],
    produtos: [
      { name: 'Geotextil', path: '/produto/geotextil' },
      { name: 'Tubo Dreno', path: '/produto/tubo-dreno' },
      { name: 'Todos os Produtos', path: '/produtos' }
    ]
  }

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <Factory className="h-8 w-8 text-white" />
                <span className="text-2xl font-bold">
                  GEO<span className="text-accent-400">BRA</span>
                </span>
              </Link>
              
              <p className="text-secondary-300 leading-relaxed mb-6 max-w-md">
                Especialistas em geossintéticos e soluções de drenagem. 
                Oferecemos produtos de alta qualidade para projetos de engenharia civil, 
                garantindo durabilidade e eficiência em cada aplicação.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+5544991040774"
                  className="flex items-center space-x-3 text-secondary-300 hover:text-accent-400 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <span>(44) 99104-0774</span>
                </a>
                
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="flex items-center space-x-3 text-secondary-300 hover:text-accent-400 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                  <span>ffbrunoff@yahoo.com.br</span>
                </a>
                
                <div className="flex items-center space-x-3 text-secondary-300">
                  <MapPin className="h-5 w-5" />
                  <span>Padre Lebret 801 G05 Bloco 03</span>
                </div>
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">
                Empresa
              </h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-secondary-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">
                Produtos
              </h3>
              <ul className="space-y-3">
                {footerLinks.produtos.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-secondary-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-secondary-700 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-400 text-sm">
              © {currentYear} Geobra. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-secondary-400 text-sm">
                Criado com{' '}
                <a
                  href="https://papum.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-accent-400 hover:text-accent-300 transition-colors duration-200"
                >
                  Papum
                </a>
              </span>
              
              <button
                onClick={scrollToTop}
                className="p-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors duration-200 group"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="h-4 w-4 transform group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}