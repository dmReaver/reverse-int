module.exports = function reverse (n) {
  let s = String(n);
  s = s.split('');
  if (s[0] == '-') {
      delete s[0];
  }
  s = s.reverse();
  s = s.join('');
  let sn = Number(s);
  return sn;
}
