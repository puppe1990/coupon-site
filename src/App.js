import React, { useState } from 'react';
import { Search, Copy, X, Check } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from './components/ui/dialog';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import companiesData from './companies.json';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [copied, setCopied] = useState(false);

  const companies = companiesData.map(company => ({
    ...company,
    logo: company.logo.startsWith('http') ? company.logo : require(`./images/${company.logo}`)
  }));

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-[hsl(var(--primary))] text-primary-foreground py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Cupom Vantagens</h1>
          <p className="text-xl mb-6">Seu destino para economizar com cupons de desconto</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <div key={company.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={company.logo} alt={company.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                <p className="text-gray-600 mb-4">{company.discount}</p>
                <Button
                  onClick={() => setSelectedCompany(company)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Mostrar cupom
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Dialog open={selectedCompany !== null} onOpenChange={() => setSelectedCompany(null)}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>{selectedCompany?.name}</DialogTitle>
            <DialogDescription>{selectedCompany?.discount}</DialogDescription>
          </DialogHeader>
          {selectedCompany?.couponCode && (
            <div className="mt-4">
              <p className="text-lg font-semibold mb-2">Código do Cupom:</p>
              <div className="flex items-center space-x-2">
                <Input value={selectedCompany.couponCode} readOnly className="flex-grow bg-gray-100" />
                <Button 
                  onClick={() => handleCopy(selectedCompany.couponCode)} 
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  {copied ? <Check size={16} className="mr-2" /> : <Copy size={16} className="mr-2" />}
                  {copied ? 'Copiado' : 'Copiar'}
                </Button>
              </div>
              {copied && (
                <Alert className="mt-2 bg-green-100 text-green-800">
                  <AlertTitle>Sucesso!</AlertTitle>
                  <AlertDescription>Código copiado para a área de transferência.</AlertDescription>
                </Alert>
              )}
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
