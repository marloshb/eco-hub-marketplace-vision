
import HeroSection from "@/components/HeroSection";
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
      <HeroSection />
      
      <div className="container mx-auto px-4 py-16">
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
