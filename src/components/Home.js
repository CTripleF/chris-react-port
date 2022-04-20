import React from 'react';
import About from './About';
import Content from './Content';

function Home({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about me":
        return <About />;
      default:
        return <About />;
    }
  };

  return (
    <section className="">
      <Content>{renderPage()}</Content>
    </section>
  );
}

export default Home;