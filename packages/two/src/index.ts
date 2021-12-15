import Triangulation from 'delaunator';
import one from '@namespace/one';

function t() {
  return Triangulation.from([
    [0, 0],
    [1, 0],
    [0, 1]
  ]).coords;
}

export default function a() {
  one();
  return t();
  //return one();
}
