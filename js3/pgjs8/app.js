/*外側*/
const name="にんじゃわんこ";

const introduce = () => {
  console.log(name);
}

introduce();
console.log(name);

/*内側*/
const introduce1 = () => {
  const name ="にんじゃわんこ";
  console.log(name);
}
introduce1();
console.log(name);


/* 両方に定義*/

const name1 = "ひつじ仙人";

const introduce2 = () => {
  const name1 = "にんじゃわんこ";
  console.log(name1);
}

introduce2();
console.log(name1);

/*if と while*/
if (条件式) {
  const name2 = "にんじゃわんこ";
  console.log(name2);
}
console.log(name2);

while(条件式) {
  const name3 = "忍者わんこ";
  console.log(name3);
}
console.log(name3);

// 関数の外側に定数nameを定義してください
const name4 = "ひつじ仙人";

const introduce3 = () => {
  // 関数の内側に定数nameを定義してください
  const name4 = "にんじゃわんこ";

  // 定数nameを出力してください
  console.log(name4);
  
};

introduce3();

// コードを貼り付けて、定数nameを出力してください。
console.log(name4);