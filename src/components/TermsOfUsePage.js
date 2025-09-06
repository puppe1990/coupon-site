import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Shield, AlertCircle, CheckCircle, Info, Users, Lock, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const TermsOfUsePage = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: 'acceptance',
      title: '1. Aceitação dos Termos',
      icon: <CheckCircle className="w-6 h-6" />,
      content: [
        "Ao acessar e utilizar o site Cupom Vantagens, você concorda em cumprir e estar vinculado aos termos e condições de uso aqui estabelecidos.",
        "Se você não concordar com qualquer parte destes termos, não deve utilizar nosso serviço.",
        "Estes termos se aplicam a todos os visitantes, usuários e outras pessoas que acessam ou utilizam o serviço."
      ]
    },
    {
      id: 'service-description',
      title: '2. Descrição do Serviço',
      icon: <FileText className="w-6 h-6" />,
      content: [
        "O Cupom Vantagens é uma plataforma que disponibiliza cupons de desconto e códigos promocionais de diversas empresas parceiras.",
        "Nosso serviço é gratuito e tem como objetivo ajudar os usuários a economizar em suas compras.",
        "Não somos responsáveis pela validade, disponibilidade ou funcionamento dos cupons oferecidos pelas empresas parceiras.",
        "As ofertas e descontos são de responsabilidade exclusiva das empresas que os oferecem."
      ]
    },
    {
      id: 'user-responsibilities',
      title: '3. Responsabilidades do Usuário',
      icon: <Users className="w-6 h-6" />,
      content: [
        "O usuário é responsável por verificar a validade e condições de uso de cada cupom antes de utilizá-lo.",
        "É de responsabilidade do usuário ler e aceitar os termos e condições específicos de cada empresa parceira.",
        "O usuário deve utilizar os cupons de forma ética e de acordo com as regras estabelecidas pelas empresas.",
        "É proibido o uso de sistemas automatizados para acessar ou coletar informações do site.",
        "O usuário não deve tentar interferir no funcionamento normal do site ou acessar áreas restritas."
      ]
    },
    {
      id: 'limitations',
      title: '4. Limitações de Responsabilidade',
      icon: <AlertCircle className="w-6 h-6" />,
      content: [
        "O Cupom Vantagens não garante que os cupons estarão sempre disponíveis ou funcionando corretamente.",
        "Não nos responsabilizamos por perdas ou danos decorrentes do uso ou impossibilidade de uso dos cupons.",
        "Não garantimos a precisão, completude ou atualidade das informações sobre cupons e ofertas.",
        "Não somos responsáveis por mudanças nos termos e condições das empresas parceiras.",
        "O uso do serviço é por conta e risco do usuário."
      ]
    },
    {
      id: 'intellectual-property',
      title: '5. Propriedade Intelectual',
      icon: <Lock className="w-6 h-6" />,
      content: [
        "Todo o conteúdo do site, incluindo textos, imagens, logotipos, design e código, é propriedade do Cupom Vantagens ou de seus licenciadores.",
        "É proibida a reprodução, distribuição ou uso comercial do conteúdo sem autorização prévia por escrito.",
        "Os logotipos e marcas das empresas parceiras são propriedade de seus respectivos donos.",
        "O usuário pode visualizar e baixar o conteúdo apenas para uso pessoal e não comercial."
      ]
    },
    {
      id: 'privacy',
      title: '6. Privacidade e Proteção de Dados',
      icon: <Shield className="w-6 h-6" />,
      content: [
        "Respeitamos sua privacidade e nos comprometemos a proteger seus dados pessoais.",
        "Coletamos apenas informações necessárias para o funcionamento do serviço.",
        "Não compartilhamos seus dados pessoais com terceiros sem seu consentimento, exceto quando exigido por lei.",
        "Utilizamos cookies e tecnologias similares para melhorar sua experiência no site.",
        "Você pode optar por não receber comunicações promocionais a qualquer momento."
      ]
    },
    {
      id: 'modifications',
      title: '7. Modificações dos Termos',
      icon: <Globe className="w-6 h-6" />,
      content: [
        "Reservamo-nos o direito de modificar estes termos a qualquer momento, sem aviso prévio.",
        "As alterações entrarão em vigor imediatamente após sua publicação no site.",
        "É responsabilidade do usuário verificar periodicamente os termos atualizados.",
        "O uso continuado do serviço após as modificações constitui aceitação dos novos termos."
      ]
    },
    {
      id: 'termination',
      title: '8. Suspensão e Encerramento',
      icon: <AlertCircle className="w-6 h-6" />,
      content: [
        "Podemos suspender ou encerrar o acesso de usuários que violarem estes termos.",
        "Reservamo-nos o direito de suspender ou encerrar o serviço a qualquer momento.",
        "Em caso de encerramento, não seremos responsáveis por perdas ou danos decorrentes.",
        "As disposições que por sua natureza devem sobreviver ao encerramento continuarão em vigor."
      ]
    },
    {
      id: 'governing-law',
      title: '9. Lei Aplicável',
      icon: <FileText className="w-6 h-6" />,
      content: [
        "Estes termos são regidos pelas leis brasileiras.",
        "Qualquer disputa será resolvida nos tribunais competentes do Brasil.",
        "Se alguma disposição destes termos for considerada inválida, as demais continuarão em vigor.",
        "A falha em fazer valer qualquer direito não constitui renúncia a esse direito."
      ]
    },
    {
      id: 'contact',
      title: '10. Contato',
      icon: <Mail className="w-6 h-6" />,
      content: [
        "Para dúvidas sobre estes termos, entre em contato conosco através dos canais disponíveis no site.",
        "Nosso endereço de email: contato@cupomvantagens.com.br",
        "Horário de atendimento: Segunda a sexta, das 9h às 18h.",
        "Responderemos sua mensagem em até 48 horas úteis."
      ]
    }
  ];

  const importantNotes = [
    {
      icon: <Info className="w-5 h-5" />,
      title: "Importante",
      description: "Estes termos podem ser atualizados periodicamente. Recomendamos que você os revise regularmente."
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Aceitação",
      description: "Ao continuar usando nosso serviço, você confirma que leu e aceita estes termos de uso."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Segurança",
      description: "Sempre verifique a autenticidade dos cupons e sites antes de inserir informações pessoais."
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
              Termos de Uso
            </h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Conheça nossos termos e condições de uso da plataforma
          </p>
        </div>
      </header>

      <main className="relative container mx-auto py-12 px-4">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Termos e Condições de Uso
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Bem-vindo ao Cupom Vantagens! Estes termos descrevem as regras e regulamentos para o uso de nossa plataforma. 
                Leia atentamente antes de utilizar nossos serviços.
              </p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {importantNotes.map((note, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                    {note.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {note.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {note.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terms Sections */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div 
                key={section.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      {section.title}
                    </h3>
                    <div className="space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-600 leading-relaxed text-lg">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Dúvidas ou Sugestões?
            </h2>
            <p className="text-xl text-blue-100 mb-8 text-center">
              Entre em contato conosco para esclarecer qualquer dúvida sobre estes termos
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-blue-100">contato@cupomvantagens.com.br</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                <p className="text-blue-100">(11) 99999-9999</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Horário</h3>
                <p className="text-blue-100">Seg-Sex: 9h-18h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Pronto para Começar a Economizar?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Agora que você conhece nossos termos, explore nossa coleção de cupons
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/')}
                variant="gradient"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Ver Cupons Disponíveis
              </Button>
              <Button
                onClick={() => navigate('/como-usar-cupons')}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-purple-300 text-purple-700 hover:bg-purple-50"
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
                <li><button onClick={() => navigate('/como-usar-cupons')} className="hover:text-white transition-colors duration-300 text-left">Como usar cupons</button></li>
                <li><button className="hover:text-white transition-colors duration-300 text-left">Termos de uso</button></li>
                <li><button onClick={() => navigate('/politica-de-privacidade')} className="hover:text-white transition-colors duration-300 text-left">Política de privacidade</button></li>
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

export default TermsOfUsePage;
