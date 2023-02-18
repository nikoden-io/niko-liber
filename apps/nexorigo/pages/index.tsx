import * as React from 'react';
import styled from 'styled-components';
import { Banner } from '../components/banner';

const MainTitle = styled.div`
  font-family: inherit;
  line-height: inherit;
  margin: 0;

  display: flex;
  justify-content: center;

  .container {
    width: 100%;
    background-color: rgba(152, 46, 126, 0.5);
  }

  h1 {
    font-size: 4rem;
    text-align: center;
  }
`;

const HomePage: React.FC = () => {
  const onClickHandler = () => {
    console.log('click');
  };

  return (
    <>
      <MainTitle>
        <div className="container">
          <h1>Pokedex</h1>
        </div>
      </MainTitle>
      <Banner label="Browse PokeNext" {...{ onClickHandler }} />
    </>
  );
};

export default HomePage;
