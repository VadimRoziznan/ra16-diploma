import React from 'react';
import NavMenu from '../NavMenu/MainMenu';

function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <NavMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;