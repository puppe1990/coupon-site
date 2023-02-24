import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const companies = [
    {
      name: "Company 1",
      logo: "https://via.placeholder.com/100x100",
      discount: "20% off",
      couponCode: "CODE123",
      link: "",
    },
    {
      name: "Company 2",
      logo: "https://via.placeholder.com/100x100",
      discount: "10% off",
      couponCode: "CODE456",
      link: "",
    },
    // add more companies here
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
          <h1 className="text-white">Welcome to Coupon Site</h1>
          <p className="lead text-white">
            Find the best deals and discounts from your favorite companies.
          </p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-success" type="button">
                Search
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
                        Show Coupon <FaCopy className="ml-2" />
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
                <p>Coupon code: {selectedCompany.couponCode}</p>
                <p>Link: {selectedCompany.link}</p>
                <div className="text-center">
                {copied && (
                    <div className="text-success mt-2">
                      Copied to clipboard!
                    </div>
                  )}
                  <CopyToClipboard
                    text={selectedCompany.couponCode}
                    onCopy={handleCopy}
                  >
                    <button className="btn btn-primary">
                      Copy Coupon Code <FaCopy className="ml-2" />
                    </button>
                  </CopyToClipboard>

                  <button className="btn btn-secondary" onClick={closeModal}>
                    Close
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
