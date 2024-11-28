import React from 'react';
import renderer from 'react-test-renderer';
import {TouchableOpacity} from 'react-native';
import {ListView} from '../../../../../src/components/molecules';

describe('ListView', () => {
  const mockOnPress = jest.fn();

  const defaultProps = {
    item: {
      name: 'Pankaj',
      role: 'Developer',
    },
    onPress: mockOnPress,
  };

  test('renders correctly with default props', () => {
    const component = renderer.create(<ListView {...defaultProps} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('calls onPress function when pressed', () => {
    const component = renderer.create(<ListView {...defaultProps} />);
    const instance = component.root;
    const touchableOpacity = instance.findByType(TouchableOpacity);

    touchableOpacity.props.onPress();

    expect(mockOnPress).toHaveBeenCalled();
  });
});
