import React, { useEffect, useState } from "react";
import { initGA, logPageView } from "./ga";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import image1 from "./images/biz.png";
import image2 from "./images/inter.png";
import image3 from "./images/iouu.png";
import company_logo from "./images/unity_logo.jpeg";

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
      name: "Empréstimo Empresarial Biz Capital",
      logo: image1,
      discount: "Empréstimo empresarial",
      couponCode: "",
      link: "https://parceiros.bizcapital.com.br/parceiro_6406",
    },
    {
      name: "Empréstimo Consignado Inter",
      logo: image2,
      discount: "Empréstimo Consignado Inter",
      couponCode: "7066430B",
      link: "https://www.bancointer.com.br/pra-voce/emprestimos/emprestimo-consignado-publico/?codigoIndiqueGanhe=7066430B",
    },
    {
      name: "Empréstimo Empresarial iouu",
      logo: image3,
      discount: "Empréstimo Empresarial iouu",
      couponCode: "",
      link: "https://unitycredito.iouu.com.br/",
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
          <img src={company_logo} alt="company logo" />
          <h1 className="text-white">Bem vindo a Unity Crédito</h1>
          <p className="lead text-white">
            O auxílio financeiro que você precisa
          </p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Pesquisar empréstimo"
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
                  <>
                    <p>Código Cupom: {selectedCompany.couponCode}</p>
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
                          Copiar código do cupom
                          <FaCopy className="ml-2" />
                        </button>
                      </CopyToClipboard>
                    </div>
                  </>
                )}
                {selectedCompany.link && (
                  <p>
                    Link:{" "}
                    <a
                      href={selectedCompany.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ir direto para o site!
                    </a>
                  </p>
                )}
                <div className="text-center">
                  <button className="btn btn-secondary" onClick={closeModal}>
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <footer className="bg-dark py-4">
        <div className="container text-center">
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <a
                href="https://www.unitycredito.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site Principal
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://blog.unitycredito.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/company/unity-credito"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.instagram.com/unity_credito/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="list-inline-item">
              <a href="mailto:alessandro.martins@unitycredito.com.br">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
