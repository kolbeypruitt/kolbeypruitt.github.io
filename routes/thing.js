function nextItem(xs, item) {
  var out;
  for (var i = 0; i < xs.length; i++) {
    if (xs[i-1]==item && !out) {
      out = xs[i];
    } else if (xs[i] + 1 == item){
      out = xs[i];
    }
  }
  return out;
}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5))
 // 6