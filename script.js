function atmCard(){
    // var input = document.getElementById("atm").Value;
    var input = 1234567899876543;
    input = input.tostring();
   if(input.length < 16){
            alert("Please Enter 16 Digits.")
        } 
    console.log(input);  
    var newInput = input.shift(12);
    var ext = "************";
    var tot = ext + newInput;
    return "tot";
}
document.write(atmCard());
