module.exports = function createDreamTeam(members) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
  if(members === undefined || members === null || !Array.isArray(members) || members.length === 0) {
    return false;
  }
    return dreamteam = members
    .filter(member => typeof member === 'string')
    .filter(member => alphabet.indexOf(member.trim().charAt(0).toLowerCase()) !== -1)
    .reduce((sum, member) => {
      sum.push(member.trim().charAt(0).toLowerCase());
      return sum;
    }, [])
    .sort()
    .join("")
    .toUpperCase(); 
};