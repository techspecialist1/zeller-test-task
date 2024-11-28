import React from 'react';
import renderer from 'react-test-renderer';
import {TextInput} from 'react-native';
import {SearchInput} from '../../../../../src/components/molecules';

describe('SearchInput', () => {
  const mockOnChangeText = jest.fn();

  const defaultProps = {
    placeholder: 'Enter text...',
    onChangeText: mockOnChangeText,
  };

  test('renders correctly with default props', () => {
    const component = renderer.create(<SearchInput {...defaultProps} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('calls onChangeText function when text changes', () => {
    const component = renderer.create(<SearchInput {...defaultProps} />);
    const instance = component.root;
    const input = instance.findByType(TextInput);

    input.props.onChangeText('New text');

    expect(mockOnChangeText).toHaveBeenCalledWith('New text');
  });

  test('renders placeholder correctly', () => {
    const component = renderer.create(<SearchInput {...defaultProps} />);
    const instance = component.root;
    const input = instance.findByType(TextInput);

    expect(input.props.placeholder).toBe('Enter text...');
  });
});
