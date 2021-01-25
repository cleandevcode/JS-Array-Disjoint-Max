// Import stylesheets
import "./style.css";

// Write Javascript code!
function solution(A, K, L) {
  var A = [6, 1, 4, 6, 3, 2, 7, 4];
  var K = 3;
  var L = 2;
  let max = -1;
  if (K + L <= A.length) {
    for (let startB = 0; startB < A.length - K; startB++) {
      for (let startC = 0; startC + L < startB; startC++) {
        const sum = [
          ...A.slice(startC, startC + L),
          ...A.slice(startB, startB + K)
        ].reduce((a, b) => a + b, 0);
        if (sum > max) max = sum;
      }
      for (let startC = startB + K; startC < A.length; startC++) {
        const sum = [
          ...A.slice(startC, startC + L),
          ...A.slice(startB, startB + K)
        ].reduce((a, b) => a + b, 0);
        if (sum > max) max = sum;
      }
    }
  }
  return max;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>${solution()}</h1>`;
