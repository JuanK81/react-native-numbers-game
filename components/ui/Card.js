import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors'

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    //   flex: 1,
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',

    //   shadow for android
    elevation: 4,

    //  shadow for iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    //
  },
});
