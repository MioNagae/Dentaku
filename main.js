/*------------基本的な演算子（出力結果）--------------*/
let calc = document.getElementById("result");
function clickButton(display) {
  let display_value = display.innerHTML;
  
  if (display_value == "AC"){//「AC」が押されたとき
    calc.innerHTML = "0";
  }else if(display_value == "="){//「＝」が押されたとき
    calc.innerHTML = eval(calc.innerHTML)
    
//力技で演算子の連続抑制
//「＋」押した時
  }else if(display_value == "+"){
    console.log("+押したよ");
    let f = calc.innerHTML
    if(f.slice(-1) === "+"){
      console.log(f);
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else if(f.slice(-1) === "-"){
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else if(f.slice(-1) === "/"){
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else if(f.slice(-1) === "*"){
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else{
      calc.innerHTML += display_value; 
    }
  //「ー」押した時
  }else if(display_value == "-"){
    console.log("-押したよ");
    let f = calc.innerHTML
    if(f.slice(-1) === "+"){
      console.log(f);
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else if(f.slice(-1) === "-"){
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else if(f.slice(-1) === "/"){
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else if(f.slice(-1) === "*"){
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else{
      calc.innerHTML += display_value; 
    }
  //「/」押した時
  }else if(display_value == "/"){
    console.log("+押したよ");
    let f = calc.innerHTML
    if(f.slice(-1) === "+"){
      console.log(f);
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else if(f.slice(-1) === "-"){
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else if(f.slice(-1) === "/"){
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else if(f.slice(-1) === "*"){
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else{
      calc.innerHTML += display_value; 
    }
  ////「*」押した時
  }else if(display_value == "*"){
    console.log("-押したよ");
    let f = calc.innerHTML
    if(f.slice(-1) === "+"){
      console.log(f);
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else if(f.slice(-1) === "-"){
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else if(f.slice(-1) === "/"){
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else if(f.slice(-1) === "*"){
      calc.innerHTML = f.slice(0,-1) + display_value ;
    }else{
      calc.innerHTML += display_value; 
    }
  
//先頭に０がつかないように制御する
  
  
  

    
  }else{//上記以外が押されたとき
    if(calc.innerHTML == "0"){
      calc.innerHTML = display_value;
    }else{
      calc.innerHTML += display_value;
    // console.log("計算結果");
    }
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
