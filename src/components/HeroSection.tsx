
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Globe, TrendingUp, Shield } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: Globe, value: "22", label: "Soluções Disponíveis" },
    { icon: Leaf, value: "6", label: "Categorias Ambientais" },
    { icon: TrendingUp, value: "100%", label: "Foco em Sustentabilidade" },
    { icon: Shield, value: "24/7", label: "Monitoramento Contínuo" }
  ];

  return (
    <div className="relative bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            <span className="text-green-600">EcoHub</span> Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Sua plataforma integrada de soluções ambientais. Conecte, monitore e otimize 
            seus processos sustentáveis com tecnologia de ponta e inteligência artificial.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
            Explore Nossas Soluções
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
