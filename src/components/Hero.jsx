import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Droplets, Construction, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const features = [
    { icon: Shield, text: 'Materiais de Alta Qualidade' },
    { icon: Droplets, text: 'Soluções de Drenagem Eficientes' },
    { icon: Construction, text: 'Aplicação em Engenharia Civil' },
    { icon: CheckCircle, text: 'Garantia e Confiabilidade' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white bg-opacity-5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Soluções em{' '}
              <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                Geossintéticos
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Especialistas em drenagem e materiais de alta performance para 
              engenharia civil. Qualidade, durabilidade e inovação em cada projeto.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/produtos" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>Ver Produtos</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <a href="#contato" className="btn-secondary inline-flex items-center justify-center space-x-2">
                <span>Falar Conosco</span>
              </a>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-white bg-white bg-opacity-10 rounded-lg p-3 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent className="h-5 w-5 text-accent-400 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                className="bg-gradient-to-br from-accent-500 to-primary-600 rounded-3xl p-8 shadow-2xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Por que escolher a Geobra?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Materiais certificados e testados',
                      'Experiência comprovada no mercado',
                      'Suporte técnico especializado',
                      'Soluções personalizadas'
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center space-x-2 text-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-400 rounded-full opacity-20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white border-opacity-30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white bg-opacity-50 rounded-full mt-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}