import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Boxs() {
  return (
    <RigidBody restitution={0.2} friction={0.8} position={[0, 3, 0]}>
      <Box args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color="red" />
      </Box>
    </RigidBody>
  );
}
