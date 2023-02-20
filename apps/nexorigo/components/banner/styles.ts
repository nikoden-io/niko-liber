import styled from 'styled-components';

import { theme } from '../../../styles/theme';

export const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    align-self: center;

    &__title {
      letter-spacing: -0.025em;
      font-size: 3rem; /* 48px*/
      font-weight: 800;
      color: ${theme.colors.primary};

      &--one {
        color: ${theme.colors.secondary};
      }

      &--two {
        color: ${theme.colors.tertiary};
      }
    }

    &__subtitle {
      font-size: 0.8rem;
      font-weight: 700;
      color: ${theme.colors.lightGray};
    }

    &__btn-cta {
    }
  }
`;
