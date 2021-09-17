function nbYear(p0, percent, aug, p) {
  let i = 0;
  while (p0 < p) {
    p0 = p0 + percent * p0 / 100 + aug;
    ++i;
  }
  return i;
}

console.log(nbYear(1000, 2, 50, 1200));