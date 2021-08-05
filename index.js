// 厳密なエラーチェック
"use strict";

function process() {
  // textの中身を置き換えるtextContent method
  document.getElementById("target").textContent = "のんのん日記";
  document.getElementById("trigger").classList.add("changed");
}

// なんらかのイベントが起きたら(第一引数)、なんらかの処理をしてね(第二引数)。
document.getElementById("trigger").addEventListener("click", process);
