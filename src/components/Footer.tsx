
import { Separator } from "@/components/ui/separator";
import { Globe, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">EcoHub Solutions</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Transformando o futuro através de soluções ambientais inteligentes e integradas.
              Conectamos tecnologia, sustentabilidade e inovação.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Monitoramento de Emissões</li>
              <li>Compliance ESG</li>
              <li>Gestão Hídrica</li>
              <li>Economia Circular</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Documentação</li>
              <li>API Reference</li>
              <li>Treinamentos</li>
              <li>Consultoria</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                contato@ecohub.solutions
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +55 (11) 9999-9999
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                www.ecohub.solutions
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-slate-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2024 EcoHub Solutions. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-green-400 transition-colors">Termos</a>
            <a href="#" className="hover:text-green-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
