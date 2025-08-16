import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Shield, Droplets, CheckCircle, Phone, Mail, Star } from 'lucide-react'

export default function ProductDetail() {
  const { id } = useParams()

  const products = {
    'geotextil': {
      name: 'Geotextil',
      description: 'O geotextil é um material essencial na engenharia civil e na construção civil, projetado para melhorar a estabilidade e a durabilidade de obras. Composto por fibras sintéticas ou naturais, o geotextil desempenha diversas funções, como filtragem, drenagem, separação e reforço. Sua aplicação é amplamente utilizada em projetos de pavimentação, contenção de encostas, construção de estradas e gestão de recursos hídricos.\n\nA principal vantagem do geotextil é sua capacidade de permitir a passagem da água enquanto retém partículas sólidas, prevenindo a erosão do solo e melhorando a drenagem. Isso contribui para a longevidade das estruturas e reduz o risco de falhas. Além disso, o uso de geotextil minimiza a necessidade de materiais adicionais, tornando os projetos mais sustentáveis e economicamente viáveis.\n\nA instalação do geotextil é rápida e eficiente, o que agiliza o processo de construção. Disponível em diferentes gramaturas e tipos, é importante escolher o geotextil adequado para cada situação específica. Invista em geotextil de qualidade para garantir a eficácia e segurança de suas obras, proporcionando soluções duradouras e eficientes para o seu projeto.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1755383764039_0.png',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      features: [
        'Filtragem eficiente de partículas sólidas',
        'Drenagem superior mantendo estabilidade',
        'Separação efetiva entre camadas',
        'Reforço estrutural para maior resistência',
        'Prevenção de erosão do solo',
        'Sustentabilidade e economia de materiais',
        'Instalação rápida e eficiente',
        'Disponível em diferentes gramaturas'
      ],
      benefits: [
        'Aumenta a longevidade das estruturas',
        'Reduz o risco de falhas estruturais',
        'Minimiza custos de manutenção',
        'Acelera o processo de construção',
        'Contribui para projetos sustentáveis',
        'Versatilidade de aplicações'
      ],
      applications: [
        'Pavimentação de estradas e vias',
        'Contenção de encostas e taludes',
        'Construção de estradas',
        'Gestão de recursos hídricos',
        'Aterros sanitários',
        'Obras ferroviárias',
        'Estruturas de contenção',
        'Drenagem de fundações'
      ],
      specifications: [
        { label: 'Material', value: 'Fibras sintéticas/naturais' },
        { label: 'Gramatura', value: 'Variável conforme aplicação' },
        { label: 'Permeabilidade', value: 'Alta capacidade de drenagem' },
        { label: 'Resistência', value: 'Excelente resistência mecânica' }
      ]
    },
    'tubo-dreno': {
      name: 'Tubo Dreno',
      description: 'O tubo dreno é um componente essencial para sistemas de drenagem eficientes, projetado para garantir a remoção adequada de água e resíduos. Comumente utilizado em obras de infraestrutura, construção civil e em projetos de paisagismo, o tubo dreno possui materiais de alta resistência que garantem durabilidade e confiabilidade.\n\nEsse produto é ideal para prevenir alagamentos e infiltrações, permitindo a passagem de água de forma efetiva. Os tubos drenantes são projetados com furos ou ranhuras que facilitam a infiltração do líquido, ao mesmo tempo em que retêm partículas sólidas, evitando obstruções.\n\nDisponíveis em diferentes diâmetros e comprimentos, os tubos dreno podem ser facilmente adaptados a diversas aplicações, desde sistemas de drenagem de terrenos até o escoamento de água pluvial. Além disso, sua instalação é prática e rápida, economizando tempo e recursos no processo construtivo.\n\nOpte por tubos dreno de qualidade para garantir a eficácia e a longevidade do seu sistema de drenagem. A escolha certa do produto faz toda a diferença na proteção da sua infraestrutura e na manutenção do equilíbrio hídrico do ambiente.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1755383764039_1.png',
      icon: Droplets,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Alta resistência e durabilidade',
        'Instalação prática e rápida',
        'Múltiplos diâmetros disponíveis',
        'Prevenção efetiva de obstruções',
        'Materiais de alta qualidade',
        'Versatilidade de aplicação',
        'Furos estrategicamente posicionados',
        'Excelente relação custo-benefício'
      ],
      benefits: [
        'Previne alagamentos e infiltrações',
        'Economia de tempo na instalação',
        'Reduz custos de manutenção',
        'Protege a infraestrutura',
        'Mantém equilíbrio hídrico',
        'Longa vida útil'
      ],
      applications: [
        'Drenagem de terrenos residenciais',
        'Escoamento de água pluvial',
        'Obras de infraestrutura urbana',
        'Projetos de paisagismo',
        'Drenagem de campos esportivos',
        'Sistemas de irrigação',
        'Drenagem de estacionamentos',
        'Contenção de águas subterrâneas'
      ],
      specifications: [
        { label: 'Material', value: 'PVC de alta resistência' },
        { label: 'Diâmetros', value: 'Múltiplas opções disponíveis' },
        { label: 'Perfurações', value: 'Estrategicamente posicionadas' },
        { label: 'Comprimento', value: 'Adaptável ao projeto' }
      ]
    }
  }

  const product = products[id]

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-secondary-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Produto não encontrado</h1>
          <Link to="/produtos" className="btn-primary">
            Voltar aos Produtos
          </Link>
        </div>
      </div>
    )
  }


const IconComponent = product.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary-50 pt-20">
      {/* Header */}
      <section className={`py-16 bg-gradient-to-r ${product.color}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/produtos"
              className="inline-flex items-center space-x-2 text-white hover:text-gray-200 mb-6 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar aos Produtos</span>
            </Link>
            
            <div className="flex items-center space-x-4 text-white mb-6">
              <div className="p-4 bg-white bg-opacity-20 rounded-xl">
                <IconComponent className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{product.name}</h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </motion.div>

            {/* Product Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Description */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                  Sobre o Produto
                </h2>
                <div className="text-secondary-700 leading-relaxed space-y-4">
                  {product.description.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className={`bg-gradient-to-r ${product.color} rounded-2xl p-8 text-white`}>
                <h3 className="text-xl font-bold mb-4">Solicite um Orçamento</h3>
                <p className="mb-6 text-gray-100">
                  Entre em contato conosco para mais informações sobre este produto
                  e receba um orçamento personalizado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+5544991040774"
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>(44) 99104-0774</span>
                  </a>
                  <a
                    href="mailto:ffbrunoff@yahoo.com.br"
                    className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features and Benefits */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Características Técnicas
              </h2>
              <div className="space-y-4">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-md flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-secondary-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Benefícios
              </h2>
              <div className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-md flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-secondary-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications and Specifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Applications */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Aplicações
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {product.applications.map((application, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-md border-l-4 border-primary-500"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-secondary-700 font-medium">{application}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Especificações
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <div className="font-semibold text-secondary-800 mb-1">
                        {spec.label}
                      </div>
                      <div className="text-secondary-600 text-sm">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className={`bg-gradient-to-r ${product.color} rounded-3xl p-8 md:p-12 text-center text-white`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Interessado em {product.name}?
            </h3>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe técnica está pronta para esclarecer suas dúvidas 
              e fornecer a melhor solução para seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contato"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Solicitar Orçamento
              </a>
              <Link
                to="/produtos"
                className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-30 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Ver Outros Produtos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}