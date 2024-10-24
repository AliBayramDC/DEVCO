import { useState } from 'react';
import Slider from "@mui/material/Slider";
import { Stack, Typography, TextField } from "@mui/material";


const SliderComponent = ({ defaultValue, min, max, step, onChange, value, label, unit, amount }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleSliderChange = (event, newValue) => {
    setInputValue(newValue);
    onChange(event, newValue);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value === '' ? '' : Number(event.target.value);
    setInputValue(newValue);
    onChange(event, newValue);
  };

  const handleBlur = () => {
    if (inputValue < min) {
      setInputValue(min);
      onChange(null, min);
    } else if (inputValue > max) {
      setInputValue(max);
      onChange(null, max);
    }
  };

  return (
    <Stack sx={{ position: 'relative', top: -40 }}>
      <Stack gap={2}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">{unit} {amount}</Typography>
      </Stack>
      <TextField
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        inputProps={{
          step: step,
          min: min,
          max: max,
          style: { height: '32px', padding: '8px' }
        }}
        variant="outlined"
        fullWidth
        sx={{ mt: 1 }}
      />
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        marks
        step={step}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handleSliderChange}
        value={typeof inputValue === 'number' ? inputValue : 0}
      />
      <Stack direction='row' justifyContent={"space-between"}>
        <Typography variant="caption" color="text.secondary">{unit} {min}</Typography>
        <Typography variant="caption" color="text.secondary">{unit} {max}</Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
