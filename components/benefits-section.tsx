import { CheckCircle, Target, Zap, BarChart3, MessageSquare } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Target,
      title: "Presença Digital Profissional",
      description: "Site moderno e otimizado que transmite credibilidade e converte visitantes em clientes.",
    },
    {
      icon: Zap,
      title: "Integração com WhatsApp",
      description: "Sistema automatizado que direciona leads qualificados diretamente para seu WhatsApp Business.",
    },
    {
      icon: BarChart3,
      title: "Domínio no Google",
      description: "Otimização completa para aparecer nas primeiras posições quando seus clientes procurarem.",
    },
    {
      icon: MessageSquare,
      title: "Redes Sociais Conectadas",
      description: "Estratégia integrada que conecta todas suas redes sociais ao seu funil de vendas.",
    },
  ]

  return (
    <section id="solucoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle size={16} />A Solução Que Você Precisa
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Como Transformamos Seu Negócio em uma
            <span className="text-blue-600"> Máquina de Vendas</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nosso ecossistema digital integrado resolve todos os problemas do seu negócio, criando um fluxo constante de
            clientes qualificados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Resultado Garantido em 90 Dias</h3>
          <p className="text-lg opacity-90 mb-6">
            Se você não ver um aumento significativo nas suas vendas, devolvemos 100% do seu investimento.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              Mais leads qualificados
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              Maior conversão
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              ROI comprovado
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
