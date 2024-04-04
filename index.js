// animeGenres = ["ファンタジー","恋愛","スポーツ"]
// animeElements=["ストーリー","BGM","作画"]


//要素が選択されたら表示
nowGenres = {};//これに選択したジャンルが入る
/*例{
    "1":"checked",
}*/
let displayGenres =(genre)=>{
/*
- コードのリファクタリングが必要
- 対象となる要素が多いとすごく重くなると思われる
 */  

    if(! nowGenres[genre.id]){
        //オブジェクトに存在していないので追加
        nowGenres[genre.id] = "checked";//obj関連
        let inner_screen = document.getElementById("inner_screen");
        let screen = document.getElementById("screen");
        //追加したものを描画
        let div = document.createElement("div");
        div.innerText = genre.id;
        inner_screen.append(div);
    }else{
        //オブジェクトに存在していたので、オブジェクトから削除
        delete nowGenres[genre.id];
        let inner_screen = document.getElementById("inner_screen");//描画するエリアの内枠
        inner_screen.remove();//内側のスクリーンごと消去
        let screen = document.getElementById("screen");
        let inner_screen_new = document.createElement("div");
        inner_screen_new.setAttribute("id","inner_screen");
        screen.append(inner_screen_new);
        //スクリーンを再描画
        for(i in nowGenres){
            let screen = document.getElementById("screen");
            let tmp = document.getElementById("inner_screen");
            let div = document.createElement("div");
            div.innerText = i;
            tmp.append(div);
        }
    }
};
