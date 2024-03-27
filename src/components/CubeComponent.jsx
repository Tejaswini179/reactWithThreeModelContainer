import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Check } from '@mui/icons-material';

const Cube = ({ position, color, size , checkBox }) => {
  // console.log("cccc",checkBox)
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 0.2;
    ref.current.position.z = Math.sin(state.clock.elapsedTime);
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={hovered ? 'green' : color} wireframe={checkBox} />
    </mesh>
  );
};

export default Cube;
