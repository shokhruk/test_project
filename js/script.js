let modal = document.querySelectorAll('.modal')[0],
    madol1 = document.querySelectorAll('.modal')[1],
    btn1 = document.querySelectorAll('Button')[1],
    btn = document.querySelectorAll('Button')[0];

btn.addEventListener('click', function() {
    modal.style.display = 'none';
    modal1.style.display = 'block';
});

btn1.addEventListener('click', function() {
    modal1.style.display = 'none';
    modal.style.display = 'block';
});
console.log(btn1)