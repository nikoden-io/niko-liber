import * as React from 'react';
import { StyledBanner } from './styles';

interface iProps {
  label: string;
  onClickHandler: () => void;
}

export const Banner: React.FC<iProps> = ({ label, onClickHandler }) => {
  return (
    <StyledBanner>
      <div className="banner">
        <h1 className="banner__title">
          <span className="banner__title--one">Poke</span>
          <span className="banner__title--two">Next</span>
        </h1>
        <p className="banner__subtitle">Catch them all... On server-side !</p>
        <button className="banner__btn-cta" onClick={onClickHandler}>
          {label}
        </button>
      </div>
    </StyledBanner>
  );
};
