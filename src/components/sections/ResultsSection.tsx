
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Clock, Leaf, Users, Award } from "lucide-react";

const ResultsSection = () => {
  const keyMetrics = [
    {
      icon: DollarSign,
      value: "R$ 2.3M",
      label: "Economia Média Anual",
      description: "Redução de custos operacionais e multas evitadas",
      color: "text-green-600"
    },
    {
      icon: Clock,
      value: "60%",
      label: "Redução no Tempo",
      description: "Para processos de compliance e licenciamento",
      color: "text-blue-600"
    },
    {
      icon: Leaf,
      value: "45%",
      label: "Menos Emissões",
      description: "Redução média na pegada de carbono",
      color: "text-emerald-600"
    },
    {
      icon: TrendingUp,
      value: "320%",
      label: "ROI Médio",
      description: "Retorno sobre investimento em 12 meses",
      color: "text-purple-600"
    }
  ];

  const successStories = [
    {
      company: "Mineradora XYZ",
      sector: "Mineração",
      challenge: "Compliance ambiental complexo",
      solution: "EcoSmart Mine + ESG AI Navigator",
      results: ["40% menos tempo em licenciamento", "R$ 1.8M economizados em multas", "100% compliance alcançado"],
      roi: "280%"
    },
    {
      company: "Indústria ABC",
      sector: "Manufatura",
      challenge: "Gestão de emissões ineficiente",
      solution: "Emissions Insight + TraceCarbon",
      results: ["35% redução nas emissões", "R$ 950K economia anual", "Certificação ESG obtida"],
      roi: "350%"
    },
    {
      company: "Grupo Sustentável",
      sector: "Agronegócio",
      challenge: "Economia circular implementação",
      solution: "EcoGeo Circular Hub + Green Procurement",
      results: ["50% redução resíduos", "R$ 1.2M novos negócios", "20% mais eficiência"],
      roi: "420%"
    }
  ];

  const industryBenchmarks = [
    { industry: "Mineração", adoption: 85, avgSavings: "R$ 3.2M", timeToValue: "6 meses" },
    { industry: "Manufatura", adoption: 70, avgSavings: "R$ 1.8M", timeToValue: "4 meses" },
    { industry: "Agronegócio", adoption: 65, avgSavings: "R$ 2.1M", timeToValue: "5 meses" },
    { industry: "Serviços", adoption: 55, avgSavings: "R$ 800K", timeToValue: "3 meses" }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Resultados <span className="text-green-600">Comprovados</span> em Números
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 500 empresas já transformaram sua gestão ambiental conosco. 
            Veja os resultados reais obtidos por nossos clientes.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardContent className="pt-6">
                <metric.icon className={`w-12 h-12 mx-auto mb-4 ${metric.color}`} />
                <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="font-semibold mb-2">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Casos de Sucesso</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{story.company}</CardTitle>
                    <Badge variant="outline">{story.sector}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    <strong>Desafio:</strong> {story.challenge}
                  </div>
                  <div className="text-sm text-green-700 bg-green-50 p-2 rounded">
                    <strong>Solução:</strong> {story.solution}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {story.results.map((result, rIndex) => (
                      <div key={rIndex} className="text-sm flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {result}
                      </div>
                    ))}
                  </div>
                  <div className="text-center pt-4 border-t">
                    <div className="text-2xl font-bold text-green-600">{story.roi}</div>
                    <div className="text-sm text-muted-foreground">ROI em 12 meses</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Benchmarks */}
        <Card className="bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Benchmarks por Setor</CardTitle>
            <p className="text-muted-foreground">Resultados médios por indústria usando nossas soluções</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryBenchmarks.map((benchmark, index) => (
                <div key={index} className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3">{benchmark.industry}</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{benchmark.adoption}%</div>
                      <div className="text-xs text-muted-foreground">Taxa de Adoção</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-blue-600">{benchmark.avgSavings}</div>
                      <div className="text-xs text-muted-foreground">Economia Média</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-purple-600">{benchmark.timeToValue}</div>
                      <div className="text-xs text-muted-foreground">Time to Value</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Awards and Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Reconhecimentos e Certificações</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "ISO 27001 Certificado",
              "ISSB Framework Partner",
              "Carbon Trust Verified",
              "Green Tech Award 2024",
              "ESG Excellence Prize"
            ].map((award, index) => (
              <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Award className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
