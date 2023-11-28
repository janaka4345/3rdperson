/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Player(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./model.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.64}>
        <primitive object={nodes.LeftFootCtrl} />
        <primitive object={nodes.RightFootCtrl} />
        <primitive object={nodes.HipsCtrl} />
        <skinnedMesh
          geometry={nodes.characterMedium.geometry}
          material={materials["skin.001"]}
          skeleton={nodes.characterMedium.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./model.gltf");
