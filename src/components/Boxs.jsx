import { RigidBody } from "@react-three/rapier";
import models from "./solids";

export default function Boxs() {
  console.log(models[3].key);
  return (
    <RigidBody restitution={0.2} friction={0.8} position={[0, 3, 0]}>
      {models[3]}
    </RigidBody>
  );
}
