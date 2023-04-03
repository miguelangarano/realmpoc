/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {realmContext} from './src/hooks/realm-context';
import MyPage from './src/pages';

const {RealmProvider} = realmContext;

function App(): JSX.Element {
  // Create a configuration object

  return (
    <RealmProvider>
      <MyPage />
    </RealmProvider>
  );
}

export default App;
