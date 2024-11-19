import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <img
          alt="Profile Icon"
          className="rounded-full mr-4"
          height="50"
          src="https://avatars.githubusercontent.com/u/61665012?v=4"
          width="50"
        />
        <h1 className="text-2xl font-black">Neutrovertido's Portfolio</h1>
      </div>
      <GitHubButton />
    </header>
  );
};

const GitHubButton = () => {
  const handleButtonClick = () => {
    window.open("https://github.com/Neutrovertido", "_blank");
  };

  return (
    <button
      className="bg-green-600 text-neutral-200 py-2 px-4 rounded flex items-center"
      onClick={handleButtonClick} // Add onClick handler here
    >
      <i className="fab fa-github mr-2"></i> GitHub Projects <i className="ml-2 fas fa-arrow-right"></i>
    </button>
  );
};

export default Header;
