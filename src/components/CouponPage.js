import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Check, ExternalLink, Calendar, Tag, Info, Globe } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import companiesData from '../companies.json';

const CouponPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const foundCompany = companiesData.find(comp => comp.id === id);
    if (foundCompany) {
      setCompany({
        ...foundCompany,
        logo: foundCompany.logo.startsWith('http') ? foundCompany.logo : require(`../images/${foundCompany.logo}`)
      });
    }
  }, [id]);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleUseCoupon = () => {
    setShowModal(true);
  };

  if (!company) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Cupom não encontrado</h1>
          <Button onClick={() => navigate('/')} variant="gradient">
            Voltar para a página inicial
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold text-center flex-1">
              {company.name}
            </h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="relative container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Company Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-8 border border-white/20">
            <div className="relative">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="w-full h-64 md:h-80 object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {company.category || 'Desconto'}
              </div>
            </div>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {company.discount}
                </h2>
                {company.description && (
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    {company.description}
                  </p>
                )}
              </div>

              {/* Coupon Code Section */}
              {company.couponCode && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 mb-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-green-800 mb-2 flex items-center justify-center">
                      <Tag className="w-6 h-6 mr-2" />
                      Código do Cupom
                    </h3>
                    <p className="text-green-600">Copie o código abaixo e use no site</p>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <Input 
                      value={company.couponCode} 
                      readOnly 
                      className="flex-grow bg-white border-2 border-green-300 text-center text-2xl font-bold text-green-800 py-4 rounded-xl" 
                    />
                    <Button 
                      onClick={() => handleCopy(company.couponCode)} 
                      variant="success"
                      size="lg"
                      className="px-8 py-4 text-lg font-bold"
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

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={handleUseCoupon}
                  variant="gradient"
                  size="lg"
                  className="flex-1 py-4 text-xl font-bold"
                >
                  <ExternalLink className="w-6 h-6 mr-2" />
                  Usar Cupom
                </Button>
                {company.link && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="flex-1 py-4 text-xl font-bold border-2 border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    <a
                      href={company.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Globe className="w-6 h-6 mr-2" />
                      Visitar Site
                    </a>
                  </Button>
                )}
              </div>

              {/* Company Information */}
              {company.companyInfo && (
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Info className="w-6 h-6 mr-2 text-blue-600" />
                    Sobre a Empresa
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {company.companyInfo.description}
                  </p>
                  {company.companyInfo.website && (
                    <div className="flex items-center text-blue-600">
                      <Globe className="w-4 h-4 mr-2" />
                      <a 
                        href={company.companyInfo.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {company.companyInfo.website}
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Terms and Validity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {company.validUntil && (
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Válido até
                    </h4>
                    <p className="text-blue-600">{company.validUntil}</p>
                  </div>
                )}
                
                {company.terms && (
                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                      <Info className="w-4 h-4 mr-2" />
                      Termos e Condições
                    </h4>
                    <p className="text-orange-600 text-sm">{company.terms}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal for Coupon Usage */}
      <Dialog open={showModal} onOpenChange={() => setShowModal(false)}>
        <DialogContent className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl max-w-2xl">
          <DialogHeader className="text-center pb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <DialogTitle className="text-3xl font-bold text-gray-800 mb-2">
              {company.name}
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-600 leading-relaxed">
              {company.discount}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {company.couponCode && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Código do Cupom</h3>
                  <p className="text-green-600">Copie o código abaixo e use no site</p>
                </div>
                
                <div className="flex items-center space-x-3 mb-4">
                  <Input 
                    value={company.couponCode} 
                    readOnly 
                    className="flex-grow bg-white border-2 border-green-300 text-center text-2xl font-bold text-green-800 py-4 rounded-xl" 
                  />
                  <Button 
                    onClick={() => handleCopy(company.couponCode)} 
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
            
            {company.link && (
              <div className="text-center">
                <Button
                  asChild
                  variant="gradient"
                  size="lg"
                  className="w-full py-4 text-xl font-bold"
                >
                  <a
                    href={company.link}
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
              Fechar
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CouponPage;
