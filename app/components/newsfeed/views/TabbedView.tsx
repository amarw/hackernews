import * as React from 'react';
import { Dimensions, ViewProps, View, Text } from 'react-native';
import {
  Route,
  SceneRendererProps,
  TabView,
  TabBar,
  NavigationState
} from 'react-native-tab-view';
import Color from 'app/utilities/Color';
import styles from 'app/components/newsfeed/views/TabbedView.style';

export interface TabbedViewProps extends ViewProps {
  routes: Route[];
  sceneProvider: (
    key: string,
    jumpTo: (key: string) => void
  ) => React.ReactNode;
}

interface State {
  index: number;
  routes: Route[];
}

class TabbedView extends React.Component<TabbedViewProps, State> {
  constructor(props: TabbedViewProps) {
    super(props);
    this.state = {
      index: 0,
      routes: props.routes
    }; // copy props into state
  }

  onIndexChange = (index: number) => {
    this.setState({
      index
    });
  };

  renderScene = ({
    route,
    jumpTo
  }: SceneRendererProps & { route: Route }): React.ReactNode => {
    const { sceneProvider } = this.props;
    // delegate scene creation to consumer of this component
    return sceneProvider(route.key, jumpTo);
  };

  renderTab = ({ route }: { route: Route }) => (
    <View style={styles.tabLabel}>
      <Text style={styles.tabLabelText}>{route.title}</Text>
    </View>
  );

  renderTabbar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<Route>;
    }
  ) => (
    <TabBar
      {...props}
      style={styles.tabbar}
      scrollEnabled
      indicatorStyle={{ backgroundColor: Color.orange }}
      renderLabel={this.renderTab}
    />
  );

  render() {
    const { index, routes } = this.state;
    return (
      <TabView
        {...this.props}
        navigationState={{ index, routes }}
        renderScene={this.renderScene}
        onIndexChange={this.onIndexChange}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={this.renderTabbar}
        lazy
      />
    );
  }
}

export default TabbedView;
