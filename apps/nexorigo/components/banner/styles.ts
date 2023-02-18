import styled from 'styled-components';

import { theme } from '../../../styles/theme';

export const StyledBanner = styled.div`
  .banner {
    width: 100%;
    background-color: ${theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
