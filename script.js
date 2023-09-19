const checkBox = document.getElementById('toggle');
const monthly = document.querySelectorAll('.monthly-price');
const annually = document.querySelectorAll('.annually-price');

checkBox.addEventListener('click', () => {
    if (checkBox.checked){
        annually.forEach(price => price.style.display = 'none');
        monthly.forEach(price => price.style.display = 'flex');
    }
    else{
        annually.forEach(price => price.style.display = 'flex');
        monthly.forEach(price => price.style.display = 'none');
    }
})