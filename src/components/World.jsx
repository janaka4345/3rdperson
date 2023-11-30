import { OrbitControls, Plane, MeshReflectorMaterial } from "@react-three/drei";
import Lights from "./Lights";
import { Physics, RigidBody } from "@react-three/rapier";
import Stage from "./Stage";
import { Building } from "./Building";
import PlayerController from "./PlayerController";
import { useGameStore } from "../store";
import { useEffect } from "react";
import Models from "./Models";

export default function World() {
  // console.log("renderd");
  const start = useGameStore((state) => state.startGame);
  const { level, currentModel, currentStage } = useGameStore((state) => ({
    level: state.level,
    currentModel: state.currentModel,
    currentStage: state.currentStage,
  }));
  useEffect(() => {
    // start();
  }, []);
  return (
    <>
      <OrbitControls makeDefault />
      <axesHelper args={[2]} />
      <color attach="background" args={["#ffffff"]} />
      <fog args={["#ffffff", 15, 40]} attach="fog" />
      <Physics>
        {/* {console.log(level)} */}
        <mesh position={[0, -0.5, 0]} rotation={[-Math.PI * 0.5, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[400, 400]}
            // resolution={[512, 512]}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.85}
            color="gray"
            metalness={0.5}
            roughness={0.4}
            mirror={0.5}
          />
        </mesh>
        <Lights />
        <Stage />
        <Building
          position={[0, 0, -15]}
          scale={[5, 5, 5]}
          rotation-y={Math.PI}
        />

        <PlayerController />
        {/* last model of the level is the answer
        so rendering level without answer */}
        {level && <Models level={level} currentStage={currentStage} />}
      </Physics>
    </>
  );
}
