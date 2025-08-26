import { AlertTriangle, TrendingDown, Users, Clock } from "lucide-react"

export function PainSection() {
  const pains = [
    {
      icon: TrendingDown,
      title: "Baixa Conversão Online",
      description: "Seu site não converte visitantes em clientes, desperdiçando oportunidades valiosas todos os dias.",
    },
    {
      icon: Users,
      title: "Falta de Presença Digital",
      description: "Seus concorrentes estão dominando o Google enquanto você perde clientes por não ser encontrado.",
    },
    {
      icon: Clock,
      title: "Dificuldade de Captar Leads",
      description: "Você não tem um sistema eficiente para capturar e nutrir leads, perdendo vendas constantemente.",
    },
    {
      icon: AlertTriangle,
      title: "Marketing Desconectado",
      description: "Suas ações de marketing não conversam entre si, gerando desperdício de tempo e dinheiro.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Você Está Perdendo Clientes Todos os Dias?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A maioria dos negócios locais enfrenta os mesmos problemas que impedem o crescimento. Reconhece algum destes
            cenários?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <pain.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{pain.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-6 py-3 rounded-full">
            <AlertTriangle size={20} />
            <span className="font-medium">Cada dia sem ação é dinheiro perdido para a concorrência</span>
          </div>
        </div>
      </div>
    </section>
  )
}
