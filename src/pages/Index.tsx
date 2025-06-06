
import Navigation from "@/components/Navigation";
import HeroLanding from "@/components/sections/HeroLanding";
import SolutionsShowcase from "@/components/sections/SolutionsShowcase";
import FrameworkSection from "@/components/sections/FrameworkSection";
import PricingSection from "@/components/sections/PricingSection";
import ResultsSection from "@/components/sections/ResultsSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import { solutionsData } from "@/data/solutions";
import { 
  BarChart3, 
  Shield, 
  Droplets, 
  Globe, 
  TreePine, 
  Leaf 
} from "lucide-react";

const iconMap = {
  BarChart3,
  Shield, 
  Droplets,
  Globe,
  TreePine,
  Leaf
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroLanding />
      <SolutionsShowcase />
      <FrameworkSection />
      <PricingSection />
      <ResultsSection />
      
      {/* All Solutions Section */}
      <div className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Catálogo Completo de Soluções</h2>
          <p className="text-xl text-muted-foreground">
            Explore todas as 22 soluções especializadas organizadas por categoria
          </p>
        </div>
        
        {solutionsData.map((category, index) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap];
          return (
            <CategorySection
              key={index}
              title={category.category}
              description={category.description}
              icon={IconComponent}
              solutions={category.solutions}
              color={category.color}
            />
          );
        })}
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
