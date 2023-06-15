
// 画像選択ボタン
const button = document.querySelectorAll(".edit-content__image");
const selectImg = document.querySelectorAll(".edit-content__selectimg");
let clickCount = 0;

// 画像選択完了前にsetAttributeが行われないようにasync/awaitを設定
button[0].addEventListener("click", async () => {
    clickCount++;
    let idName = ("edit-content__selectimg__img" + clickCount);
    const img = document.getElementById(idName);
    const [handle] = await window.showOpenFilePicker({  
    types: [
        {
        accept: {
            'iamges/*': [
            '.jpg',
            '.jpeg',
            '.png',
            '.gif',
            '.svg'
            ]
        }
        }
    ]
    })
    const file = await handle.getFile();
    img.setAttribute('src', URL.createObjectURL(file));
    img.classList.add("show");
    img.classList.remove("hide");
    // 表示画像が0の場合、表示領域ごと非表示
    if (clickCount > 0 ) {
        selectImg[0].classList.add("show");
    } 
})

// URLを取得
const url = new URL(window.location.href);
// URLSearchParamsオブジェクトを取得
const params = url.searchParams;

// パラメータから「title」を取得
const titleValue = params.get("title");
// IDを使って要素を取得する
const title = document.getElementById("title");
// 取得した要素に受け取ったパラメータを代入
title.value = titleValue;

// パラメータから「title」を取得
const topicValue = params.get("topic");
// IDを使って要素を取得する
const topic = document.getElementById("topic");
// 取得した要素に受け取ったパラメータを代入
topic.value = topicValue;

// パラメータから「title」を取得
const tagValue = params.get("tag");
// IDを使って要素を取得する
const tag = document.getElementById("tag");
// 取得した要素に受け取ったパラメータを代入
tag.value = tagValue;