/*------------基本的な演算子（出力結果）--------------*/

let calc = document.getElementById("result");
let operate = document.getElementsByClassName("button cal");

function clickButton(display) {
  let display_value = display.innerHTML;
  
  if (display_value == "AC"){//「AC」が押されたとき
    calc.innerHTML = "0";
  }else if(display_value == "="){//「＝」が押されたとき
    calc.innerHTML = eval(calc.innerHTML)
  }else{//上記以外が押されたとき
    if(calc.innerHTML == "0"){
      calc.innerHTML = display_value;
    }else{
      calc.innerHTML += display_value;
    // console.log("計算結果");
    }
  }
}

function operating(display) {//演算子を押した時のfunction
  const preValue = document.display.value.slice(-1);//前回入力したボタン、を定義
  let display_value = display.innerHTML;
  if(display_value == "+"　&& display.preValue == "+"){//「＋」が押された時、かつ前回の入力が「＋」なら
    return;
  }else{
    calc.innerHTML += display_value;
  }
}




// if (result != 0 ){
//       wzero.disabled = false;
//   }
  //displayの表示が０以外の時、disableを無効にする（00を押せるようにする）
  
  // document.getElementById("zero").addEventListener('click', e => {
  //   if (result.innerHTML != 0 ){
  //     e.target.disabled = false;
  //   }
  // })


/*----------一番右に演算子が来たとき、次に演算子を入力したら上書きされるようにする
式の一番右が演算子（+-/*）の場合→入力された演算子を上書き（表示されている式の一番右の演算子をカットして入力された演算子を追加）
表示されている式の一番右が演算子でない場合→表示されている式に入力された演算子を追加---------*/

