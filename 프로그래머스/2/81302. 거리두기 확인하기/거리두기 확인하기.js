// 9:37 ~ 10:19 // 실패.. !
"use strict";

function solution(places) {
  var answer = [];

  places.forEach((place) => {
    answer.push(isKeepDistancePlace(place));
  });

  return answer;
}

// P : 응시자
// 0 : 빈테이블
// X : 파티션
// 멘헤튼거리 == 각 좌표의 차를 모두 더한 것

function isKeepDistancePlace(place) {
  for (let y = 0; y < place.length; y++) {
    for (let x = 0; x < place[y].length; x++) {
      // console.log(place[y][x]);
      if (place[y][x] === "P") {
        if (isKeepDistancePerson(place, y, x) === false) return 0;
      }
    }
  }
  return 1;
}

function isKeepDistancePerson(place, y, x) {
  // 상하좌우
  if (isValidPosition(place, y - 1, x) && place[y - 1][x] === "P") return false;
  else if (isValidPosition(place, y - 1, x) && place[y - 1][x] === "O") {
    if (isValidPosition(place, y - 2, x) && place[y - 2][x] === "P")
      return false;
    if (isValidPosition(place, y - 1, x - 1) && place[y - 1][x - 1] === "P")
      return false;
    if (isValidPosition(place, y - 1, x + 1) && place[y - 1][x + 1] === "P")
      return false;
  }
  if (isValidPosition(place, y + 1, x) && place[y + 1][x] === "P") return false;
  else if (isValidPosition(place, y + 1, x) && place[y + 1][x] === "O") {
    if (isValidPosition(place, y + 2, x) && place[y + 2][x] === "P")
      return false;
    if (isValidPosition(place, y + 1, x - 1) && place[y + 1][x - 1] === "P")
      return false;
    if (isValidPosition(place, y + 1, x + 1) && place[y + 1][x + 1] === "P")
      return false;
  }
  if (isValidPosition(place, y, x - 1) && place[y][x - 1] === "P") return false;
  else if (isValidPosition(place, y, x - 1) && place[y][x - 1] === "O") {
    if (isValidPosition(place, y, x - 2) && place[y][x - 2] === "P")
      return false;
    if (isValidPosition(place, y - 1, x - 1) && place[y - 1][x - 1] === "P")
      return false;
    if (isValidPosition(place, y + 1, x - 1) && place[y + 1][x - 1] === "P")
      return false;
  }
  if (isValidPosition(place, y, x + 1) && place[y][x + 1] === "P") return false;
  else if (isValidPosition(place, y, x + 1) && place[y][x + 1] === "O") {
    if (isValidPosition(place, y, x + 2) && place[y][x + 2] === "P")
      return false;
    if (isValidPosition(place, y - 1, x + 1) && place[y - 1][x + 1] === "P")
      return false;
    if (isValidPosition(place, y + 1, x + 1) && place[y + 1][x + 1] === "P")
      return false;
  }
  return true;
}

function isValidPosition(place, y, x) {
  if (y < 0 || y >= place.length || x < 0 || x >= place[y].length) return false;
  return true;
}
