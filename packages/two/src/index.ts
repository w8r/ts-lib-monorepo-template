import Triangulation from 'delaunator';
import one from '@namespace/one';

function t() {
  return Triangulation.from([
    [0, 0],
    [1, 0],
    [0, 1]
  ]);
}

export default function a() {
  t();
  return one();
}
