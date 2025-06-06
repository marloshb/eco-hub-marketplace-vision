
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Leaf, 
  Shield, 
  Globe, 
  Droplets, 
  TreePine,
  ArrowRight,
  Star
} from "lucide-react";

interface Solution {
  id: string;
  name: string;
  description: string;
  features: string[];
  category: string;
  pricing: string;
  rating: number;
}

interface CategoryProps {
  title: string;
  description: string;
  icon: any;
  solutions: Solution[];
  color: string;
}

const CategorySection = ({ title, description, icon: Icon, solutions, color }: CategoryProps) => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className={`p-3 rounded-lg ${color} mr-4`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution) => (
          <Card key={solution.id} className="hover:shadow-lg transition-shadow border-l-4" style={{borderLeftColor: color.replace('bg-', '').replace('-600', '')}}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{solution.name}</CardTitle>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < solution.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">({solution.rating}.0)</span>
                  </div>
                </div>
                <Badge variant="secondary">{solution.pricing}</Badge>
              </div>
              <CardDescription className="text-sm leading-relaxed">
                {solution.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Principais Recursos:</h4>
                  <div className="flex flex-wrap gap-1">
                    {solution.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Saiba Mais <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
