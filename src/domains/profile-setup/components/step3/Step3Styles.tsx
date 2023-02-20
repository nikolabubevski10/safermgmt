import styled from 'styled-components';
import { MainActionButton } from '../../shared/SharedStyles';

export const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 35px;
    margin-top: 20px;
    text-align: center;
  }

  ${MainActionButton} {
    margin-top: 40px;
  }
`;
