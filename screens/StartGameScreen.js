import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = ({ onPickNumber }) => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'The number has to be bwtween 1 and 99.', [
        { text: 'Ok', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    resetInputHandler();
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    //   flex: 1,
    marginTop: 100,
    padding: 16,
    backgroundColor: '#3b021f',
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
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
