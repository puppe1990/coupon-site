import React, { useState, useEffect } from 'react';
import { Search, Copy, X, Check } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from './components/ui/dialog';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

import image1 from "./images/yuool.png";
import image2 from "./images/mercado_diferente.png";
import image3 from "./images/insider.png";
import image4 from "./images/ze.png";
import image5 from "./images/zee-now.png";
import image7 from "./images/zee-dog.png";
import image8 from "./images/petlove-plano.png";
import image9 from "./images/recarga-pay.png";
import image10 from "./images/99-viagem.png";
import image11 from "./images/99-motorista.png";
import image12 from "./images/woba.png";
import image13 from "./images/daki.png";
import image14 from "./images/uber.png";
import image15 from "./images/petlove.png";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [copied, setCopied] = useState(false);

  const companies = [
    {
      name: "Cupom Yuool",
      logo: image1,
      discount: "15% de desconto Primeira Compra",
      couponCode: "AFA355FFAE",
      link: "https://www.yuool.com.br/?referrer_token=eRapyM",
    },
    {
      name: "Cupom Mercado Diferente",
      logo: image2,
      discount: "15% de desconto Primeira Compra na primeira cesta",
      couponCode: "",
      link: "https://mercdif.me/matheus-nunes-puppe",
    },
    {
      name: "Cupom Petlove",
      logo: image15,
      discount: "Ganhe R$20 em compras acima de R$100 na primeira compra",
      couponCode: "@MAT417915",
      link: "https://www.petlove.com.br/?coupon=@MAT417915",
    },
    {
      name: "Nike",
      logo: "https://www.lomadee.com/programas/BR/5901/logo_185x140.png",
      discount: "20% OFF em Produtos Downshifter e Revolution na loja Nike",
      couponCode: "CORRIDA20",
      link: "https://oferta.vc/v2/121abf8c0b7"
    },
    {
      name: "Cupom Daki",
      logo: image13,
      discount: "R$50 desconto primeiro pedido",
      couponCode: "MP739028",
      link: "https://soudaki.onelink.me/FYIE/3nrc647q?deep_link_value=referalCode%2FTVA3MzkwMjg%3D",
    },
    {
      name: "Cupom Insider",
      logo: image3,
      discount: "R$30 OFF em compras acima de R$150",
      couponCode: "",
      link: "https://www.insiderstore.com.br/a/rewards/r/rx1mc3Fv",
    },
    {
      name: "Cupom Zé Delivery",
      logo: image4,
      discount: "Cupom de R$10 na primeira compra",
      couponCode: "MAPUPPJYG",
      link: "https://ze.sng.link/Dm9m7/5q7i/r_07d9c4b7a3",
    },
    {
      name: "Cupom Zee.now",
      logo: image5,
      discount: "ganhe R$25 de desconto",
      couponCode: "JJOASW",
      link: "https://zeenow.app.link/FFtaECeYh4",
    },
    {
      name: "Cupom Zee Dog",
      logo: image7,
      discount: "15% de desconto para os amigos desavisados que nunca compraram na Zee.Dog",
      couponCode: "",
      link: "http://zeedog.refr.cc/matheusnunespuppe",
    },
    {
      name: "Cupom Petlove Plano de saúde",
      logo: image8,
      discount: "20% OFF na 1ª mensalidade dos Planos de Saúde",
      couponCode: "",
      link: "https://saude.petlove.com.br/indicacao/laxi9ghpmmofhqew",
    },
    {
      name: "Cupom Recarga Pay",
      logo: image9,
      discount: "Para ganhar R$20. É só baixar o App e fazer sua 1ª compra em Pix com qualquer cartão em até 12x",
      couponCode: "matpup024",
      link: "http://recargapay.com.br/r/matpup024-lO",
    },
    {
      name: "Cupom 99",
      logo: image10,
      discount: "Desconto primeira viagem",
      couponCode: "",
      link: "https://d.99app.com/RUdWne2",
    },
    {
      name: "Cupom Uber",
      logo: image14,
      discount: "Economizar BRL25 nas 5 primeiras viagens.",
      couponCode: "x9aqpdda6pkz",
      link: "https://referrals.uber.com/refer?id=x9aqpdda6pkz",
    },
    {
      name: "Convite 99 motorista",
      logo: image11,
      discount: "Você foi convidado para ser motorista parceiro 99!",
      couponCode: "",
      link: "https://d.99app.com/e1ByJVE",
    },
    {
      name: "Diária Woba",
      logo: image12,
      discount: "Você ganhou reserva grátis em qualquer espaço de coworking",
      couponCode: "",
      link: "https://bnc.lt/woba-referral?rid=r43533",
    },
  ];

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
