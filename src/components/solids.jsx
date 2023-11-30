import {
  Box,
  Sphere,
  Circle,
  Cone,
  Cylinder,
  Tube,
  Torus,
  TorusKnot,
  Ring,
  Tetrahedron,
  Polyhedron,
  Icosahedron,
  Octahedron,
  Dodecahedron,
} from "@react-three/drei";

const models = [
  <Box key={"Box"} material-color="red" scale={0.5} />,
  <Sphere key={"Sphere"} material-color="red" scale={0.5} />,
  <Circle key={"Circle"} material-color="red" scale={0.5} />,
  <Cone key={"Cone"} material-color="red" scale={0.5} />,
  <Cylinder key={"Cylinder"} material-color="red" scale={0.5} />,
  <Tube key={"Tube"} material-color="red" scale={0.5} />,
  <Torus key={"Torus"} material-color="red" scale={0.5} />,
  <TorusKnot key={"TorusKnot"} material-color="red" scale={0.5} />,
  <Ring key={"Ring"} material-color="red" scale={0.5} />,
  <Tetrahedron key={"Tetrahedron"} material-color="red" scale={0.5} />,
  <Polyhedron key={"Polyhedron"} material-color="red" scale={0.5} />,
  <Icosahedron key={"Icosahedron"} material-color="red" scale={0.5} />,
  <Octahedron key={"Octahedron"} material-color="red" scale={0.5} />,
  <Dodecahedron key={"Dodecahedron"} material-color="red" scale={0.5} />,
];
export default models;
