import { OrbitControls } from "@react-three/drei";
import Orb from "./Orb.jsx";

export const Experience = () => {

  return (
    <>
      <OrbitControls />
      <Orb />
      <ambientLight intensity={1} />
      <mesh>
        <icosahedronGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
