import 'react-native';
import * as React from 'react';
import NavigationBarButtonView from '../app/components/common/NavigationBarButtonView';

import renderer from 'react-test-renderer';

test('renders NavigationBarButtonView correctly', () => {
  const tree = renderer.create(<NavigationBarButtonView />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('simulates onPress event correctly when NavigationBarButtonView is pressed', () => {
    const mockFunction = jest.fn();
    const tree = renderer.create(
       <NavigationBarButtonView onPress={mockFunction} />
    );
    expect(mockFunction).not.toHaveBeenCalled();
    tree.root.props.onPress();
    expect(mockFunction).toHaveBeenCalled();
});
