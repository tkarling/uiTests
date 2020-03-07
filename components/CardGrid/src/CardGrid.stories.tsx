import React from 'react';

import CardGrid from '.';
import notes from '../README.md';

export default {
  title: 'Components|CardGrid',
  parameters: { notes }
};

const CARDS = ['moi', 'hei', 'joo', 'lii', 'laa', 'lee', 'loo'];

export const BasicUsage = () => <CardGrid cards={CARDS} />;
