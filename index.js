function produceDrivingRange(range) {
  return function(startString, endString) {
    let start = startString.match(/\d+/g);
    let end = endString.match(/\d+/g);
    if ((start + range) > end) { return `within range by ${Math.abs(end - (start + range))}`; }
    else { return `${Math.abs(end - (start + range))} blocks out of range`; };
  };
};
