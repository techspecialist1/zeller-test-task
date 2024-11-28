jest.useFakeTimers();
import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {HomePage} from '../../../../../src/components/pages';

describe('HomePage', () => {
  test('renders correctly', () => {
    const navigationMock = {navigate: jest.fn()} as any;

    act(() => {
      const component = renderer.create(
        <HomePage navigation={navigationMock} />,
      );
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
