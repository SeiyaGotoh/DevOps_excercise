
function makeFrame(){
  //前に表示されている内容を削除
  for(i=0; i<6; i++){
    if(document.getElementById(`week${i+1}`)!=null){
      document.getElementById(`week${i+1}`).remove()
    }
  }
  //枠作り
  for(i=0; i<6; i++){
    //何週目の行かでIDをつけて行を作成
    var week = document.createElement("tr")
    document.getElementById("calendar").appendChild(week)
    week.id = `week${i+1}`
    //行の中に曜日毎の列を作成しIDをふる
    for (j=0; j<7; j++){
      var day_of_week = document.createElement("td")
      document.getElementById(`week${i+1}`).appendChild(day_of_week)
      day_of_week.id = `week${i+1}_${j}`
    }
  }
}
function makeCalendar(){
  //枠を作る
  makeFrame()
  //変数宣言と入力値の取得
  var year = Number(document.getElementById("year").value)
  var month = Number(document.getElementById("month").value)
  var date_today = Number(document.getElementById("day").value)
  var firstday_of_week = new Date(year, month-1, 1).getDay()
  var lastdate = new Date(year, month, 0).getDate()
  //枠の中に日付を埋めていく
  for(date=1; date<=lastdate; date++){
    var dayparam = date-1+firstday_of_week
    //何週目の何曜日か計算
    var week = (dayparam-dayparam%7)/7+1
    var day_of_week = dayparam%7
    document.getElementById(`week${week}_${day_of_week}`).textContent = `${date}`
    if(date === date_today){
      //入力日が何週目の何曜日か記録
      var week_today = week;
      var today_of_week = day_of_week;
    }
  }
  //入力日のスタイルを変更
  document.getElementById(`week${week_today}_${today_of_week}`).style.color = "white" ;
  document.getElementById(`week${week_today}_${today_of_week}`).style.backgroundColor = "royalblue" ; }
//イベント処理でクリックしたらmakeCalendarを実行
document.getElementById("make").addEventListener("click", makeCalendar);


