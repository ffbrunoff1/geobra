import React from 'react'
import { motion } from 'framer-motion'
import { Droplets, Shield, Construction, Wrench, Phone, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      icon: Droplets,
      title: 'Sistemas de Drenagem',
      description: 'Soluções completas para drenagem superficial e subsuperficial, garantindo eficiência no escoamento de águas.',
      features: ['Tubos dreno perfurados', 'Sistemas de captação', 'Drenagem de estradas', 'Controle de erosão'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Geotextil Especializado',
      description: 'Materiais geossintéticos de alta performance para separação, filtragem e reforço de solos.',
      features: ['Separação de camadas', 'Filtragem eficiente', 'Reforço estrutural', 'Proteção contra erosão'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Construction,
      title: 'Consultoria Técnica',
      description: 'Assessoria especializada para dimensionamento e aplicação adequada de materiais geossintéticos.',
      features: ['Análise de projeto', 'Dimensionamento técnico', 'Especificação de materiais', 'Acompanhamento de obra'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Wrench,
      title: 'Suporte e Instalação',
      description: 'Orientação técnica para instalação correta e maximização da vida útil dos materiais.',
      features: ['Treinamento de equipes', 'Supervisão técnica', 'Controle de qualidade', 'Manutenção preventiva'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const applications = [
    {
      title: 'Obras Rodoviárias',
      description: 'Estradas, rodovias e vias urbanas',
      image: '🛣️'
    },
    {
      title: 'Ferrovias',
      description: 'Infraestrutura ferroviária e metroviária',
      image: '🚊'
    },
    {
      title: 'Obras Portuárias',
      description: 'Portos, cais e estruturas marítimas',
      image: '⚓'
    },
    {
      title: 'Contenção de Encostas',
      description: 'Estabilização de taludes e encostas',
      image: '⛰️'
    },
    {
      title: 'Obras Hidráulicas',
      description: 'Canais, barragens e reservatórios',
      image: '💧'
    },
    {
      title: 'Aterros Sanitários',
      description: 'Impermeabilização e drenagem',
      image: '♻️'
    }
  ]

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em geossintéticos e drenagem, desde o 
            fornecimento de materiais até o suporte técnico especializado.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 bg-gradient-to-br ${service.color} rounded-xl shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-secondary-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Applications Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-secondary-900 mb-12">
            Aplicações dos Nossos Produtos
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md card-hover border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3">{app.image}</div>
                <h4 className="font-semibold text-secondary-900 mb-2 text-sm">
                  {app.title}
                </h4>
                <p className="text-xs text-secondary-600 leading-relaxed">
                  {app.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Precisa de uma Solução Personalizada?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe técnica está pronta para desenvolver a solução ideal 
            para seu projeto. Entre em contato e receba uma consultoria especializada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/produtos"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <span>Ver Produtos</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <a
              href="tel:+5544991040774"
              className="bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Ligar Agora</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}