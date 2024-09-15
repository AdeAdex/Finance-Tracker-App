//  /components/Divider.tsx

import React from 'react';
import { View } from 'react-native';
import useTailwind from '@/utils/tailwind'; // Adjust the import based on your project structure

const Divider = () => {
  const tailwind = useTailwind();

  return <View style={tailwind('w-full border-t border-red-500 my-4') as any} />;
};

export default Divider;

