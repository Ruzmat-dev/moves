const $=((select)=> {
    return document.querySelector(select)
}) ;

const $$=((select) => {
    return document.querySelectorAll(select)
}) ;

const createElement = ((tagName, className, content) => {
    const newElement = document.createElement(tagName)
    if(className){
        newElement.setAttribute("class" , className);
    }
    if(content) {
        newElement.innerHTML = `${content}`
    }

    return newElement;

}) ;