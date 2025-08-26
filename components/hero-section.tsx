"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, TrendingUp } from "lucide-react"

export function HeroSection() {
  const whatsappNumber = "5511999999999"
  const whatsappMessage = "Olá! Quero transformar meu negócio com marketing digital profissional!"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp size={16} />
              Transformação Digital Comprovada
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme Seu Negócio Local em uma
              <span className="text-blue-600"> Máquina de Vendas</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Pare de perder clientes para a concorrência. Nosso ecossistema digital integrado aumenta suas vendas em
              até <strong className="text-blue-600">300%</strong> nos primeiros 90 dias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full text-lg flex items-center gap-3"
              >
                <MessageCircle size={20} />
                Quero Aumentar Minhas Vendas
                <ArrowRight size={20} />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-full text-lg bg-transparent"
              >
                Ver Resultados Reais
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Resultados em 30 dias
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Suporte especializado
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Garantia de satisfação
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Dashboard de resultados"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Floating stats */}
            <div className="absolute -top-4 -left-4 bg-green-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">+300%</div>
              <div className="text-sm">Vendas</div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">90 dias</div>
              <div className="text-sm">Resultados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
