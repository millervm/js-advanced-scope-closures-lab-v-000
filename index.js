function produceDrivingRange(range) {
  return(start, end) {
    if (end < (start + range)) { return `within range by ${abs(end - (start + range))}`; };
    else { return `${abs(end - (start + range))} out of range`};
  )};
};