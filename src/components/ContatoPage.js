import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageSquare, User, FileText, Star } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Button } from './ui/button';
import { Input } from './ui/input';

const ContatoPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["contato@cupomvantagens.com.br", "suporte@cupomvantagens.com.br"],
      description: "Envie suas dúvidas por email"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      details: ["(11) 99999-9999", "(11) 3333-4444"],
      description: "Ligue para falar conosco"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      details: ["São Paulo, SP", "Brasil"],
      description: "Nossa localização"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário de Atendimento",
      details: ["Segunda a Sexta: 9h às 18h", "Sábado: 9h às 14h"],
      description: "Quando estamos disponíveis"
    }
  ];

  const faqItems = [
    {
      question: "Como posso usar os cupons de desconto?",
      answer: "Simples! Encontre o cupom desejado, copie o código e cole no site da empresa durante o checkout. Alguns cupons são aplicados automaticamente ao clicar no link."
    },
    {
      question: "Os cupons têm data de validade?",
      answer: "Sim, todos os cupons têm prazo de validade. Sempre verificamos e atualizamos nossa base para garantir que você tenha acesso apenas a cupons válidos."
    },
    {
      question: "Posso sugerir uma nova empresa para parceria?",
      answer: "Claro! Adoramos receber sugestões. Entre em contato conosco através do formulário ou email e conte-nos sobre a empresa que gostaria de ver em nossa plataforma."
    },
    {
      question: "Como funciona o programa de afiliados?",
      answer: "Trabalhamos com empresas parceiras para oferecer os melhores descontos. Quando você usa nossos cupons, podemos receber uma pequena comissão, mas isso não afeta o valor do seu desconto."
    },
    {
      question: "Posso reportar um cupom que não funcionou?",
      answer: "Sim! Se um cupom não funcionar, por favor nos informe imediatamente. Vamos verificar e atualizar nossa base para evitar que outros usuários tenham o mesmo problema."
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
              Entre em Contato
            </h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco para dúvidas, sugestões ou suporte
          </p>
        </div>
      </header>

      <main className="relative container mx-auto py-12 px-4">
        {/* Contact Information Cards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {info.description}
                  </p>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form and FAQ */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Envie sua Mensagem
              </h2>
              <p className="text-gray-600">
                Preencha o formulário abaixo e entraremos em contato em breve
              </p>
            </div>

            {submitStatus === 'success' && (
              <Alert className="mb-6 bg-green-100 border-green-300 text-green-800 rounded-xl">
                <CheckCircle className="w-5 h-5" />
                <AlertTitle className="font-bold">Mensagem Enviada!</AlertTitle>
                <AlertDescription>
                  Obrigado pelo seu contato. Responderemos em breve!
                </AlertDescription>
              </Alert>
            )}

            {submitStatus === 'error' && (
              <Alert className="mb-6 bg-red-100 border-red-300 text-red-800 rounded-xl">
                <AlertCircle className="w-5 h-5" />
                <AlertTitle className="font-bold">Erro ao Enviar</AlertTitle>
                <AlertDescription>
                  Ocorreu um erro ao enviar sua mensagem. Tente novamente.
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="pl-10 bg-white/50 border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="pl-10 bg-white/50 border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Qual o assunto da sua mensagem?"
                    className="pl-10 bg-white/50 border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Descreva sua dúvida, sugestão ou problema..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                disabled={isSubmitting}
                className="w-full py-4 text-lg font-bold"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Perguntas Frequentes
              </h2>
              <p className="text-gray-600">
                Encontre respostas para as dúvidas mais comuns
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-start">
                    <span className="text-purple-600 mr-2">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-6">
                    <span className="text-blue-600 font-medium mr-2">A:</span>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Não encontrou sua dúvida? Entre em contato conosco!
              </p>
              <Button
                onClick={() => document.querySelector('form').scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para Economizar?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Explore nossos cupons de desconto e comece a economizar hoje mesmo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                size="lg"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-lg px-8 py-4"
              >
                Ver Cupons Disponíveis
              </Button>
              <Button
                onClick={() => navigate('/como-usar-cupons')}
                variant="outline"
                size="lg"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-lg px-8 py-4"
              >
                Como Usar Cupons
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
                <li><button onClick={() => navigate('/sobre-nos')} className="hover:text-white transition-colors duration-300 text-left">Sobre nós</button></li>
                <li><button onClick={() => navigate('/como-usar-cupons')} className="hover:text-white transition-colors duration-300 text-left">Como usar cupons</button></li>
                <li><button onClick={() => navigate('/termos-de-uso')} className="hover:text-white transition-colors duration-300 text-left">Termos de uso</button></li>
                <li><button onClick={() => navigate('/politica-de-privacidade')} className="hover:text-white transition-colors duration-300 text-left">Política de privacidade</button></li>
                <li><button className="hover:text-white transition-colors duration-300 text-left font-semibold">Contato</button></li>
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
              © {new Date().getFullYear()} Cupom Vantagens. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContatoPage;
