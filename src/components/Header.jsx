import React from "react";

function Header() {
  return (
    <header>
      <h1>Les Argonautes </h1>
      <div>
        <h3>Liens github</h3>
        <a
          target="_blank"
          href="https://github.com/lucas240/interview-dev-frontend"
        >
          Frontend
        </a>
        <br />
        <a
          target="_blank"
          href="https://github.com/lucas240/interview-dev-backend"
        >
          Backend
        </a>
      </div>
    </header>
  );
}

export default Header;
