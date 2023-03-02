import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const Pokemon = styled.div`
  h2 {
    font-size: 4rem;
    color: white;
  }

  p {
    color: white;
  }
`;

const HomePage: React.FC = () => {
  // States
  const [dumData, setDumData] = React.useState(null);

  // Handlers
  const onClickHandler = () => {
    console.log('click');
  };

  const handler = async () => {
    try {
      const { data } = await axios.get('https://bakoden.nikoden.io/pokemon/5');
      setDumData(data);
      console.log(data);
    } catch (e) {
      console.log(`/pokemons error: ${e}`);
    }
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
        {dumData && (
          <Pokemon>
            <h2>{dumData.pokemon.name}</h2>
            {dumData.pokemon.abilities.map((ability) => (
              <p key={ability.ability.name}>{ability.ability.name}</p>
            ))}
          </Pokemon>
        )}
        <button onClick={handler}>Click</button>
      </div>
    </>
  );
};

export default HomePage;
