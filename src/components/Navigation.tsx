
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Soluções", href: "#solutions" },
    { label: "Framework", href: "#framework" },
    { label: "Preços", href: "#pricing" },
    { label: "Resultados", href: "#results" },
    { label: "Contato", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold">EcoHub Solutions</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-green-600 hover:bg-green-700">
              Começar Grátis
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
              Começar Grátis
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
