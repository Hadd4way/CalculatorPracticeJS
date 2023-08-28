const page ={
    input: document.querySelector('input'),
}
function changeInput(element){
    if(['÷','0','-','+'].includes(element.innerText) && page.input.value[0] === undefined){
        console.log('a')
        return
    }
    if(element.innerText === '÷'){
        page.input.value = page.input.value + `/`;
        return
    }
    page.input.value = page.input.value + `${element.innerText}`;
}
function solution(event){
    event.preventDefault();
    if(eval(page.input.value) % 1 === 0){
        page.input.value = eval(page.input.value);
        return
    }
    page.input.value = eval(page.input.value).toFixed(2);
}
