import React from 'react';
import renderer from 'react-test-renderer';
import {View} from 'react-native';
import {Container} from '../../../../../src/components/molecules';

describe('Container', () => {
  test('renders correctly with children', () => {
    const component = renderer.create(
      <Container>
        <View testID="child-view" />
      </Container>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders children correctly', () => {
    const component = renderer.create(
      <Container>
        <View testID="child-view" />
      </Container>,
    );
    const instance = component.root;
    const childView = instance.findByProps({testID: 'child-view'});

    expect(childView).toBeTruthy();
  });
});
