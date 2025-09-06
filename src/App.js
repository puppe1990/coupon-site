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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-foreground">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <header className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16 shadow-2xl">
        <div className="container mx-auto text-center px-4">
          <div className="animate-pulse-slow">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Cupom Vantagens
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-blue-100 font-light">
              Seu destino para economizar com cupons de desconto
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Pesquisar empresa com cupom"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-4 pl-12 pr-6 text-foreground bg-white/95 backdrop-blur-sm rounded-full focus:outline-none focus:ring-4 focus:ring-white/50 shadow-xl border-0 text-lg placeholder:text-gray-500"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {filteredCompanies.length} Cupons Disponíveis
          </h2>
          <p className="text-xl text-gray-600">
            Economize com os melhores descontos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCompanies.map((company, index) => (
            <div 
              key={company.name} 
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden card-hover border border-white/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Desconto
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  {company.name}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                  {company.discount}
                </p>
                
                <Button
                  onClick={() => setSelectedCompany(company)}
                  variant="gradient"
                  size="lg"
                  className="w-full font-semibold text-lg py-3"
                >
                  Ver Cupom
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCompanies.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
              Nenhum cupom encontrado
            </h3>
            <p className="text-gray-500">
              Tente pesquisar com outros termos
            </p>
          </div>
        )}
      </main>

      <Dialog open={selectedCompany !== null} onOpenChange={() => setSelectedCompany(null)}>
        <DialogContent className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl max-w-2xl">
          <DialogHeader className="text-center pb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
              <img 
                src={selectedCompany?.logo} 
                alt={selectedCompany?.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <DialogTitle className="text-3xl font-bold text-gray-800 mb-2">
              {selectedCompany?.name}
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-600 leading-relaxed">
              {selectedCompany?.discount}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {selectedCompany?.couponCode && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Código do Cupom</h3>
                  <p className="text-green-600">Copie o código abaixo e use no site</p>
                </div>
                
                <div className="flex items-center space-x-3 mb-4">
                  <Input 
                    value={selectedCompany.couponCode} 
                    readOnly 
                    className="flex-grow bg-white border-2 border-green-300 text-center text-2xl font-bold text-green-800 py-4 rounded-xl" 
                  />
                  <Button 
                    onClick={() => handleCopy(selectedCompany.couponCode)} 
                    variant="success"
                    size="lg"
                    className="px-6 py-4 text-lg font-bold"
                  >
                    {copied ? <Check size={20} className="mr-2" /> : <Copy size={20} className="mr-2" />}
                    {copied ? 'Copiado!' : 'Copiar'}
                  </Button>
                </div>
                
                {copied && (
                  <Alert className="bg-green-100 border-green-300 text-green-800 rounded-xl">
                    <AlertTitle className="font-bold">Sucesso!</AlertTitle>
                    <AlertDescription>Código copiado para a área de transferência.</AlertDescription>
                  </Alert>
                )}
              </div>
            )}
            
            {selectedCompany?.link && (
              <div className="text-center">
                <Button
                  asChild
                  variant="gradient"
                  size="lg"
                  className="w-full py-4 text-xl font-bold"
                >
                  <a
                    href={selectedCompany.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    🛒 Ir para o site
                  </a>
                </Button>
              </div>
            )}
          </div>
          
          <DialogClose asChild>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full mt-6 border-2 border-gray-300 text-gray-700 font-semibold py-3 hover:bg-gray-50"
            >
              <X size={20} className="mr-2" /> Fechar
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Cupom Vantagens
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Seu destino para economizar com os melhores cupons de desconto. 
                Encontre ofertas exclusivas e economize em suas compras favoritas.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Como usar cupons</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Termos de uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Política de privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contato</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="text-xl font-semibold mb-4">Economize Mais</h4>
              <p className="text-gray-300 mb-4">
                Cadastre-se para receber os melhores cupons por email
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  type="email" 
                  placeholder="Seu email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-white/50"
                />
                <Button variant="gradient" size="sm" className="whitespace-nowrap">
                  Cadastrar
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Cupom Vantagens. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
