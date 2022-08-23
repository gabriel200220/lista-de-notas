const textInput = document.querySelector(".text-input");
const button = document.querySelector(".button");
const listItem = document.querySelector("#recado");
const deleteThis = document.querySelector(".visible");




button.addEventListener('click', function () {
    
    if (textInput.value === "") {
    window.alert('digite um recado!');
    } else {
        
        listItem.innerHTML += `<li class="errand">
        ${textInput.value}<button class="erranddelete">
        X</button></li>`;
        textInput.value = '';
        
    }
});



listItem.addEventListener('click', function (event) {
        if (event.target.classList.contains('erranddelete')) {
        event.target.closest(".errand").remove();
    } else {
    event.target.classList.toggle('checked');
    }

});



