import { View, Text, Image, StyleSheet } from 'react-native';

import Card from '../components/ui/Card';
import Colors from '../constants/colors';
import InstructionsText from '../components/ui/InstructionsText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      
      <Card>
          <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to
        guess number <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
        {/* <InstructionsText>lalalalala</InstructionsText> */}
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </Card>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
  },
});
