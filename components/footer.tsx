import { MessageCircle, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">DigitalPro</div>
            <p className="text-gray-400 mb-4">
              Transformamos negócios locais em máquinas de vendas através do marketing digital integrado.
            </p>
            <div className="flex items-center gap-2 text-green-400">
              <MessageCircle size={16} />
              <span className="text-sm">Atendimento via WhatsApp</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Sites Profissionais</li>
              <li>Google Meu Negócio</li>
              <li>Identidade Visual</li>
              <li>Integração WhatsApp</li>
              <li>Consultoria Digital</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@digitalpro.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Atendimento</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Segunda a Sexta: 8h às 18h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Sábado: 8h às 12h</span>
              </div>
              <div className="text-green-400 font-medium">Resposta em até 5 minutos</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 DigitalPro. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido para transformar negócios locais em máquinas de vendas.</p>
        </div>
      </div>
    </footer>
  )
}
