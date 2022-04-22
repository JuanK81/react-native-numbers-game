import { View, Text } from 'react-native';

const GameScreen = () => {
  return (
    <View>
      <Text>Oponent's guess</Text>
      guess
      <View>
          <Text>Higher or lower?</Text>
          +
          -
      </View>
      <View>
          Log Rounds
      </View>
    </View>
  );
};

export default GameScreen;
