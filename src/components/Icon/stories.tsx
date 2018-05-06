import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import Icon from './index';
import checkmarkIcon from 'src/icons/checkmark.svg';

storiesOf('Icon', module)
  .add('checkmark', () => (
    <Icon href={checkmarkIcon} />
  ));
