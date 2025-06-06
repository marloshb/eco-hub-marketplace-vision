
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, Zap, Shield, Globe, Leaf, BarChart3 } from "lucide-react";

const FrameworkSection = () => {
  const frameworkLayers = [
    {
      level: "Camada de Dados",
      icon: Database,
      color: "bg-blue-500",
      description: "Coleta e integração de dados ambientais em tempo real",
      solutions: ["Emissions Insight", "TraceCarbon", "Terra Carbon Guard"]
    },
    {
      level: "Camada de Inteligência",
      icon: Zap,
      color: "bg-purple-500", 
      description: "IA e machine learning para análise preditiva",
      solutions: ["ESG AI Navigator", "EcoRemedy AI Hub", "Clima Compass"]
    },
    {
      level: "Camada de Compliance",
      icon: Shield,
      color: "bg-green-500",
      description: "Conformidade regulatória e frameworks globais",
      solutions: ["ISSB Compliance", "TNFD Manager", "LicAmbiente AI"]
    },
    {
      level: "Camada de Mercado",
      icon: Globe,
      color: "bg-orange-500",
      description: "Marketplace e economia circular",
      solutions: ["SBCE Carbon Market", "Green Procurement", "EcoValue"]
    }
  ];

  const connectingFlow = [
    { from: "Dados Coletados", to: "Análise IA", impact: "+300% eficiência" },
    { from: "Insights Gerados", to: "Compliance Auto", impact: "-60% tempo" },
    { from: "Conformidade", to: "Valor de Mercado", impact: "+150% ROI" }
  ];

  return (
    <section id="framework" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Framework <span className="text-green-600">Integrado</span> de Soluções
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Arquitetura modular que conecta todas as soluções em um ecossistema inteligente, 
            maximizando resultados através da sinergia entre componentes.
          </p>
        </div>

        {/* Framework Diagram */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="grid gap-8 mb-12">
            {frameworkLayers.map((layer, index) => (
              <div key={index} className="relative">
                <Card className="border-l-4 hover:shadow-lg transition-shadow" style={{borderLeftColor: layer.color.replace('bg-', '#')}}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${layer.color} text-white`}>
                        <layer.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{layer.level}</CardTitle>
                        <p className="text-muted-foreground">{layer.description}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {layer.solutions.length} soluções
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {layer.solutions.map((solution, sIndex) => (
                        <Badge key={sIndex} variant="outline" className="text-xs">
                          {solution}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {index < frameworkLayers.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-green-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Connection Flow */}
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-center text-green-800">Fluxo de Valor Integrado</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {connectingFlow.map((flow, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                      <div className="font-semibold text-green-700">{flow.from}</div>
                      <ArrowRight className="w-5 h-5 mx-auto my-2 text-green-600" />
                      <div className="font-semibold text-green-700">{flow.to}</div>
                    </div>
                    <Badge className="bg-green-600 text-white">{flow.impact}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Integration Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BarChart3,
              title: "Visibilidade Total",
              description: "Dashboard unificado com insights de todas as soluções integradas"
            },
            {
              icon: Zap,
              title: "Automação Inteligente",
              description: "Workflows automatizados que conectam dados, análise e ação"
            },
            {
              icon: Leaf,
              title: "Impacto Mensurável",
              description: "Métricas consolidadas de performance ambiental e financeira"
            }
          ].map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
