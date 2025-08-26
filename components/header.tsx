"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const whatsappNumber = "5511999999999" // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços de marketing digital."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-blue-600">DigitalPro</div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
              Início
            </a>
            <a href="#solucoes" className="text-gray-700 hover:text-blue-600 transition-colors">
              Soluções
            </a>
            <a href="#resultados" className="text-gray-700 hover:text-blue-600 transition-colors">
              Resultados
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Serviços
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Fale no WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </a>
              <a href="#solucoes" className="text-gray-700 hover:text-blue-600 transition-colors">
                Soluções
              </a>
              <a href="#resultados" className="text-gray-700 hover:text-blue-600 transition-colors">
                Resultados
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </a>
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2 w-fit"
              >
                <MessageCircle size={18} />
                Fale no WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
