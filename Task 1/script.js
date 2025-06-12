const head = document.querySelector('#head');

console.log(head);

head.style.color='red';

head.style.border= '3px solid green';

head.style.backgroundColor = 'blue';

const btn = document.getElementById('btn');

btn.addEventListener('click',()=> {
    head.style.color = 'grey';
})

