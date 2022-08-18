// Determine the total number of repetitions of words in a paragraph.
const paragraph = "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is, by far, the most important source of energy for life on Earth."
// countRepeated(paragraph) === 11
// "the" is seen 5 times (i.e. 4 repetitions)
// "is" is seen 3 times (i.e. 2 repetitions)
// "of" is seen 3 times (i.e. 2 repetitions)
// "it" is seen 2 times (i.e. 1 repetition)
// "a" is seen 3 times (i.e. 2 repetitions)
// hence number of repetitions is 4+2+2+1+2 = 11
let removeSpecialCharacters = (strArr) => {
  for (let i=0; i<strArr.length; i++) {
    let length = strArr[i].length;
    let lasCharacter = strArr[i].charAt(length - 1);
    if ( !(lasCharacter >= 'a' && lasCharacter <= 'z') ) {
      strArr[i] = strArr[i].substring(0, length-1);
    }
    strArr[i] = strArr[i].toLowerCase();
  }
  return strArr;
}
let createWordObject = (strArrWords) => {
  let obj = {};
  for (let i=0; i<strArrWords.length; i++) {
    let item = strArrWords[i];
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  return obj;
}
let countRepeatedFromObj = (obj) => {
  let repeatedWordCount = 0;
  for (let key in obj) {
    if (obj[key] > 1) {
      repeatedWordCount = repeatedWordCount + (obj[key] - 1);
    }
  }
  return repeatedWordCount;
}
let countRepeated = (str) => {
  let strArr = str.split(' ');
  let strArrWords = removeSpecialCharacters(strArr);
  let strWordObj = createWordObject(strArrWords);
  let totalCountRepeated = countRepeatedFromObj(strWordObj);
  console.log(totalCountRepeated);
  return totalCountRepeated;
}
countRepeated(paragraph);
==========================================
// In a video game a player starts at the beginning of a maze, and there are
// several paths that can take them to the next level of the game. Each path
// has one or more milestones where the player gets one or more points for
// passing them. What's the maximum number of points our player can get?
//         1
//        / \
//       /   \
//      /     \
//     1       3
//    / \     /
//   5  10   7
// findMaxPoints(game) === 12
function findMaxPointsGame(game, children) {
  if (children.length === 0) {
  }
  for (let i=0; i<children.length; i++) {
    findMaxPointsGame(game, children.children)
  }
  // findMaxPointsGame(game)
}
function findMaxPoints(game) {
  return findMaxPointsGame(game, game.children);
}
function Milestone(points, children) {
  this.points = points;
  this.children = children || [];
}
var game = new Milestone(1, [
  new Milestone(1, [
      new Milestone(5),
      new Milestone(10)
  ]),
  new Milestone(3, [
      new Milestone(7)
  ])
]);
