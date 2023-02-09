import { loadCategory } from '../pages/main/loadCategory';

export function startModue(module: { start: () => void }) {
  const hash = window.location.hash;
  if (hash.slice(2).split('=')[0] === 'category' || hash.slice(2).split('=')[0] === 'sort') {
    loadCategory(hash.slice(1));
  }
  module.start();
}
