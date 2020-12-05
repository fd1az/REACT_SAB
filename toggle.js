function toggle(...vals) {
  let unset = {};
  let cur = unset;
  return function next() {
    if (cur != unset) {
      vals.push(cur);
    }
    cur = vals.shift();
    return cur;
  };
}

let onOff = toggle('on', 'off');

console.log(onOff()); // on
console.log(onOff()); // off
console.log(onOff()); // on
console.log(onOff()); // off
