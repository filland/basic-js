module.exports = function countCats(matrix) {
  if(matrix === undefined || matrix === null || matrix.length === 0) return 0;
  let matchResult = (";;"+matrix.map(array => array.join(";;")).join(";;")+';;').match(/;\^\^;/g);
  return matchResult === null ? 0 : matchResult.length;
};
