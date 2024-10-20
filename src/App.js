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
      <header className="bg-primary text-primary-foreground py-8">
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
            <div key={company.name} className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img src={company.logo} alt={company.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                <p className="text-muted-foreground mb-4">{company.discount}</p>
                <Button
                  onClick={() => setSelectedCompany(company)}
                  className="w-full"
                >
                  Mostrar cupom
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Dialog open={selectedCompany !== null} onOpenChange={() => setSelectedCompany(null)}>
        <DialogContent className="bg-background text-foreground">
          <DialogHeader>
            <DialogTitle>{selectedCompany?.name}</DialogTitle>
            <DialogDescription>{selectedCompany?.discount}</DialogDescription>
          </DialogHeader>
          {selectedCompany?.couponCode && (
            <div className="mt-4">
              <p className="text-lg font-semibold mb-2">Código do Cupom:</p>
              <div className="flex items-center space-x-2">
                <Input value={selectedCompany.couponCode} readOnly className="flex-grow bg-muted text-muted-foreground" />
                <Button onClick={() => handleCopy(selectedCompany.couponCode)}>
                  {copied ? <Check size={16} className="mr-2" /> : <Copy size={16} className="mr-2" />}
                  {copied ? 'Copiado' : 'Copiar'}
                </Button>
              </div>
              {copied && (
                <Alert className="mt-2 bg-muted">
                  <AlertTitle>Sucesso!</AlertTitle>
                  <AlertDescription>Código copiado para a área de transferência.</AlertDescription>
                </Alert>
              )}
            </div>
          )}
          {selectedCompany?.link && (
            <div className="mt-4">
              <p className="text-lg font-semibold mb-2">Link para o site:</p>
              <a
                href={selectedCompany.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Ir para o site
              </a>
            </div>
          )}
          <DialogClose asChild>
            <Button variant="outline" className="mt-4">
              <X size={16} className="mr-2" /> Fechar
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
