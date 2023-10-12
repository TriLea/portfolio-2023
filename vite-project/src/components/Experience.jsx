import { OrbitControls } from "@react-three/drei";
import Ferro from "./Ferro";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Ferro />
      <ambientLight intensity={1} />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
