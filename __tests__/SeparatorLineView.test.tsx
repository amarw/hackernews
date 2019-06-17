import 'react-native';
import * as React from 'react';
import SeparatorLineView from "../app/components/common/SeparatorLineView";

import renderer from 'react-test-renderer';

test('renders horizontal SeparatorLineView correctly', () => {
    const tree = renderer.create(<SeparatorLineView />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders horizontal SeparatorLineView with custom props correctly', () => {
    const tree = renderer.create(<SeparatorLineView thickness={10} color={'#000000'} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders horizontal SeparatorLineView correctly', () => {
    const tree = renderer.create(<SeparatorLineView vertical />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders vertical SeparatorLineView with custom props correctly', () => {
    const tree = renderer.create(<SeparatorLineView vertical thickness={10} color={'#000000'} />).toJSON();
    expect(tree).toMatchSnapshot();
});