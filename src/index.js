import "./styles.css";

// 追加ボタン
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // alert(inputText);

  // liタグ生成
  const li = document.createElement("li");
  li.className = "list-item-lead";

  //button(完了)タグ生成
  const completeButtun = document.createElement("button");
  completeButtun.innerHTML = "完了";
  completeButtun.addEventListener("click", () => {
    alert("完了");
  });

  //button(削除)タグ生成
  const deleteButtun = document.createElement("button");
  deleteButtun.innerHTML = "削除";
  deleteButtun.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（li）を未完了リストから削除
    const deleteTarget = deleteButtun.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
    // console.log(deleteTarget);
  });

  // pタグ生成
  const lead = document.createElement("p");
  lead.className = "list-lead";
  lead.innerHTML = inputText;

  //liタグの子要素に各要素を設定
  li.appendChild(lead);
  li.appendChild(completeButtun);
  li.appendChild(deleteButtun);
  console.log(li);

  //ulタグの子要素に各要素を設定
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
