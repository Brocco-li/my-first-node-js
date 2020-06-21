'use strict';
const number = process.argv[2] || 0;
// process.argvはコマンドラインに入力されたものが配列として得られる
// [0]はnodeコマンドのパス
// [1]は実行したファイルのパス
// [2]にコマンド後の引数が入る
// ||は条件付き論理和、でも論理和としてのイメージは忘れた方がいい
// A || B はAがTruthyな値ならAを返し、AがFalsyならBの値を返す。こういう文法。
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}

console.log(sum);