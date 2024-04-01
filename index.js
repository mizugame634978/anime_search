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
  console.log(genre.id);
  //選択しているか確認
  //あん2
  if(! nowGenres[genre.id]){
    nowGenres[genre.id] = "checked";
    console.log(nowGenres);
  }else{
    delete nowGenres[genre.id];
  }
  nowGenres.forEach(element => {
    console.log(element);
  });
};
/**
 * あん1：最初からジャンル名、チェックフラグがあるオブジェクトを用意しておいて、それをforで回して表示
 * 2:クリックしたチェックボックスで、チェックしたらオブジェクトにその名前を入れて、すでに名前があったらオブジェクトから削除したあと、forで表示
 */

//要素が選択解除されたら非表示