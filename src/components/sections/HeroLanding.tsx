
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Star, TrendingUp, Shield, Globe2, Zap } from "lucide-react";

const HeroLanding = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
            🌱 Plataforma #1 em Soluções Ambientais
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transforme Sua
            <span className="text-green-600 block">Gestão Ambiental</span>
            em Vantagem Competitiva
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Hub integrado com 22 soluções especializadas em ESG, compliance, monitoramento 
            de emissões e sustentabilidade. Reduza custos em até <strong>40%</strong> e 
            acelere sua conformidade regulatória em <strong>60%</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              Teste Grátis por 14 Dias
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Ver Demo (3 min)
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>4.9/5 (1,200+ reviews)</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-green-600" />
              <span>ISO 27001 Certificado</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe2 className="w-4 h-4 text-blue-600" />
              <span>50+ países</span>
            </div>
          </div>
        </div>

        {/* Video/Screenshot placeholder */}
        <div className="relative max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
                <Button size="lg" variant="secondary" className="relative z-10">
                  <Play className="w-8 h-8 mr-3" />
                  Assistir Demo Completa
                </Button>
                <div className="absolute bottom-4 left-4 text-white/80 text-sm">
                  Dashboard Principal - EcoHub Solutions
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Floating stats */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "500+", label: "Empresas Ativas" },
                { value: "40%", label: "Redução de Custos" },
                { value: "60%", label: "Mais Rápido" },
                { value: "99.9%", label: "Uptime" }
              ].map((stat, index) => (
                <Card key={index} className="text-center p-4 shadow-lg">
                  <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
