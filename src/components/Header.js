import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="        https://bosta.co/contact-shipping-sales/"
              >
                Eng
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://business.bosta.co/signin">
                تسجيل الدخول
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="https://business.bosta.co/signin">
Drop              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="        https://bosta.co/contact-shipping-sales/"
              >
                كلم المبيعات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://bosta.co/pricing/">
                الأسعار
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://bosta.co/"
              >
                الرئيسية
              </a>
            </li>
          </ul>
        </div>

        <a className="navbar-brand" href="https://bosta.co/">
          بوسطة
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
