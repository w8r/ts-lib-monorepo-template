import { visitFunctionBody } from 'typescript';
import lib from '../src';

try {
  const c = lib();
  document.body.innerHTML = `<h2>${c.toString()}</h2>`;
  document.body.style.backgroundColor = 'green';
} catch (e) {
  console.error(e);
  document.body.style.backgroundColor = 'red';
}
