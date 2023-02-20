import styled from 'styled-components';
import { MainActionButton } from '../../shared/SharedStyles';

export const Container = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 20px;
  }

  p {
    margin-top: 15px;
  }

  ${MainActionButton} {
    margin-top: 50px;
  }
`;
