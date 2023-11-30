import { RigidBody } from "@react-three/rapier";

export default function Models(props) {
  return props.level[props.currentStage]?.map((obj, i) =>
    i < props.level[props.currentStage].length - 1 ? (
      <group
        key={i}
        // rotation-y={
        //   (Math.PI * 2 * i) / (props.level[props.currentStage].length - 1)
        // }
        // position-x={1}
        // position-z={-1}
      >
        <RigidBody
          colliders="hull"
          restitution={0.2}
          friction={0.8}
          position={[(Math.random() - 0.5) * 5, 2, (Math.random() - 0.5) * 5]}
        >
          {obj}
        </RigidBody>
      </group>
    ) : null,
  );
}
