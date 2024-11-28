import React from 'react';
import renderer from 'react-test-renderer';
import {Container} from '../../../../../src/components/molecules';
import {Text} from 'react-native';
import {DetailPage} from '../../../../../src/components/pages';

describe('DetailPage', () => {
  test('renders correctly', () => {
    const component = renderer.create(<DetailPage />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders a Container component', () => {
    const component = renderer.create(<DetailPage />);
    const instance = component.root;
    const container = instance.findByType(Container);

    expect(container).toBeTruthy();
  });

  test('renders Text with "Details"', () => {
    const component = renderer.create(<DetailPage />);
    const instance = component.root;
    const text = instance.findByType(Text);

    expect(text.props.children).toBe('Details');
  });
});
