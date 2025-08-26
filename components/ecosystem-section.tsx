import { ArrowRight, Globe, Search, MessageSquare, BarChart3, Users, Smartphone } from "lucide-react"

export function EcosystemSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Como Funciona Nosso
            <span className="text-blue-600"> Ecossistema Digital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todos os elementos trabalham juntos para criar um fluxo constante de clientes qualificados para seu negócio.
          </p>
        </div>

        {/* Ecosystem Diagram */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Step 1: Attraction */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Atração</h3>
              <p className="text-gray-600 mb-4">
                Seu site otimizado aparece no Google quando clientes procuram seus serviços
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>• SEO otimizado</div>
                <div>• Google Meu Negócio</div>
                <div>• Redes sociais</div>
              </div>
            </div>

            <ArrowRight className="w-8 h-8 text-gray-400 mx-auto hidden lg:block" />

            {/* Step 2: Conversion */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Conversão</h3>
              <p className="text-gray-600 mb-4">Site profissional converte visitantes em leads qualificados</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>• Design persuasivo</div>
                <div>• Formulários otimizados</div>
                <div>• CTAs estratégicos</div>
              </div>
            </div>

            <ArrowRight className="w-8 h-8 text-gray-400 mx-auto hidden lg:block" />

            {/* Step 3: Follow-up */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Follow-up</h3>
              <p className="text-gray-600 mb-4">Leads são direcionados automaticamente para seu WhatsApp</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>• WhatsApp integrado</div>
                <div>• Mensagens automáticas</div>
                <div>• Qualificação de leads</div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Site Otimizado</h4>
            <p className="text-sm text-gray-600">Design responsivo que converte em todos os dispositivos</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">WhatsApp Business</h4>
            <p className="text-sm text-gray-600">Integração direta para atendimento e fechamento</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Redes Sociais</h4>
            <p className="text-sm text-gray-600">Estratégia integrada para máximo alcance</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Métricas</h4>
            <p className="text-sm text-gray-600">Acompanhamento de resultados em tempo real</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full inline-block">
            <span className="font-semibold">
              🚀 Resultado: Fluxo constante de clientes qualificados direto no seu WhatsApp
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
