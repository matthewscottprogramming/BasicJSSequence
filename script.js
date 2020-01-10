const convertFarenheitToCelcius = function(celcius) {
    return (celcius * (9/5)) + 32;
}


document.getElementById('btnConvert').addEventListener('click', function(){

    const $inputElement = document.getElementById('inpTemp');
    const $outputElement = document.getElementById('answer');
    let temp = $inputElement.value;
    temp = convertFarenheitToCelcius(temp);
    $outputElement.textContent = temp;

});