import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Mail, Phone, MapPin, AlertCircle, CheckCircle, Info, Globe, FileText, Settings } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Button } from './ui/button';

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: 'introduction',
      title: '1. Introdução',
      icon: <Shield className="w-6 h-6" />,
      content: [
        "Esta Política de Privacidade descreve como o Cupom Vantagens coleta, usa, armazena e protege suas informações pessoais quando você utiliza nosso site e serviços.",
        "Nosso compromisso é proteger sua privacidade e garantir que suas informações pessoais sejam tratadas com segurança e transparência.",
        "Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política de privacidade.",
        "Esta política se aplica a todos os usuários do site Cupom Vantagens, incluindo visitantes, usuários registrados e pessoas que interagem com nossos serviços."
      ]
    },
    {
      id: 'information-collection',
      title: '2. Informações que Coletamos',
      icon: <Database className="w-6 h-6" />,
      content: [
        "Informações de identificação pessoal: nome, endereço de email, telefone (quando fornecidos voluntariamente).",
        "Informações de navegação: endereço IP, tipo de navegador, páginas visitadas, tempo de permanência no site.",
        "Informações de uso: cupons visualizados, cliques em links, interações com o site.",
        "Cookies e tecnologias similares: para melhorar sua experiência e personalizar conteúdo.",
        "Informações de dispositivo: tipo de dispositivo, sistema operacional, resolução de tela.",
        "Dados de localização: quando permitido pelo usuário, para oferecer cupons relevantes à sua região."
      ]
    },
    {
      id: 'collection-methods',
      title: '3. Como Coletamos Informações',
      icon: <Eye className="w-6 h-6" />,
      content: [
        "Diretamente de você: quando você se cadastra, preenche formulários ou entra em contato conosco.",
        "Automaticamente: através de cookies, pixels de rastreamento e tecnologias similares.",
        "De terceiros: quando você utiliza serviços de redes sociais ou outros sites integrados.",
        "Através de análises: ferramentas como Google Analytics para entender o comportamento dos usuários.",
        "De parceiros: empresas que oferecem cupons em nossa plataforma podem compartilhar informações agregadas."
      ]
    },
    {
      id: 'use-of-information',
      title: '4. Como Utilizamos suas Informações',
      icon: <Settings className="w-6 h-6" />,
      content: [
        "Fornecer e melhorar nossos serviços de cupons e descontos.",
        "Personalizar sua experiência no site com cupons relevantes para você.",
        "Enviar comunicações sobre novos cupons, ofertas especiais e atualizações do serviço.",
        "Analisar o uso do site para melhorar funcionalidades e desenvolver novos recursos.",
        "Prevenir fraudes e garantir a segurança da plataforma.",
        "Cumprir obrigações legais e regulamentares aplicáveis.",
        "Responder a suas solicitações e fornecer suporte ao cliente."
      ]
    },
    {
      id: 'information-sharing',
      title: '5. Compartilhamento de Informações',
      icon: <Users className="w-6 h-6" />,
      content: [
        "Não vendemos, alugamos ou comercializamos suas informações pessoais para terceiros.",
        "Compartilhamos informações apenas com empresas parceiras que oferecem cupons, de forma agregada e anonimizada.",
        "Podemos compartilhar informações com prestadores de serviços que nos auxiliam na operação do site (hospedagem, análise de dados, email marketing).",
        "Compartilhamos informações quando exigido por lei ou para proteger nossos direitos legais.",
        "Em caso de fusão, aquisição ou venda de ativos, suas informações podem ser transferidas como parte da transação.",
        "Com seu consentimento explícito para outros fins específicos."
      ]
    },
    {
      id: 'data-security',
      title: '6. Segurança dos Dados',
      icon: <Lock className="w-6 h-6" />,
      content: [
        "Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações.",
        "Utilizamos criptografia SSL/TLS para proteger dados em trânsito.",
        "Nossos servidores são protegidos por firewalls e sistemas de monitoramento de segurança.",
        "Acesso às informações pessoais é restrito apenas a funcionários autorizados que precisam dessas informações para realizar suas funções.",
        "Realizamos auditorias regulares de segurança e atualizamos nossos sistemas conforme necessário.",
        "Em caso de violação de dados, notificaremos os usuários afetados conforme exigido por lei."
      ]
    },
    {
      id: 'cookies',
      title: '7. Cookies e Tecnologias Similares',
      icon: <Globe className="w-6 h-6" />,
      content: [
        "Utilizamos cookies para melhorar sua experiência de navegação e personalizar conteúdo.",
        "Cookies essenciais: necessários para o funcionamento básico do site.",
        "Cookies de análise: para entender como os usuários interagem com nosso site.",
        "Cookies de marketing: para mostrar cupons relevantes e medir a eficácia de campanhas.",
        "Você pode controlar o uso de cookies através das configurações do seu navegador.",
        "A desativação de cookies pode afetar algumas funcionalidades do site."
      ]
    },
    {
      id: 'user-rights',
      title: '8. Seus Direitos',
      icon: <FileText className="w-6 h-6" />,
      content: [
        "Acesso: você pode solicitar uma cópia das informações pessoais que temos sobre você.",
        "Retificação: você pode solicitar a correção de informações incorretas ou incompletas.",
        "Exclusão: você pode solicitar a exclusão de suas informações pessoais em determinadas circunstâncias.",
        "Portabilidade: você pode solicitar a transferência de seus dados para outro serviço.",
        "Oposição: você pode se opor ao processamento de suas informações para fins específicos.",
        "Restrição: você pode solicitar a limitação do processamento de suas informações.",
        "Para exercer seus direitos, entre em contato conosco através dos canais disponíveis."
      ]
    },
    {
      id: 'data-retention',
      title: '9. Retenção de Dados',
      icon: <Database className="w-6 h-6" />,
      content: [
        "Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política.",
        "Dados de conta: mantidos enquanto sua conta estiver ativa e por um período adicional conforme exigido por lei.",
        "Dados de navegação: geralmente mantidos por até 24 meses, a menos que você solicite a exclusão.",
        "Dados de marketing: mantidos até que você opte por não receber comunicações ou solicite a exclusão.",
        "Dados legais: podem ser mantidos por períodos mais longos conforme exigido por obrigações legais.",
        "Após o período de retenção, excluímos ou anonimizamos suas informações pessoais."
      ]
    },
    {
      id: 'third-party-services',
      title: '10. Serviços de Terceiros',
      icon: <Globe className="w-6 h-6" />,
      content: [
        "Nosso site pode conter links para sites de terceiros (empresas parceiras que oferecem cupons).",
        "Não somos responsáveis pelas práticas de privacidade desses sites externos.",
        "Recomendamos que você leia as políticas de privacidade de cada site que visitar.",
        "Utilizamos serviços de terceiros como Google Analytics, que têm suas próprias políticas de privacidade.",
        "Alguns cupons podem redirecionar para sites externos onde diferentes políticas de privacidade se aplicam.",
        "Sempre verifique a URL e a segurança do site antes de inserir informações pessoais."
      ]
    },
    {
      id: 'children-privacy',
      title: '11. Privacidade de Menores',
      icon: <Users className="w-6 h-6" />,
      content: [
        "Nossos serviços não são direcionados a menores de 18 anos.",
        "Não coletamos intencionalmente informações pessoais de menores de 18 anos.",
        "Se descobrirmos que coletamos informações de um menor sem consentimento parental, excluiremos essas informações.",
        "Se você é pai ou responsável e acredita que seu filho nos forneceu informações pessoais, entre em contato conosco.",
        "Recomendamos que pais e responsáveis monitorem o uso da internet por seus filhos.",
        "Menores devem sempre obter permissão dos pais antes de fornecer informações pessoais online."
      ]
    },
    {
      id: 'policy-updates',
      title: '12. Atualizações desta Política',
      icon: <AlertCircle className="w-6 h-6" />,
      content: [
        "Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas.",
        "Notificaremos sobre mudanças significativas através de aviso no site ou por email.",
        "A data da última atualização será sempre indicada no início desta política.",
        "Recomendamos que você revise esta política regularmente para se manter informado.",
        "O uso continuado de nossos serviços após mudanças constitui aceitação da política atualizada.",
        "Se você não concordar com as mudanças, pode descontinuar o uso de nossos serviços."
      ]
    },
    {
      id: 'contact',
      title: '13. Contato',
      icon: <Mail className="w-6 h-6" />,
      content: [
        "Para dúvidas sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato conosco:",
        "Email: privacidade@cupomvantagens.com.br",
        "Telefone: (11) 99999-9999",
        "Horário de atendimento: Segunda a sexta, das 9h às 18h",
        "Responderemos sua solicitação em até 30 dias úteis.",
        "Para questões urgentes relacionadas à segurança de dados, utilize nosso canal prioritário."
      ]
    }
  ];

  const importantNotes = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Proteção Total",
      description: "Sua privacidade é nossa prioridade. Implementamos as melhores práticas de segurança para proteger seus dados."
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Transparência",
      description: "Somos transparentes sobre como coletamos, usamos e protegemos suas informações pessoais."
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Controle",
      description: "Você tem controle total sobre suas informações e pode exercer seus direitos a qualquer momento."
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
              Política de Privacidade
            </h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Como protegemos e utilizamos suas informações pessoais
          </p>
        </div>
      </header>

      <main className="relative container mx-auto py-12 px-4">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Política de Privacidade
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                No Cupom Vantagens, levamos a privacidade dos nossos usuários muito a sério. Esta política explica 
                como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza nossos serviços.
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

        {/* Privacy Policy Sections */}
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
              Dúvidas sobre Privacidade?
            </h2>
            <p className="text-xl text-blue-100 mb-8 text-center">
              Entre em contato conosco para esclarecer qualquer dúvida sobre esta política
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-blue-100">privacidade@cupomvantagens.com.br</p>
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
              Sua Privacidade é Importante
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Agora que você conhece nossa política de privacidade, explore nossos cupons com confiança
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
                onClick={() => navigate('/termos-de-uso')}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                Termos de Uso
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
                <li><button className="hover:text-white transition-colors duration-300 text-left">Política de privacidade</button></li>
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

export default PrivacyPolicyPage;
