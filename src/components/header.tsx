import React from "react";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast px-6 flex min-h-11 items-center text-white">
        <a href="/" className="h-11 flex items-center px-6 -ml-6">
          🍏 <span className="sr-only">Back to homepage</span>
        </a>
      </header>
      <div className="bg-backgroundContrast px-6 min-h-11 flex items-center text-white">
        Apple TV+
      </div>
    </>
  );
};

export default Header;
