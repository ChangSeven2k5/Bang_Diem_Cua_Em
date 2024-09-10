function myFunction1() {
    var se1 =parseInt(document.getElementById('se1').value);
    var se2 = parseInt(document.getElementById('se2').value);
    var year = document.getElementById('select');
    var value = year.options[year.selectedIndex].value;
    value = parseInt(value);
    var sum;
    
    switch (value){
        case 1:
            sum = (se1 + (se2*2))/3;
            sum = parseFloat(sum);
            document.getElementById('result').value = sum;
            break;
        case 2:
            sum = ((se1*2) + (se2*3))/5;
            sum = parseFloat(sum);
            document.getElementById('result').value = sum;
            break;
        case 3:
            sum = ((se1*3) + (se2*4))/7;
            sum = parseFloat(sum);
            document.getElementById('result').value = sum;
            break;
    }

        if (sum >= 9){
            document.getElementById('display').innerHTML = "HOC SINH GIOI";
            document.getElementById('display').style.color = "red";
        } else if (sum >= 7 && sum < 9) {
            document.getElementById('display').innerHTML = "HOC SINH KHA";
            document.getElementById('display').style.color = "yellow";

        } else if (sum >= 5 && sum < 7){
            document.getElementById('display').innerHTML = "HOC SINH TRUNG BINH";
            document.getElementById('display').style.color = "blue";
        } else {
            document.getElementById('display').innerHTML = "HOC SINH YEU";
    
        }

}

function myFunction2() {
    document.getElementById('se1').value = " ";
    document.getElementById('se2').value = " ";

}