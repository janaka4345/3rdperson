import { Cylinder } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";

export default function Stage() {
  return (
    <RigidBody type="fixed" colliders={false} restitution={0.2} friction={2}>
      <CylinderCollider args={[0.5, 5]} />
      <Cylinder
        //   args={[0.5, 5]}
        scale={[5, 1, 5]}
      >
        <meshStandardMaterial color={"yellowgreen"} />
      </Cylinder>
    </RigidBody>
  );
}
