import { Text, StyleSheet } from 'react-native';


import Colors from '../../constants/colors';

const InstructionsText = ({ children }) => {
  return (
  <Text style={styles.instructionsText}>{children}</Text>
  );
};

export default InstructionsText;

const styles = StyleSheet.create({
  instructionsText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
