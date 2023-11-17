const color = "黒";
switch(color){
  case "赤":
    console.log("ストップ！");
    
  case "黄色":
    console.log("要注意");
    break;
    
  case "緑":
    console.log("安全");
    break;
    
  default:
    console.log("colorの値が正しくありません");
    break;
}

const n = 4;

switch (n) {
  case 1:
    console.log("大吉です");
    break;
  case 2:
    console.log("吉です");
    break;
  case 3:
    console.log("小吉です");
    break;
  // どのcaseにも合致しなかったときの処理を追加してください
  default:
    console.log("凶です");
    break;


}