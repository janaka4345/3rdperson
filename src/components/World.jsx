import { OrbitControls, Plane, MeshReflectorMaterial } from "@react-three/drei";
import Lights from "./Lights";
import { Physics } from "@react-three/rapier";
import Stage from "./Stage";
import { Building } from "./Building";
import Boxs from "./Boxs";
import PlayerController from "./PlayerController";

export default function World() {
  return (
    <>
      <OrbitControls makeDefault />
      <axesHelper args={[2]} />
      <color attach="background" args={["#ffffff"]} />
      <fog args={["#ffffff", 15, 40]} attach="fog" />
      <Physics debug>
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
        <Boxs />
        <PlayerController />
      </Physics>
    </>
  );
}
