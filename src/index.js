import "./styles.css";

// 追加ボタン機能
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  CreateIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deletFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const CreateIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");
  li.className = "list-item-lead";

  // pタグ生成
  const lead = document.createElement("p");
  lead.className = "list-lead";
  lead.innerHTML = text;

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
    // 戻すボタン機能
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（li）を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // TODO内容テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      CreateIncompleteList(text);
    });

    // liタグの子要素に追加
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

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

  //liタグの子要素に各要素を設定
  li.appendChild(lead);
  li.appendChild(completeButtun);
  li.appendChild(deleteButtun);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
