import React, { useEffect, useState } from "react";
import { initGA, logPageView } from './ga';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import image1 from './images/yuool.png';
import image2 from './images/mercado_diferente.png';
import image3 from './images/insider.png';
import image4 from './images/ze.png';
import image5 from './images/zee-now.png';
import image6 from './images/cornershop.png';
import image7 from './images/zee-dog.png';

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
      name: "Cupom Cornershop",
      logo: image6,
      discount: "Frete Grátis e bônus de R$10 na primeira compra",
      couponCode: "",
      link: "https://corner.shop/r/6atd4nffm",
    },
    {
      name: "Cupom Zee Dog",
      logo: image7,
      discount: "15% de desconto para os amigos desavisados que nunca compraram na Zee.Dog",
      couponCode: "",
      link: "http://zeedog.refr.cc/matheusnunespuppe ",
    },
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function showModal(company) {
    setSelectedCompany(company);
  }

  function closeModal() {
    setSelectedCompany(null);
  }

  function handleCopy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="App">
      <header className="bg-primary py-4">
        <div className="container text-center">
          <h1 className="text-white">Bem vindo ao Cupom Vantagens</h1>
          <p className="lead text-white">
            O seu destino para economizar com cupons de desconto
          </p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Pesquisar empresa com cupom"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-success" type="button">
                Pesquisar
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            {filteredCompanies.map((company) => (
              <div key={company.name} className="col-md-4 mb-4">
                <div className="card border-0">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h3 className="card-title text-primary">{company.name}</h3>
                    <p className="card-text">{company.discount}</p>
                    <CopyToClipboard
                      text={company.couponCode}
                      onCopy={handleCopy}
                    >
                      <button
                        className="btn btn-primary"
                        onClick={() => showModal(company)}
                      >
                        Mostrar cupom <FaCopy className="ml-2" />
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {selectedCompany && (
            <div className="coupon-modal">
              <div className="modal-content">
                <h3>{selectedCompany.name}</h3>
                <p>{selectedCompany.discount}</p>
                {selectedCompany.couponCode && (
                   <p>Código Cupom: {selectedCompany.couponCode}</p>
                )}
                {selectedCompany.link && (
                  <p>
                    Link: <a href={selectedCompany.link}>Ir direto para o site!</a>
                  </p>
                )}
                <div className="text-center">
                {copied && (
                    <div className="text-success mt-2">
                      Copiado para a área de transferência!
                    </div>
                  )}
                  <CopyToClipboard
                    text={selectedCompany.couponCode}
                    onCopy={handleCopy}
                  >
                    <button className="btn btn-primary">
                      Copiar código do cupom<FaCopy className="ml-2" />
                    </button>
                  </CopyToClipboard>

                  <button className="btn btn-secondary" onClick={closeModal}>
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
