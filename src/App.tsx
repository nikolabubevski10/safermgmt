import React, { useEffect, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client/react';
import { useHistory } from 'react-router';

import { useAppDispatch, useAppSelector } from './state/hooks';
import { getUserAuth } from './domains/auth/AuthActions';

import { GlobalStyles, Theme } from './assets/styles';
import { client } from './apollo';
import { Page } from './AppStyles';
import LoadingScreen from './domains/page-layouts/loading-screen/LoadingScreen';
import Routes from './Routes';
import './i18n';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const isLoadingUser = useAppSelector(({ auth }) => auth.isLoadingUser);

  useEffect(() => {
    dispatch(getUserAuth());
  }, [history]);

  return (
    <Suspense fallback="loading">
      <ThemeProvider theme={Theme}>
        <ApolloProvider client={client}>
          <GlobalStyles />
          <Page>
            <LoadingScreen isVisible={isLoadingUser} />

            {!isLoadingUser && <Routes />}
          </Page>
        </ApolloProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
