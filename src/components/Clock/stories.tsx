import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Clock from './index';

storiesOf('Clock', module)
  .add('default clock', () => (
    <Clock />
  ));
