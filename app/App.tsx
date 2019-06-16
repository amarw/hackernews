import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, View } from 'react-native';
import Router from 'app/router/Router';
import { createAppContainer } from 'react-navigation';
import { configureStore } from 'app/store';

const AppContainer = createAppContainer(Router);

interface AppState {
  store: any;
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      store: null
    };
  }

  componentDidMount() {
    const store = configureStore();
    this.setState({ store });
  }

  render() {
    const { store = null } = this.state;
    if (!store) {
      return <View />;
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </SafeAreaView>
    );
  }
}

export default App;
