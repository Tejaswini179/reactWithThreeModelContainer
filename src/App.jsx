import React,{ useState } from 'react'
import Form from './components/form'
import { Canvas} from '@react-three/fiber'
import Scene from './components/Scene'
import './App.css'
 
function App() {

  const [num, setNum] = useState('');
  const [color,setColor] = useState('')
  const [checkBox, setCheckBox] = useState(true)

  const getData = (data) => {
     console.log(data)
      let size = parseFloat(data.width);
      setNum(size)
      setColor(data.color) 
      setCheckBox(data.checkbox)
     
  }

  return (
    <div>
        <Form onSubmit={getData} /> 
          <Canvas style={{ width: '100%', height: '100%' }}>
            <Scene size={num ? [num,num,num] : [1,1,1]} color = {color ? color : "red"} checkBox = {checkBox} />
          </Canvas>
    </div>
  )
}

export default App
