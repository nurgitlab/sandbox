function dirReduc(arr) {
  let n = 0;
  let s = 0;
  let w = 0;
  let e = 0;

  arr.map(item => item.toUpperCase()).map((item) => {
    item === "NORTH" ? ++n : n;
    item === "SOUTH" ? ++s : s;
    item === "WEST" ? ++w : w;
    item === "EAST" ? ++e : e;
  });

  arr = [];
  n = n - s;
  w = w - e;

  if (n > 0) {
    for (let i = 0; i < n; i++) {
      arr.push("NORTH");
    }
  } else if (n === 0) {
  } else {
    for (let i = 0; i < Math.abs(n); i++) {
      arr.push("SOUTH");
    }
  }

  if (w > 0) {
    for (let i = 0; i < w; i++) {
      arr.push("WEST");
    }
  } else if (w === 0) {
  } else {
    for (let i = 0; i < Math.abs(w); i++) {
      arr.push("EAST");
    }
  }

  return arr;
}

console.log(dirReduc(["North", "North", "West", "EAST"]));