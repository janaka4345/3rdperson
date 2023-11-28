import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import Player from "./Player";

export default function PlayerController() {
  return (
    <group>
      <RigidBody colliders={false} scale={[0.5, 0.5, 0.5]} position={[1, 3, 0]}>
        <CapsuleCollider args={[0.4, 0.6]} position={[0, 1, 0]} />
        <Player />
      </RigidBody>
    </group>
  );
}
