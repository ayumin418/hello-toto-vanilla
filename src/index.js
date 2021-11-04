import "./styles.css";

// 追加ボタン
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグ生成
  const li = document.createElement("li");
  li.className = "list-item-lead";

  //button(完了)タグ生成
  const completeButtun = document.createElement("button");
  completeButtun.innerText = "完了";

  // 完了ボタン機能
  completeButtun.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（li）を未完了リストから削除
    deletFromIncompleteList(completeButtun.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButtun.parentNode;

    // TODO内容テキストを取得
    const targetText = addTarget.firstElementChild.innerText;

    // li以下を初期化
    addTarget.textContent = null;

    // pタグを生成
    const p = document.createElement("p");
    p.innerText = targetText;

    // button（戻す）タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // liタグの子要素に追加
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButtun = document.createElement("button");
  deleteButtun.innerText = "削除";

  // 削除ボタン機能
  deleteButtun.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（li）を未完了リストから削除
    deletFromIncompleteList(deleteButtun.parentNode);
  });

  // pタグ生成
  const lead = document.createElement("p");
  lead.className = "list-lead";
  lead.innerHTML = inputText;

  //liタグの子要素に各要素を設定
  li.appendChild(lead);
  li.appendChild(completeButtun);
  li.appendChild(deleteButtun);

  //ulタグの子要素に各要素を設定
  document.getElementById("incomplete-list").appendChild(li);

  // 未完了リストから指定の要素を削除
  const deletFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
