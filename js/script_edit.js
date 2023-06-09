
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