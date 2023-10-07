let bille=document.getElementById('billtotal')
let tipe=document.getElementById('tiptotal')
let add=document.getElementById('add')
let subtract=document.getElementById('subtract')
let display=document.getElementById('display')
let amount=document.getElementById('amount')

let people=Number(display.innerText)
add.onclick = () =>
  {
    people++
    display.innerHTML=people
   calculateTotal()

  }
subtract.onclick = () =>
  {
    people--
    display.innerHTML=people
     calculateTotal()

  }

const calculateTotal =() =>
  {
let billamount=Number(bille.value)
let tippercentage=Number(tipe.value)/100
let tip=billamount*tippercentage
let total =billamount+tip
let final=total/people
amount.innerHTML=final
  }
calculateTotal()
