
// ページトップ遷移
// スクロール量を取得する関数
function getScrolled() {
    return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
}

// トップに戻るボタンの要素を取得
let topPage = document.querySelectorAll(".page-top");
            
// ボタンの表示・非表示
// スクロール時に動作
window.addEventListener("scroll", function(){
    // 条件と一致する時、フェードイン用/フェードアウト用クラスを付与
    ( getScrolled() > 100 ) ? topPage[0].classList.add("is-fadein"): topPage[0].classList.remove( 'is-fadein' );
});

// トップに移動する関数
function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
};
            
// イベント登録
// トップページ遷移ボタン押下時に動作
topPage[0].addEventListener("click", function() {
    scrollToTop();
});

// バナー
// バナーの表示・非表示
let banner = document.querySelectorAll(".banner");
// スクロール時に動作
window.addEventListener("scroll", function(){
    // 条件と一致する時、フェードイン用/フェードアウト用クラスを付与
    ( getScrolled() > 50 ) ? banner[0].classList.add("banner-in"): banner[0].classList.remove( 'banner-in' );
});

// イベント登録
// バナー削除ボタン押下時に動作
banner[0].addEventListener("click", function() {
    // 非表示用クラスを付与
    banner[0].classList.add("delete")
});