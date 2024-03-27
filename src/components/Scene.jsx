import { useRef } from 'react'
import {OrbitControls, useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'
import Cube from "./CubeComponent"

const Scene = ({size,color,checkBox}) => {
    const directionalLighRef = useRef()
  
    useHelper(directionalLighRef, DirectionalLightHelper, 0.0) 
  
    return (
      <>
        <directionalLight position={[0,0,2]}   ref={directionalLighRef} /> 
        <ambientLight intensity={0.1}/>
           <Cube position={[-2,0,0]} color={color} size={size} checkBox={checkBox}/>
          <OrbitControls enableZoom={true}  />
      </>
    )
  }

  export default Scene