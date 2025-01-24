import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      determineBMICategory(bmiValue);
    }
  };

  const determineBMICategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBmiCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBmiCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBmiCategory('Overweight');
    } else {
      setBmiCategory('Obese');
    }
  };

  return (
    <div className="bmi-container">
      <h1>BMI Calculator</h1>
      <input 
        type="number" 
        placeholder="Weight (kg)" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)}
      />
      <input 
        type="number" 
        placeholder="Height (cm)" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <h2>Your BMI is: {bmi} - {bmiCategory}</h2>}
    </div>
  );
}

export default App;
