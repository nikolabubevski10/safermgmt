import { IBusRoute } from '../../../..//types';
import React from 'react';
import {
  Container,
  CardContainer,
  Card,
  Heading,
  IcoCheck,
  IcoExclamation,
  IcoFlag,
  CardTop,
  Address,
} from './RouteDetailCardStyles';

interface IRouteDetailCardProps {
  data: IBusRoute;
}

const RouteDetailCard: React.FC<IRouteDetailCardProps> = ({
  data,
}: IRouteDetailCardProps) => {
  const { route, emergencyLocation } = data;

  return (
    <Container>
      <CardContainer>
        <Card>
          <CardTop>
            <IcoCheck />
            <Heading>Route Start</Heading>
          </CardTop>
          <Address>{route.startLocationAddress}</Address>
        </Card>
        <Card>
          <CardTop>
            <IcoFlag />
            <Heading>Route End</Heading>
          </CardTop>
          <Address>{route.endLocationAddress}</Address>
        </Card>
      </CardContainer>
      {!!emergencyLocation && (
        <CardContainer>
          <Card>
            <CardTop>
              <IcoExclamation />
              <Heading>Emergency</Heading>
            </CardTop>
            <Address>{emergencyLocation.locationAddress}</Address>
          </Card>
        </CardContainer>
      )}
    </Container>
  );
};

export default RouteDetailCard;
