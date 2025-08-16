import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Droplets, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Products() {
  const products = [
    {
      id: 'geotextil',
      name: 'Geotextil',
      description: 'Material essencial na engenharia civil, projetado para melhorar a estabilidade e durabilidade de obras através de filtragem, drenagem, separação e reforço.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1755383764039_0.png',
      icon: Shield,
      features: [
        'Filtragem eficiente de partículas',
        'Drenagem superior',
        'Separação de camadas',
        'Reforço estrutural',
        'Prevenção de erosão',
        'Sustentabilidade'
      ],
      applications: [
        'Pavimentação',
        'Contenção de encostas',
        'Construção de estradas',
        'Gestão de recursos hídricos'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'tubo-dreno',
      name: 'Tubo Dreno',
      description: 'Componente essencial para sistemas de drenagem eficientes, garantindo remoção adequada de água e resíduos com alta resistência e durabilidade.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1755383764039_1.png',
      icon: Droplets,
      features: [
        'Alta resistência',
        'Instalação prática',
        'Múltiplos diâmetros',
        'Prevenção de obstruções',
        'Durabilidade garantida',
        'Versatilidade de aplicação'
      ],
      applications: [
        'Drenagem de terrenos',
        'Escoamento pluvial',
        'Obras de infraestrutura',
        'Projetos de paisagismo'
      ],
      color: 'from-blue-500 to-blue-600'
    }
  ]

  const categories = [
    {
      title: 'Sistemas de Drenagem',
      description: 'Soluções completas para controle e escoamento de água',
      products: ['Tubo Dreno'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Materiais Geossintéticos',
      description: 'Produtos para separação, filtragem e reforço',
      products: ['Geotextil'],
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary-50 pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Produtos
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Descubra nossa linha completa de geossintéticos e soluções de drenagem, 
              desenvolvidos para atender às necessidades mais exigentes da engenharia civil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Categorias de Produtos
            </h2>
            <p className="text-lg text-secondary-600">
              Organizamos nossos produtos por aplicação para facilitar sua escolha
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`p-4 bg-gradient-to-br ${category.color} rounded-xl w-fit mb-6`}>
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.products.map((product, productIndex) => (
                    <div key={productIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-secondary-700 text-sm">{product}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Linha Completa de Produtos
            </h2>
            <p className="text-lg text-secondary-600">
              Conheça em detalhes cada um dos nossos produtos
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon
              return (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black bg-opacity-20 to-transparent"></div>
                    <div className={`absolute top-4 left-4 p-3 bg-gradient-to-br ${product.color} rounded-xl`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-secondary-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-secondary-800 mb-3">
                        Características Principais:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <span className="text-sm text-secondary-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-secondary-800 mb-3">
                        Aplicações:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, appIndex) => (
                          <span
                            key={appIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Link
                        to={`/produto/${product.id}`}
                        className="btn-primary w-full inline-flex items-center justify-center space-x-2"
                      >
                        <span>Ver Detalhes</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Não Encontrou o que Procura?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe técnica pode desenvolver soluções personalizadas 
              para seu projeto específico. Entre em contato conosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contato"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Falar com Especialista
              </a>
              <a
                href="tel:+5544991040774"
                className="bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Ligar Agora
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}