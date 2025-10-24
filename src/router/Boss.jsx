let likes = [];
let listeners = [];

export function addLike(product) {
  if (!likes.find(item => item.id === product.id)) {
    likes.push(product);
    notify();
  }
}

export function removeLike(id) {
  likes = likes.filter(item => item.id !== id);
  notify();
}

export function subscribeLikes(callback) {
  callback(likes);
  listeners.push(callback);
  return () => {
    listeners = listeners.filter(l => l !== callback);
  };
}

function notify() {
  listeners.forEach(cb => cb(likes));
}
