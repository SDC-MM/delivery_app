import { i18next } from '@assets';
import { MobileProvider } from '@rn_core/core/src';
import { themeInit } from '@themes';
import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface MobileAppProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const MobileApp = React.memo<MobileAppProps>(props => {
  const { children } = props;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MobileProvider
        i18next={i18next}
        theme={themeInit}
        backgroundColor="white">
        {children}
      </MobileProvider>
    </GestureHandlerRootView>
  );
});

MobileApp.displayName = 'MobileApp';
