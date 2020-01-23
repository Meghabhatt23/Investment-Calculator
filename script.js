enterDays.onclick = calculate;
function calculate(){
    var amount = document.getElementById("amount");
    var apr = document.getElementById("apr");
    var years = document.getElementById("years");
    var zipcode = document.getElementById("zipcode");
    var payment = document.getElementById("payment");
    var total = document.getElementById("total");

    var principal = parseFloat(amount.value);
    var monthTimesYear=  parseFloat(years.value);
    var InterestDividesMonth= parseFloat(apr.value)/100;

    var onePlusInterestDividesMonthSquare_By_monthTimesYear= Math.pow(1+InterestDividesMonth, monthTimesYear);

    var final = principal*onePlusInterestDividesMonthSquare_By_monthTimesYear;

    total.innerHTML="$" + final.toFixed(2);
}
