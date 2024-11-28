import React from 'react';
import renderer from 'react-test-renderer';
import {ErrorBox} from '../../../../../src/components/molecules';
import {Text} from 'react-native';

describe('ErrorBox', () => {
  test('renders correctly with given text', () => {
    const text = 'An error occurred';
    const component = renderer.create(<ErrorBox text={text} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders the correct text content', () => {
    const text = 'Another error message';
    const component = renderer.create(<ErrorBox text={text} />);
    const instance = component.root;
    const textElement = instance.findByType(Text);

    expect(textElement.props.children).toBe(text);
  });
});
