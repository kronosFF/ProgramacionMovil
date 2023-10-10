

function sumar () {
    var numberOne = parseInt(document.getElementById('value1').value);
    var numberTwo = parseInt(document.getElementById('value2').value);

    document.getElementById('request').innerHTML = numberOne+numberTwo;
}

function restar () {
    var numberOne = parseInt(document.getElementById('value1').value);
    var numberTwo = parseInt(document.getElementById('value2').value);

    document.getElementById('request').innerHTML = numberOne - numberTwo;
}

function multiplicar () {
    var numberOne = parseInt(document.getElementById('value1').value);
    var numberTwo = parseInt(document.getElementById('value2').value);

    document.getElementById('request').innerHTML = numberOne * numberTwo;
}

function dividir (){
    var numberOne = parseInt(document.getElementById('value1').value);
    var numberTwo = parseInt(document.getElementById('value2').value);

    if(numberOne > 0 && numberTwo > 0){
        document.getElementById('request').innerHTML = numberOne / numberTwo;
    } else {
        document.getElementById('request').innerHTML = 'no se puede dividir entre 0';
    }
}