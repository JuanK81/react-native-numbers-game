import { View, Text , StyleSheet } from 'react-native';

import Card from '../components/ui/Card';
import InstructionsText from '../components/ui/InstructionsText';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = () => {
    return (
      <Card>
        <InstructionsText>lalalalala</InstructionsText>
        <PrimaryButton onPress={console.log('holi')}>Reset</PrimaryButton>
      </Card>
    );
};

export default GameOverScreen;