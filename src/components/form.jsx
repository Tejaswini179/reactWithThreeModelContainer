import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Container, Grid } from '@mui/material';

const Form = (props) => {
   const [values, setValues] = useState({ width: '', color: '', checkbox:'' });
   const [isChecked, setIsChecked] = useState(true);

   const handleCheckboxChange = (e) => {
      // console.log(isChecked)
   
      e.preventDefault();
      setIsChecked(!isChecked); // Toggle the checked status
      setValues(prevValues => ({
         ...prevValues,
         ['checkbox']: isChecked
     }));
    };


   const handleChange = (e) => {
      const { name, value } = e.target;
      setValues(prevValues => ({
          ...prevValues,
          [name]: value
      }));
  };
  


   const handleSubmit = (e) => {
      e.preventDefault();
   //  console.log("vvv",values)
      props.onSubmit(values);
   };

   return (
      <Container sx={{ display: 'flex' }} >
      
         <form  onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'right', marginBottom:'200px' }}>
         <input type='text' name='width' placeholder='Enter size' value={values.width} onChange={handleChange}/>
         <input type='text' name='color' placeholder='Enter Color' value={values.color} onChange={handleChange}/>
         <FormControlLabel
         value="start"
         control={<Checkbox />}
         label="Remove WireFrame"
         labelPlacement="start" checked={isChecked} 
         onChange={handleCheckboxChange} 
       />
            <Button variant="contained" type='submit'>Submit</Button>
         </form>
      </Container>
   );
};

export default Form;
