//  /components/Divider.tsx

// import React from 'react';
// import { View } from 'react-native';
// import useTailwind from '@/utils/tailwind'; // Adjust the import based on your project structure

// const Divider = () => {
//   const tailwind = useTailwind();

//   return <View style={tailwind('w-full h-0.5 bg-primary my-4') as any} />;
// };

// export default Divider;



import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    width: '50%',
    borderTopWidth: 3,
    borderTopColor: 'black', // Replace with any color or use Colors.light.border
    marginVertical: 20, // Equivalent to 'my-4'
    marginHorizontal: "auto",
    marginTop: "auto"
  },
});

export default Divider;
