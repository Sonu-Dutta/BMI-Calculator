function getBMI(){
    var weight=document.getElementById('weight').value;
    var height=document.getElementById('height').value;

    height=height *12;
    height=height * 0.025;
    // var bmiVal=weight/(height*height);
    var bmiVal=weight/Math.pow(height,2);

    bmiVal=Math.round(bmiVal);
    document.getElementById('bmi').value=bmiVal;
}
