import React from 'react';
import { WebView } from 'react-native-webview';
import { View, ViewProps } from 'react-native';
import NavigationBarView from 'app/components/common/NavigationBarView';
import translate from 'app/utilities/Translation';

interface OwnProps extends ViewProps {
  navigation: any;
}
const InAppWebview: React.FC<OwnProps> = ({ navigation }: OwnProps) => (
  <View style={{ flex: 1 }}>
    <NavigationBarView
      showBackButton
      title={translate('hacker_news_title')}
      onBackButtonPress={() => navigation.goBack()}
    />
    <WebView
      source={{ uri: navigation.getParam('url', '') }}
      style={{ marginTop: 20 }}
    />
  </View>
);
export default InAppWebview;
