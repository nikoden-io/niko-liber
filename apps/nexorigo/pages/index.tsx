import * as React from 'react';
import styled from 'styled-components';
import { Banner } from '../components/banner';
import { FOURSQUARE_API_TEST } from '../.env/.secrets';

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

  const handler = async () => {
    const result = await fetch(
      'https://api.foursquare.com/v3/places/search?query=nivelles&ll=50.53%2C4.19&radius=100000&categories=17000',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: FOURSQUARE_API_TEST,
        },
      }
    );
    const data = await result.json();
    console.log(data);
  };

  return (
    <>
      <MainTitle>
        <div className="container">
          <h1>Pokedex</h1>
        </div>
      </MainTitle>
      <div>
        <Banner label="Browse PokeNext" {...{ onClickHandler }} />
      </div>
      <div>
        <button onClick={handler}>Click</button>
      </div>
    </>
  );
};

export default HomePage;
