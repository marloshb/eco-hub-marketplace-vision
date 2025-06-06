
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Play } from "lucide-react";

const SolutionsShowcase = () => {
  const featuredSolutions = [
    {
      id: "emissions-insight",
      name: "Emissions Insight",
      category: "Monitoramento de Emissões",
      description: "Monitore e analise emissões de carbono em tempo real com IA preditiva",
      benefits: ["Reduz custos de compliance em 45%", "Relatórios automáticos ESG", "Alertas inteligentes"],
      image: "/api/placeholder/600/400",
      video: "https://demo.emissions-insight.com",
      demoUrl: "https://emissions-insight.lovable.app",
      pricing: "A partir de R$ 2.500/mês"
    },
    {
      id: "esg-ai-navigator",
      name: "ESG AI Navigator",
      category: "Compliance ESG",
      description: "Assistente inteligente para navegação completa em frameworks ESG globais",
      benefits: ["Automatiza 80% do compliance", "Frameworks internacionais", "Auditoria digital"],
      image: "/api/placeholder/600/400",
      video: "https://demo.esg-navigator.com",
      demoUrl: "https://esg-navigator.lovable.app",
      pricing: "A partir de R$ 4.500/mês"
    },
    {
      id: "ecosmart-mine",
      name: "EcoSmart Mine",
      category: "Mineração Sustentável",
      description: "Solução completa para mineração sustentável com monitoramento ambiental total",
      benefits: ["Reduz impacto ambiental em 60%", "Compliance minerário completo", "Otimização com IA"],
      image: "/api/placeholder/600/400",
      video: "https://demo.ecosmart-mine.com",
      demoUrl: "https://ecosmart-mine.lovable.app",
      pricing: "Consulte nosso time"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Soluções que <span className="text-green-600">Transformam</span> Negócios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada solução foi desenvolvida para resolver desafios específicos do mercado ambiental, 
            com resultados comprovados e ROI garantido.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredSolutions.map((solution) => (
            <Card key={solution.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={solution.image} 
                  alt={solution.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-100 text-green-800">{solution.category}</Badge>
                </div>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="w-4 h-4 mr-1" />
                  Demo
                </Button>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{solution.name}</CardTitle>
                <CardDescription className="text-base">{solution.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-green-700">Benefícios Principais:</h4>
                  <ul className="space-y-1">
                    {solution.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="font-semibold text-green-600">{solution.pricing}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={solution.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Acessar
                      </a>
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Testar <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="text-lg px-8">
            Ver Todas as 22 Soluções <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;
