    let hoursContainer = document.querySelector('.hours')
    let minutesContainer = document.querySelector('.minutes')
    let secondsContainer = document.querySelector('.seconds')
    let tickElements = Array.from(document.querySelectorAll('.tick'))

    let last = new Date(0)
    last.setUTCHours(-1)

    let tickState = true

    function updateTime () {
    let now = new Date
    
    let lastHours = last.getHours().toString()
    let nowHours = now.getHours().toString()
    if (lastHours !== nowHours) {
        updateContainer(hoursContainer, nowHours)
    }
    
    let lastMinutes = last.getMinutes().toString()
    let nowMinutes = now.getMinutes().toString()
    if (lastMinutes !== nowMinutes) {
        updateContainer(minutesContainer, nowMinutes)
    }
    
    let lastSeconds = last.getSeconds().toString()
    let nowSeconds = now.getSeconds().toString()
    if (lastSeconds !== nowSeconds) {
        //tick()
        updateContainer(secondsContainer, nowSeconds)
    }
    
    last = now
    }

    function tick () {
    tickElements.forEach(t => t.classList.toggle('tick-hidden'))
    }

    function updateContainer (container, newTime) {
    let time = newTime.split('')
    
    if (time.length === 1) {
        time.unshift('0')
    }
    
    
    var first = container.firstElementChild
    if (first.lastElementChild.textContent !== time[0]) {
        updateNumber(first, time[0])
    }
    
    let last = container.lastElementChild
    if (last.lastElementChild.textContent !== time[1]) {
        updateNumber(last, time[1])
    }
    }

    function updateNumber (element, number) {
    //element.lastElementChild.textContent = number
    let second = element.lastElementChild.cloneNode(true)
    second.textContent = number
    
    element.appendChild(second)
    element.classList.add('move')

    setTimeout(function () {
        element.classList.remove('move')
    }, 990)
    setTimeout(function () {
        element.removeChild(element.firstElementChild)
    }, 990)
    }

    setInterval(updateTime, 100)