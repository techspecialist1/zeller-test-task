jest.useFakeTimers();
import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from '../../../../src/navigation/homeStackNavigator';

describe('HomeStackNavigator', () => {
  test('renders HomeStackNavigator correctly', () => {
    act(() => {
      const component = renderer.create(
        <NavigationContainer>
          <HomeStackNavigator />
        </NavigationContainer>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
