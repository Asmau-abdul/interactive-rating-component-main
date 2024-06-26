let submitBtn = document.querySelector('button');
let sect_one = document.querySelector('.sect_one');
let sect_two = document.querySelector('.sect_two');
let feedback = document.querySelector('.feedback');
let rating = document.querySelector("#rating");
let list = document.querySelectorAll('li');
let val = 0;

list.forEach(li => {
    li.addEventListener('click', () => {
        val = li.value;
        console.log(val);
    })
})
// for(let i = 0; i < list.length; i++){
//     i.addEventListener('click', () => {
//         val = i.value;
//         console.log(val)
//     })
// }

submitBtn.addEventListener('click',(e) => {
    e.preventDefault();
    console.log(val)
    if(sect_two.style.display == 'none'){
        sect_one.style.display = 'none';
        sect_two.style.display = 'block';
    }

    feedback.innerHTML = `You selected ${val} out of 5`;
})