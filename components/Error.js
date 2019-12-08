import React from 'react';
import { MonoText } from './StyledText';

import colors from '../constants/Colors';

export function Error({error, msg}) {
  if (!error) return null;
  return (
    <MonoText style={{ color: colors.error, paddingTop: 10 }}>{msg}</MonoText>
  )
};

