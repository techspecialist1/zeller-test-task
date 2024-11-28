import React from 'react';
import renderer from 'react-test-renderer';
import {Text, TouchableOpacity} from 'react-native';
import {RadioButton} from '../../../../../src/components/molecules';

describe('RadioButton', () => {
  const mockOnChange = jest.fn();

  const defaultProps = {
    label: 'Option 1',
    onChange: mockOnChange,
    activeButton: 'Option 1',
    styles: {
      activeButton: {},
      inActiveButton: {},
      radio: {},
    },
  };

  test('renders correctly with default props', () => {
    const component = renderer.create(<RadioButton {...defaultProps} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('calls onChange function when pressed', () => {
    const component = renderer.create(<RadioButton {...defaultProps} />);
    const instance = component.root;

    const touchableOpacity = instance.findByType(TouchableOpacity);
    touchableOpacity.props.onPress();

    expect(mockOnChange).toHaveBeenCalledWith('Option 1');
  });

  test('renders label correctly', () => {
    const component = renderer.create(<RadioButton {...defaultProps} />);
    const instance = component.root;

    const label = instance.findByType(Text);

    expect(label.props.children).toBe('Option 1');
  });
});
