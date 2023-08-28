const page ={
    input: document.querySelector('input'),
}
function changeInput(element){
    page.input.classList.remove('input__positive');
    if(['÷','0','-','+'].includes(element.innerText) && page.input.value[0] === undefined){
        return
    }
    if(element.innerText === 'AC'){
        page.input.value = '';
        return;
    }
    if(element.innerText === '÷'){
        page.input.value = page.input.value + `/`;
        return
    }
    page.input.value = page.input.value + `${element.innerText}`;
}
function solution(event){
    event.preventDefault();
    page.input.classList.add('input__positive');
    if(eval(page.input.value) % 1 === 0){
        page.input.value = eval(page.input.value);
        return
    }
    page.input.value = eval(page.input.value).toFixed(2);
}
