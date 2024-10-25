import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from './components/ui/dialog';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import companiesData from './companies.json';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageOrientation, setImageOrientation] = useState('horizontal');

  useEffect(() => {
    const formatCompanies = () => {
      setIsLoading(true);
      try {
        const formattedCompanies = Object.values(companiesData[0]).map(company => ({
          id: company.creative_id,
          name: company.campaign_name,
          logo: company.image_url,
          link: company.shortened,
          status: 'Aprovado', // Assuming all companies in the JSON are approved
          category: 'Aposta / Cassino', // Assuming all companies are in this category
          title: company.title,
          description: company.description,
        }));
        setCompanies(formattedCompanies);
      } catch (error) {
        console.error('Error formatting companies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    formatCompanies();
  }, []);

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setImageOrientation(naturalWidth >= naturalHeight ? 'horizontal' : 'vertical');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-[hsl(var(--primary))] text-primary-foreground py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">BET Cupom Vantagens</h1>
          <p className="text-xl mb-6">Seu destino para as melhores ofertas de apostas e cassinos online</p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Pesquisar empresa com cupom"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-10 pr-4 text-foreground bg-background rounded-full focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <div key={company.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={company.logo} alt={company.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                  <p className="text-gray-600 mb-4">{company.title}</p>
                  <Button
                    onClick={() => setSelectedCompany(company)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Ver detalhes
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Dialog open={selectedCompany !== null} onOpenChange={() => setSelectedCompany(null)}>
        <DialogContent className="bg-white max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedCompany?.name}</DialogTitle>
            <DialogDescription>{selectedCompany?.title}</DialogDescription>
          </DialogHeader>
          <div className={`mt-4 ${imageOrientation === 'vertical' ? 'max-h-[70vh] overflow-y-auto' : ''}`}>
            <img 
              src={selectedCompany?.logo} 
              alt={selectedCompany?.name} 
              className={`w-full h-auto object-contain ${imageOrientation === 'vertical' ? 'max-h-[70vh]' : ''}`}
              onLoad={handleImageLoad}
            />
          </div>
          {selectedCompany?.description && (
            <div className="mt-4">
              <p className="text-lg font-semibold mb-2">Descrição:</p>
              <p>{selectedCompany.description}</p>
            </div>
          )}
          {selectedCompany?.link && (
            <div className="mt-4">
              <p className="text-lg font-semibold mb-2">Link para o site:</p>
              <Button
                asChild
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <a
                  href={selectedCompany.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir para o site
                </a>
              </Button>
            </div>
          )}
          <DialogClose asChild>
            <Button 
              variant="outline" 
              className="mt-4 border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              <X size={16} className="mr-2" /> Fechar
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
