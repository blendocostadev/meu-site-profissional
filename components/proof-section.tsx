"use client"

import { Star, Award } from "lucide-react"

export function ProofSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      business: "Academia FitPro",
      result: "+250% em matrículas",
      text: "Em 60 dias, nossa academia saiu de 80 para 280 alunos. O sistema de captação via WhatsApp é incrível!",
      rating: 5,
    },
    {
      name: "Dra. Marina Costa",
      business: "Clínica Estética Bella",
      result: "+180% em agendamentos",
      text: "Nunca imaginei que um site pudesse trazer tantos pacientes. Agora tenho agenda lotada por meses!",
      rating: 5,
    },
    {
      name: "Roberto Mendes",
      business: "Restaurante Sabor & Arte",
      result: "+320% em delivery",
      text: "O delivery explodiu! Saímos de 20 pedidos por dia para mais de 80. Investimento que se paga sozinho.",
      rating: 5,
    },
  ]

  const stats = [
    { number: "500+", label: "Negócios Transformados" },
    { number: "300%", label: "Aumento Médio em Vendas" },
    { number: "30 dias", label: "Primeiros Resultados" },
    { number: "98%", label: "Clientes Satisfeitos" },
  ]

  return (
    <section id="resultados" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award size={16} />
            Resultados Comprovados
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Mais de 500 Negócios Já Transformaram
            <span className="text-blue-600"> Suas Vendas</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja os resultados reais de quem decidiu parar de perder clientes para a concorrência.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Before/After Visual */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Antes vs Depois</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-4">
                <h4 className="text-lg font-semibold text-red-700 mb-4">ANTES</h4>
                <ul className="space-y-2 text-red-600">
                  <li>• Site desatualizado ou inexistente</li>
                  <li>• Poucos clientes por mês</li>
                  <li>• Dependência do boca a boca</li>
                  <li>• Concorrência dominando online</li>
                  <li>• Vendas estagnadas</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-4">
                <h4 className="text-lg font-semibold text-green-700 mb-4">DEPOIS</h4>
                <ul className="space-y-2 text-green-600">
                  <li>• Site profissional que converte</li>
                  <li>• Fluxo constante de leads</li>
                  <li>• Domínio nas buscas do Google</li>
                  <li>• Autoridade no mercado local</li>
                  <li>• Crescimento de 200-300%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>

              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.business}</div>
                <div className="text-sm font-semibold text-green-600 mt-1">{testimonial.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
