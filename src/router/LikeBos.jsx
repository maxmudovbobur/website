const listeners = new Set();

let count = 0;

export function addLike() {
  count += 1;
  for (const fn of listeners) fn(count);
}

export function getLikeCount() {
  return count;
}

export function subscribeLikes(listener) {
  listeners.add(listener);
  listener(count);
  return () => listeners.delete(listener);
}
