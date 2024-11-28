import React from 'react';
import renderer from 'react-test-renderer';
import {ActivityIndicator} from '../../../../../src/components/molecules';

describe('ActivityIndicator', () => {
  test('when isVisible prop is true', () => {
    const component = renderer.create(<ActivityIndicator isVisible={true} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('when isVisible prop is false', () => {
    const component = renderer.create(<ActivityIndicator isVisible={false} />);
    const tree = component.toJSON();

    expect(tree).toBeNull();
  });
});
