function produceDrivingRange(range) {
  return function foo(start, end) {
    if (end < (start + range)) { return `within range by ${Math.abs(end - (start + range))}`; }
    //else { return `${Math.abs(end - (start + range))} out of range`};
  };
};
