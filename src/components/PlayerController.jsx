import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import Player from "./Player";

export default function PlayerController() {
  const JUMP_FORCE = 0.5;
  const MOVEMENT_SPEED = 0.1;
  const MAX_VEL = 3;

  const playerRef = useRef();
  const characterRef = useRef();
  const isOnFloor = useRef(true);

  const jumpPressed = useKeyboardControls((state) => state.jump);
  const forwardPressed = useKeyboardControls((state) => state.forward);
  const backPressed = useKeyboardControls((state) => state.back);
  const leftPressed = useKeyboardControls((state) => state.left);
  const rightPressed = useKeyboardControls((state) => state.right);
  useFrame((state, delta) => {
    const linVel = playerRef.current.linvel();
    const impulse = { x: 0, y: 0, z: 0 };
    let changeRotation = false;
    if (jumpPressed && isOnFloor.current) {
      impulse.y += JUMP_FORCE;
      changeRotation = true;
      isOnFloor.current = false;
    }
    if (forwardPressed && linVel.z > -MAX_VEL) {
      impulse.z -= MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (backPressed && linVel.z < MAX_VEL) {
      impulse.z += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (leftPressed && linVel.x > -MAX_VEL) {
      impulse.x -= MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (rightPressed && linVel.x < MAX_VEL) {
      impulse.x += MOVEMENT_SPEED;
      changeRotation = true;
    }

    playerRef.current.applyImpulse(impulse, true);
    if (changeRotation) {
      const angle = Math.atan2(linVel.x, linVel.z);
      characterRef.current.rotation.y = angle;
    }
  });

  return (
    <group>
      <RigidBody
        enabledRotations={[false, false, false]}
        ref={playerRef}
        colliders={false}
        scale={[0.5, 0.5, 0.5]}
        position={[1, 3, 0]}
        restitution={0.2}
        friction={0.7}
        onCollisionEnter={() => {
          isOnFloor.current = true;
        }} 
      >
        <CapsuleCollider args={[0.4, 0.6]} position={[0, 1, 0]} />
        <group ref={characterRef}>
          <Player />
        </group>
      </RigidBody>
    </group>
  );
}
