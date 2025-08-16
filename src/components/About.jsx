import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Cog, TrendingUp } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Comprometimento com a excelência em todos os nossos produtos e serviços.'
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Construímos relacionamentos duradouros baseados na confiança mútua.'
    },
    {
      icon: Cog,
      title: 'Inovação',
      description: 'Sempre buscando as melhores soluções tecnológicas para nossos clientes.'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento',
      description: 'Evoluímos constantemente para oferecer soluções cada vez melhores.'
    }
  ]

  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '500+', label: 'Projetos Executados' },
    { number: '100+', label: 'Clientes Satisfeitos' },
    { number: '24/7', label: 'Suporte Técnico' }
  ]

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
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
            Sobre a Geobra
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Especialistas em geossintéticos e soluções de drenagem, oferecendo produtos 
            de alta qualidade para projetos de engenharia civil há mais de uma década.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Mission */}
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <Target className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900">Nossa Missão</h3>
                </div>
                <p className="text-secondary-700 leading-relaxed">
                  Fornecer soluções inovadoras em geossintéticos e drenagem, 
                  contribuindo para o desenvolvimento de infraestruturas sustentáveis 
                  e duradouras que atendam às necessidades específicas de cada projeto.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-accent-100 rounded-lg">
                    <Eye className="h-8 w-8 text-accent-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900">Nossa Visão</h3>
                </div>
                <p className="text-secondary-700 leading-relaxed">
                  Ser reconhecida como a empresa líder em soluções de geossintéticos 
                  no mercado brasileiro, sendo referência em qualidade, inovação 
                  e excelência no atendimento.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-secondary-900 mb-8 text-center lg:text-left">
              Nossos Valores
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg card-hover"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-3 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg w-fit mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Números que Comprovam Nossa Excelência
            </h3>
            <p className="text-xl text-primary-100">
              Resultados que falam por si só
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Story */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-secondary-900 mb-6">
              Nossa História
            </h3>
            <p className="text-lg text-secondary-700 leading-relaxed mb-6">
              A Geobra nasceu da necessidade de fornecer soluções especializadas 
              em geossintéticos para o mercado brasileiro. Com sede em Padre Lebret 801 G05 Bloco 03, 
              nossa empresa se consolidou como referência na área de drenagem e materiais 
              para engenharia civil.
            </p>
            <p className="text-lg text-secondary-700 leading-relaxed">
              Nosso foco na especialidade de drenagem nos permite oferecer produtos como 
              geotextil e tubos dreno com a mais alta qualidade, atendendo desde pequenos 
              projetos até grandes obras de infraestrutura. Cada produto é cuidadosamente 
              selecionado para garantir máxima eficiência e durabilidade.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}