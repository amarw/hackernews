import 'react-native';
import * as React from 'react';
import NavigationBarView from '../app/components/common/NavigationBarView';

import renderer from 'react-test-renderer';

test('renders NavigationBarView correctly', () => {
    const tree = renderer.create(<NavigationBarView />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders NavigationBarView with title correctly', () => {
    const tree = renderer.create(<NavigationBarView title={'ABC'} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders NavigationBarView with title & back button correctly', () => {
    const tree = renderer.create(<NavigationBarView showBackButton title={'ABC'} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('simulates onBackButtonPress event correctly when NavigationBarView back button is pressed', () => {
    const mockFunction = jest.fn();
    const tree = renderer.create(
        <NavigationBarView onBackButtonPress={mockFunction} />
    );
    expect(mockFunction).not.toHaveBeenCalled();
    tree.root.props.onBackButtonPress();
    expect(mockFunction).toHaveBeenCalled();
});
