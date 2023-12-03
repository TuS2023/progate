class Animal {
  constructor(name, age) {
    // nameの値に文字列「レオ」を代入してください
    this.name = "レオ";
    
    // ageの値に数値の「3」を代入してください
    this.age = 3;
  }
}
const animal = new Animal("レオ", 3);

class Animal {
  // 引数に「name」と「age」を追加してください
  constructor(name, age) {
    // 「"レオ"」の代わりに引数nameの値を代入してください
    this.name = name;
    
    // 「3」の代わりに引数ageの値を代入してください
    this.age = age;
  }
}

// 引数に「"モカ"」と「8」を渡してください
const animal = new Animal("モカ", 8);

console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);