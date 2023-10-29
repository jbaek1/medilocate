import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';
const InputSymptoms = ({ navigation }) => {
  const [symptoms, setSymptoms] = useState('');

  const handleNext = () => {
    // Call the API and navigate to the next page
    navigation.navigate('MedicationRecommendations', {
      feeling,
      symptoms
    })
    ;
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>What symptoms do you have, tell us how you're feeling today?</Text>
      <TextInput 
        value={symptoms}
        placeholder="E.g., I have a cough, fever..."
        style={{ borderWidth: 1, padding: 8, marginBottom: 16 }}
      />
      <Button title="Next" onPress={handleSubmit} />
    </View>
  );
}

export default InputSymptoms;