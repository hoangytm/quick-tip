let currentTip;

function percentChange(val) {
   document.getElementById('tipPercent').innerHTML = val + "%";
   caculateTip()
}

function personChange(val) {
   document.getElementById('person').innerHTML = val + " persons";
   calculateTipeach()
}

function billChange(val) {
   caculateTip()
}

function caculateTip() {
   let tipPercent = document.getElementById('tipInput').value;
   let bill = document.getElementById('yourBill').value;
   let tipValue = (tipPercent * bill) / 100
   this.currentTip = tipValue
   document.getElementById('tipValue').innerHTML = "$" + tipValue;
   document.getElementById('totalWithTip').innerHTML = "$" + (parseInt(bill) + parseInt(tipValue));
}

function calculateTipeach() {
   let totalTip = document.getElementById('tipValue').value
   let person = document.getElementById('splitInput').value
   let bill = document.getElementById('yourBill').value;
   document.getElementById('tipEach').innerHTML = "$" +this.currentTip * person
   console.log( this.currentTip)
   document.getElementById('billEach').innerHTML = "$" + bill * person

}

