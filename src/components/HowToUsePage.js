import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, ExternalLink, Search, Tag, Clock, Shield, Zap, Gift, CheckCircle, Info } from 'lucide-react';
import { Button } from './ui/button';

const HowToUsePage = () => {
  const navigate = useNavigate();

  const steps = [
    {
      number: 1,
      title: "Encontre o cupom desejado",
      description: "Navegue pela nossa plataforma e encontre o cupom que mais se adequa às suas necessidades. Use a barra de pesquisa para encontrar empresas específicas.",
      icon: <Search className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 2,
      title: "Copie o código do cupom",
      description: "Clique no botão 'Copiar' para copiar automaticamente o código do cupom para sua área de transferência. O código será destacado em verde quando copiado.",
      icon: <Copy className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      number: 3,
      title: "Acesse o site da empresa",
      description: "Clique em 'Ir para o site' ou 'Usar Cupom' para ser redirecionado diretamente para o site da empresa onde deseja fazer sua compra.",
      icon: <ExternalLink className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: 4,
      title: "Cole o código no carrinho",
      description: "No site da empresa, adicione os produtos desejados ao carrinho e procure pelo campo 'Código de desconto', 'Cupom' ou 'Promoção'. Cole o código copiado.",
      icon: <Tag className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      number: 5,
      title: "Aplique e finalize a compra",
      description: "Clique em 'Aplicar' ou 'Usar cupom' e verifique se o desconto foi aplicado corretamente. Finalize sua compra com o desconto ativo.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-teal-500 to-green-500"
    }
  ];

  const tips = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Verifique a validade",
      description: "Sempre confira a data de validade do cupom antes de usar. Cupons expirados não funcionam."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Leia os termos",
      description: "Verifique os termos e condições do cupom. Alguns têm restrições de valor mínimo ou produtos específicos."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Use rapidamente",
      description: "Cupons populares podem ter limite de uso. Aplique o desconto assim que possível para garantir sua economia."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Combine ofertas",
      description: "Alguns sites permitem combinar cupons com outras promoções. Verifique se é possível maximizar sua economia."
    }
  ];

  const faqs = [
    {
      question: "Os cupons são gratuitos?",
      answer: "Sim! Todos os cupons em nossa plataforma são completamente gratuitos. Não cobramos nenhuma taxa pelo uso dos cupons."
    },
    {
      question: "Por que meu cupom não funcionou?",
      answer: "Verifique se o código foi copiado corretamente, se ainda está dentro da validade, se atende aos termos e condições, e se o valor mínimo da compra foi atingido."
    },
    {
      question: "Posso usar o mesmo cupom várias vezes?",
      answer: "Depende dos termos de cada cupom. Alguns permitem uso único, outros podem ser reutilizados. Verifique sempre as condições específicas."
    },
    {
      question: "Os cupons funcionam em aplicativos móveis?",
      answer: "A maioria dos cupons funciona tanto no site quanto no aplicativo móvel da empresa. Se não funcionar no app, tente acessar pelo navegador do celular."
    },
    {
      question: "Como sei se o desconto foi aplicado?",
      answer: "Após inserir o código, você verá o desconto refletido no resumo do pedido, antes de finalizar a compra. O valor total deve diminuir."
    },
    {
      question: "Posso combinar cupons?",
      answer: "Isso varia por empresa. Algumas permitem combinar cupons, outras não. Verifique os termos ou teste durante o checkout."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <h1 className="text-3xl md:text-5xl font-bold text-center flex-1">
              Como Usar Cupons
            </h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Aprenda a economizar com nossos cupons de desconto de forma simples e eficaz
          </p>
        </div>
      </header>

      <main className="relative container mx-auto py-12 px-4">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Guia Completo para Usar Cupons
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Siga nosso passo a passo simples e comece a economizar hoje mesmo. 
                Nossos cupons são testados e atualizados regularmente para garantir que você tenha a melhor experiência.
              </p>
            </div>
          </div>
        </div>

        {/* Step by Step Guide */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Passo a Passo
          </h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}>
                      <span className="text-2xl font-bold mr-2">{step.number}</span>
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Dicas Importantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-start gap-3">
                  <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Começar a Economizar?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Explore nossa coleção de cupons e comece a economizar hoje mesmo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                size="lg"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-lg px-8 py-4"
              >
                <Search className="w-5 h-5 mr-2" />
                Ver Cupons Disponíveis
              </Button>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-lg px-8 py-4"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar ao Topo
              </Button>
            </div>
          </div>
        </div>
      </main>

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
                <li><button className="hover:text-white transition-colors duration-300 text-left">Como usar cupons</button></li>
                <li><button onClick={() => navigate('/termos-de-uso')} className="hover:text-white transition-colors duration-300 text-left">Termos de uso</button></li>
                <li><button className="hover:text-white transition-colors duration-300 text-left">Política de privacidade</button></li>
                <li><button className="hover:text-white transition-colors duration-300 text-left">Contato</button></li>
              </ul>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="text-xl font-semibold mb-4">Economize Mais</h4>
              <p className="text-gray-300 mb-4">
                Cadastre-se para receber os melhores cupons por email
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:ring-white/50 focus:outline-none"
                />
                <Button variant="gradient" size="sm" className="whitespace-nowrap">
                  Cadastrar
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Cupom Vantagens. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowToUsePage;
