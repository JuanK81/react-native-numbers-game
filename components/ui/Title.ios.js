import { Text, StyleSheet, Platform } from 'react-native';

const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ios: 0, android: 2}) ,
    padding: 12,
    marginTop: 15,
    maxWidth: '80%',
    width: 300,
  },
});