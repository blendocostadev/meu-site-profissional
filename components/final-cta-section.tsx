"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Clock, TrendingUp, Shield } from "lucide-react"

export function FinalCTASection() {
  const whatsappNumber = "5511999999999"
  const whatsappMessage = "🚀 URGENTE! Quero garantir minha vaga com desconto especial antes que acabe!"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Clock size={16} />
            OFERTA POR TEMPO LIMITADO
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Não Perca Mais Clientes!
            <br />
            <span className="text-yellow-300">Aja Agora</span>
          </h2>

          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Enquanto você hesita, seus concorrentes estão dominando o mercado online.
            <strong> Restam apenas 5 vagas</strong> com desconto especial este mês.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <TrendingUp className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">300%</div>
            <div className="text-sm opacity-90">Aumento médio em vendas</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Clock className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">30 dias</div>
            <div className="text-sm opacity-90">Para ver resultados</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Shield className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">100%</div>
            <div className="text-sm opacity-90">Garantia de satisfação</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">🔥 BÔNUS EXCLUSIVOS PARA AS PRÓXIMAS 5 VAGAS:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span>Consultoria estratégica gratuita (R$ 500)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span>Setup completo do WhatsApp Business</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span>Templates de mensagens prontos</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span>Suporte prioritário por 6 meses</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-12 py-6 rounded-full text-xl flex items-center gap-4 mx-auto transform hover:scale-105 transition-transform shadow-2xl"
          >
            <MessageCircle size={24} />
            QUERO MINHA VAGA COM DESCONTO
          </Button>

          <div className="text-sm opacity-75">⚡ Resposta em menos de 5 minutos • 🔒 Seus dados estão seguros</div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full font-bold text-lg animate-pulse">
            ⏰ Oferta expira em 48 horas!
          </div>
        </div>
      </div>
    </section>
  )
}
