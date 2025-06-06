
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description: "Ideal para PMEs iniciando na jornada ESG",
      price: "R$ 1.500",
      period: "/mês",
      badge: "Mais Popular",
      badgeColor: "bg-blue-100 text-blue-800",
      icon: Zap,
      solutions: 5,
      features: [
        "5 soluções essenciais incluídas",
        "Emissions Insight básico",
        "Sustain Easy Manage",
        "Green Frame essencial", 
        "Relatórios mensais automáticos",
        "Suporte por email",
        "Treinamento básico online",
        "Até 50 usuários"
      ],
      cta: "Começar Teste Grátis",
      highlight: false
    },
    {
      name: "Professional",
      description: "Para empresas médias com compliance avançado",
      price: "R$ 4.500",
      period: "/mês",
      badge: "Recomendado",
      badgeColor: "bg-green-100 text-green-800",
      icon: Star,
      solutions: 12,
      features: [
        "12 soluções premium incluídas",
        "ESG AI Navigator completo",
        "TraceCarbon + Terra Carbon Guard",
        "ISSB + TNFD frameworks",
        "Água Inteligente regional",
        "Relatórios semanais + dashboards",
        "Suporte prioritário 24/7",
        "Treinamento presencial",
        "Até 200 usuários",
        "API integrations",
        "Custom branding"
      ],
      cta: "Solicitar Demo",
      highlight: true
    },
    {
      name: "Enterprise",
      description: "Solução completa para grandes corporações",
      price: "R$ 12.000",
      period: "/mês",
      badge: "Completo",
      badgeColor: "bg-purple-100 text-purple-800",
      icon: Crown,
      solutions: 22,
      features: [
        "Todas as 22 soluções incluídas",
        "EcoSmart Mine + setores especializados",
        "SBCE Carbon Market acesso",
        "EcoRemedy AI Hub completo",
        "Clima Compass + BioEco",
        "Relatórios em tempo real",
        "Suporte dedicado + CSM",
        "Implementação personalizada",
        "Usuários ilimitados",
        "Integração enterprise",
        "White-label options",
        "SLA 99.9% garantido"
      ],
      cta: "Falar com Especialista",
      highlight: false
    }
  ];

  const addOns = [
    { name: "Consultoria Especializada", price: "R$ 800/hora" },
    { name: "Treinamento Presencial", price: "R$ 5.000/dia" },
    { name: "Integração Customizada", price: "R$ 15.000/projeto" },
    { name: "Suporte Premium 24/7", price: "R$ 2.000/mês" }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Planos que <span className="text-green-600">Crescem</span> com Seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modelos de assinatura flexíveis com ROI comprovado. Todos os planos incluem 
            14 dias grátis e podem ser cancelados a qualquer momento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.highlight ? 'border-green-500 border-2 shadow-xl scale-105' : 'border-gray-200'} transition-all hover:shadow-lg`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className={plan.badgeColor}>{plan.badge}</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg ${plan.highlight ? 'bg-green-600' : 'bg-gray-100'} flex items-center justify-center`}>
                  <plan.icon className={`w-6 h-6 ${plan.highlight ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <div className="text-sm text-green-600 font-medium">
                  {plan.solutions} soluções incluídas
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.highlight ? 'bg-green-600 hover:bg-green-700' : ''}`} 
                  variant={plan.highlight ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <Card className="bg-gray-50">
          <CardHeader className="text-center">
            <CardTitle>Serviços Adicionais</CardTitle>
            <CardDescription>Acelere sua implementação com nossos serviços especializados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {addOns.map((addon, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg">
                  <div className="font-semibold text-sm mb-1">{addon.name}</div>
                  <div className="text-green-600 font-bold">{addon.price}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Money-back guarantee */}
        <div className="text-center mt-12 p-6 bg-green-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-green-800">
            Garantia de Satisfação 100%
          </h3>
          <p className="text-green-700">
            Teste qualquer plano por 14 dias. Se não estiver satisfeito, devolvemos 100% do valor investido.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
