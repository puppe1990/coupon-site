import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Target, Heart, Award, TrendingUp, Shield, Clock, Star, CheckCircle, Globe, Zap } from 'lucide-react';
import { Button } from './ui/button';

const SobreNosPage = () => {
  const navigate = useNavigate();

  const teamValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Nossa Missão",
      description: "Democratizar o acesso a descontos e cupons de qualidade, ajudando brasileiros a economizar em suas compras do dia a dia.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Nossa Visão",
      description: "Ser a plataforma de cupons mais confiável e completa do Brasil, reconhecida pela qualidade e variedade de ofertas.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Nossos Valores",
      description: "Transparência, confiabilidade, inovação e compromisso com a satisfação dos nossos usuários em cada interação.",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Usuários Ativos", icon: <Users className="w-6 h-6" /> },
    { number: "500+", label: "Cupons Válidos", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "100+", label: "Empresas Parceiras", icon: <Globe className="w-6 h-6" /> },
    { number: "R$ 2M+", label: "Economizados", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cupons Verificados",
      description: "Todos os nossos cupons passam por verificação rigorosa para garantir que funcionem perfeitamente."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Atualizações Diárias",
      description: "Nossa equipe trabalha diariamente para trazer os melhores cupons e ofertas do mercado."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Interface Intuitiva",
      description: "Plataforma fácil de usar, com busca rápida e navegação simples para encontrar o que você precisa."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Ofertas Exclusivas",
      description: "Parcerias especiais que nos permitem oferecer descontos únicos e exclusivos para nossos usuários."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Fundação",
      description: "Cupom Vantagens foi criado com o objetivo de ajudar brasileiros a economizar em suas compras online."
    },
    {
      year: "2021",
      title: "Primeiras Parcerias",
      description: "Estabelecemos nossas primeiras parcerias com empresas de e-commerce e começamos a crescer rapidamente."
    },
    {
      year: "2022",
      title: "Expansão",
      description: "Ampliamos nossa base de usuários e diversificamos as categorias de cupons disponíveis."
    },
    {
      year: "2023",
      title: "Inovação",
      description: "Lançamos novas funcionalidades e melhoramos significativamente a experiência do usuário."
    },
    {
      year: "2024",
      title: "Presente",
      description: "Continuamos crescendo e evoluindo, sempre focados em trazer o melhor para nossos usuários."
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
              Sobre Nós
            </h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Conheça a história, missão e valores da Cupom Vantagens
          </p>
        </div>
      </header>

      <main className="relative container mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Quem Somos
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              A <span className="font-bold text-purple-600">Cupom Vantagens</span> nasceu da paixão por ajudar pessoas a economizar em suas compras. 
              Somos uma equipe dedicada que acredita que todo mundo merece acesso a descontos de qualidade, 
              independentemente do seu orçamento.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Desde 2020, trabalhamos incansavelmente para criar a melhor plataforma de cupons do Brasil, 
              sempre priorizando a confiabilidade, transparência e satisfação dos nossos usuários.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center text-white`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Números que Impressionam
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Por que Escolher a Cupom Vantagens?
            </h2>
            <p className="text-xl text-gray-600">
              Oferecemos a melhor experiência em cupons de desconto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossa História
            </h2>
            <p className="text-xl text-gray-600">
              Uma jornada de crescimento e evolução constante
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                    {item.year}
                  </div>
                  <div className="ml-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Nossa Equipe
              </h2>
              <p className="text-xl text-gray-600">
                Profissionais apaixonados por economia e tecnologia
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  M
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Equipe de Desenvolvimento</h3>
                <p className="text-gray-600">Especialistas em tecnologia que trabalham para criar a melhor experiência possível</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  P
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Equipe de Parcerias</h3>
                <p className="text-gray-600">Profissionais que estabelecem e mantêm relacionamentos com as melhores empresas</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  S
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Equipe de Suporte</h3>
                <p className="text-gray-600">Especialistas em atendimento que estão sempre prontos para ajudar nossos usuários</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Faça Parte da Nossa Comunidade
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Junte-se a milhares de brasileiros que já economizam com nossos cupons
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                size="lg"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-lg px-8 py-4"
              >
                Explorar Cupons
              </Button>
              <Button
                onClick={() => navigate('/contato')}
                variant="outline"
                size="lg"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-lg px-8 py-4"
              >
                Entre em Contato
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
                <li><button onClick={() => navigate('/como-usar-cupons')} className="hover:text-white transition-colors duration-300 text-left">Como usar cupons</button></li>
                <li><button onClick={() => navigate('/termos-de-uso')} className="hover:text-white transition-colors duration-300 text-left">Termos de uso</button></li>
                <li><button onClick={() => navigate('/politica-de-privacidade')} className="hover:text-white transition-colors duration-300 text-left">Política de privacidade</button></li>
                <li><button onClick={() => navigate('/contato')} className="hover:text-white transition-colors duration-300 text-left">Contato</button></li>
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
                  className="px-4 py-2 bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:ring-white/50 rounded-lg"
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

export default SobreNosPage;
