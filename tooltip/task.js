const activeElements = Array.from(document.getElementsByClassName('has-tooltip'))

activeElements.forEach(el => {
    el.style.position = 'relative'
    let elTitle = el.getAttribute('title');
    let divHint = document.createElement('div')
    divHint.textContent = elTitle
    divHint.classList.add('tooltip')
    divHint.style.position = 'absolute'
    divHint.style.zIndex = 1
    // el.appendChild(divHint);
    el.insertAdjacentElement('afterend', divHint)
    el.addEventListener('click', clickHandler)
});

function clickHandler(event) {
    // Current hint
    divHint = event.target.nextSibling
    // Requested position for hint
    divPosition = event.target.getAttribute('data-position')

    console.log(divHint.classList)

    // Disable all hints at the page and activate current hint
    if (divHint.classList.contains('tooltip_active')) {
        activeElements.forEach(element => element.nextSibling.classList.remove('tooltip_active'))
        // activeElements.forEach(element => element.children[0].classList.remove('tooltip_active'))
    } else {
        // activeElements.forEach(element => element.children[0].classList.remove('tooltip_active'))
        activeElements.forEach(element => element.nextSibling.classList.remove('tooltip_active'))
        divHint.classList.add('tooltip_active')
    }
    
    // Hint position setter
    if (divPosition == 'top') {
        divHint.style.left = `${event.target.getBoundingClientRect().left}px`
        divHint.style.top = `${event.target.getBoundingClientRect().top - event.target.scrollHeight - 10}px`
    } else if (divPosition == 'bottom') {
        divHint.style.left = `${event.target.getBoundingClientRect().left}px`
        divHint.style.top = `${event.target.getBoundingClientRect().top + event.target.scrollHeight + 10}px`
    } else if (divPosition == 'right') {
        divHint.style.left = `${event.target.getBoundingClientRect().left + event.target.scrollWidth + 10}px`
        divHint.style.top = `${event.target.getBoundingClientRect().top}px`
    } else {
        divHint.style.right = `${event.target.getBoundingClientRect().left - event.target.scrollWidth - 10}px`
        divHint.style.top = `${event.target.getBoundingClientRect().top}px`
    }

    // Disable link
    event.preventDefault()
}