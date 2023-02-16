import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    {
      name: "Company 1",
      logo: "https://via.placeholder.com/100x100",
      discount: "20% off",
      couponCode: "CODE123"
    },
    {
      name: "Company 2",
      logo: "https://via.placeholder.com/100x100",
      discount: "10% off",
      couponCode: "CODE456"
    },
    // add more companies here
  ];

  function showModal(company) {
    setSelectedCompany(company);
  }

  function closeModal() {
    setSelectedCompany(null);
  }

  return (
    <div className="App">
      <header className="bg-primary py-4">
        <div className="container text-center">
          <h1 className="text-white">Welcome to Coupon Site</h1>
          <p className="lead text-white">
            Find the best deals and discounts from your favorite companies.
          </p>
        </div>
      </header>
      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            {companies.map((company) => (
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
                    <button
                      className="btn btn-orange"
                      onClick={() => showModal(company)}
                    >
                      Show Coupon
                    </button>
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
                <button className="btn btn-orange" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
