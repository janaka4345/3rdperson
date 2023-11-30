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
  <Box key={1} material-color="red" scale={0.5} />,
  <Sphere key={2} material-color="red" scale={0.5} />,
  <Circle key={3} material-color="red" scale={0.5} />,
  <Cone key={4} material-color="red" scale={0.5} />,
  <Cylinder key={5} material-color="red" scale={0.5} />,
  <Tube key={6} material-color="red" scale={0.5} />,
  <Torus key={7} material-color="red" scale={0.5} />,
  <TorusKnot key={8} material-color="red" scale={0.5} />,
  <Ring key={9} material-color="red" scale={0.5} />,
  <Tetrahedron key={10} material-color="red" scale={0.5} />,
  <Polyhedron key={11} material-color="red" scale={0.5} />,
  <Icosahedron key={12} material-color="red" scale={0.5} />,
  <Octahedron key={13} material-color="red" scale={0.5} />,
  <Dodecahedron key={14} material-color="red" scale={0.5} />,
];
export default models;
