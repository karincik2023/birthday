const btnResult = document.getElementById('result');
const birthdayElement = document.getElementById('errorMessage');
const resultMessage = document.getElementById('resultMessage');
const spanElement = document.getElementById('daysCount');
const dateElement = document.getElementById('date');


function calculatedaysUntilBirthday() {
    const currentDate = new Date();
    const selectDate = new Date(dateElement.value);
    let timeDifference = 0;


    if(!dateElement.value){
        birthdayElement.style.background ='red';
        birthdayElement.textContent = 'пожалуйста введите свою дату рождение';
        birthdayElement.style.display = 'block';
        errorMessage.style.display = 'block';
        return;
    } else {
        const dateDifference = selectDate.getTime() - currentDate.getTime();
        timeDifference = Math.ceil(dateDifference / (1000 *60* 60* 24));
        spanElement.textContent = timeDifference;
        errorMessageContainer.style.display = 'none';
        resultMessage.style.display = 'block';
        
}
}
btnResult.addEventListener('click', calculatedaysUntilBirthday);