animeGenres = ["ファンタジー","恋愛","スポーツ"]
animeElements=["ストーリー","BGM","作画"]
//要素が選択されたら表示
for(i = 0;i < animeGenres.length;i++){
    console.log(animeGenres[i]);
}

nowGenres = {};//これに選択したジャンルが入る
/*{
    "1":"checked",
}*/
let displayGenres =(genre)=>{
  console.log("testです");  
//   console.log(genre.id);
  //選択しているか確認


  //あん2
//        /*
    if(! nowGenres[genre.id]){
        //存在していないので追加
        nowGenres[genre.id] = "checked";//obj関連
        let inner_screen = document.getElementById("inner_screen");
        let screen = document.getElementById("screen");
        let div = document.createElement("div");
        div.innerText = genre.id;
        inner_screen.append(div);
    }else{
        delete nowGenres[genre.id];
        let inner_screen = document.getElementById("inner_screen");
        inner_screen.remove();
        let screen = document.getElementById("screen");
        let inner_screen_new = document.createElement("div");
        inner_screen_new.setAttribute("id","inner_screen");
        screen.append(inner_screen_new);
        for(i in nowGenres){
            let screen = document.getElementById("screen");
            let tmp = document.getElementById("inner_screen");
            let div = document.createElement("div");
            div.innerText = i;
            tmp.append(div);
        }
        

    }

    // for(i in nowGenres){
    //     console.log(i);
    //     let screen = document.getElementById("screen");
    //     let div = document.createElement("div");
    //     div.innerText = i;
    //     document.body.append(div);
    // }
        //*/

};
/**
 * あん1：最初からジャンル名、チェックフラグがあるオブジェクトを用意しておいて、それをforで回して表示
 * 2:クリックしたチェックボックスで、チェックしたらオブジェクトにその名前を入れて、すでに名前があったらオブジェクトから削除したあと、forで表示
 */

//要素が選択解除されたら非表示