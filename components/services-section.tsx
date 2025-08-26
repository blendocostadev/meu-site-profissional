"use client"

import { Button } from "@/components/ui/button"
import { Check, Crown, MessageCircle } from "lucide-react"

export function ServicesSection() {
  const whatsappNumber = "5591984409973"
  const whatsappMessage = "Olá! Quero conhecer o Pacote Completo com desconto especial!"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  const services = [
    {
      title: "Site Profissional",
      price: "",
      features: [
        "Design responsivo e moderno",
        "Otimização para conversão",
        "Integração com WhatsApp",
        "Formulários de captação",
        "Certificado SSL incluso",
      ],
    },
    {
      title: "Google Meu Negócio",
      price: "",
      features: [
        "Otimização completa do perfil",
        "Gestão de avaliações",
        "Posts regulares",
        "Monitoramento de métricas",
        "Suporte por 3 meses",
      ],
    },
    {
      title: "Identidade Visual",
      price: "",
      features: [
        "Logo profissional",
        "Manual da marca",
        "Cartão de visitas",
        "Papelaria completa",
        "Artes para redes sociais",
      ],
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Escolha Seu Plano de Transformação</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serviços individuais ou pacote completo com desconto especial. Todos com garantia de satisfação.
          </p>
        </div>

        {/* Individual Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
              >
                Contratar Separado
              </Button>
            </div>
          ))}
        </div>

        {/* Complete Package */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <Crown size={16} />
              MAIS POPULAR
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Pacote Completo - Ecossistema Digital</h3>
              <p className="text-lg opacity-90 mb-6">
                Todos os serviços integrados para máxima eficiência. Economize R$ 2.000 e tenha resultados 3x mais
                rápidos.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Site Profissional Completo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Google Meu Negócio Otimizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Identidade Visual Profissional</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Integração Total WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Suporte Premium por 6 meses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Garantia de Resultados</span>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="mb-4">
                <div className="text-lg opacity-75 line-through"></div>
                <div className="text-4xl font-bold"></div>
                <div className="text-sm opacity-75"></div>
              </div>

              

              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg flex items-center gap-3 w-full lg:w-auto"
              >
                <MessageCircle size={20} />
                Solicitar Consultoria Gratuita
              </Button>

              <div className="mt-4 text-sm opacity-75">⚡ Últimas 5 vagas com desconto</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
