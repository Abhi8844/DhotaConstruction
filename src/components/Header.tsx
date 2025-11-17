import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-green-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dhota Construction</h1>
              <p className="text-xs text-gray-600">Building Dreams, Creating Realities</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Cost Calculator
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left"
            >
              Cost Calculator
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-left"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
