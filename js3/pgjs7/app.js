const check = (number) => {
  return number % 2 === 0;
}

console.log(check(6));
console.log(check(7));


const add = (a,b) => {
  return a + b;
  console.log("計算しました");
}

const check1 = (number) => {
  // numberが3の倍数かどうかを戻り値として返してください
  return number % 3 === 0;
};

// if文の条件式で、checkを呼び出してください
if (check1(123)) {
  console.log("3の倍数です");
} else {
  console.log("3の倍数ではありません");
}