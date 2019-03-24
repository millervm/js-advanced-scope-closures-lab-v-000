function produceDrivingRange(range) {
  return function(startString, endString) {
    let start = Number(startString.match(/\d+/g)[0]);
    let end = Number(endString.match(/\d+/g)[0]);
    if ((start + range) > end) { return `within range by ${Math.abs(end - (start + range))}`; }
    else { return `${Math.abs(end - (start + range))} blocks out of range`; };
  };
};
