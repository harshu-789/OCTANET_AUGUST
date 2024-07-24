    //     let menu =  document.getElementById("#tool")
    //     let menubar = document.querySelector('nav-part2')

    //     menu.onclick = () => {
    //         menu.classList.toggle('#tool')
    //         menu.classList.toggle('active')
    //     }

    //     window.onscroll = () => {
    //         menu.classList.toggle('#tool')
    //         menu.classList.remove('active')
    //     }

    // ;
        
    //     window.addEventListener('reload', () => {
    //         function reload() {
    //             window.location.reload();

    //     }})

        let span = document.querySelector('span')

        let wordList = ['Start!', 'Initiate!', 'Begin!' ,'Launch!']

        let wordIndex = 0
let characterIndex = 0
let skipUpdate = 0
let ReverseType = false

 const intervalId = setInterval (() =>{
    if(skipUpdate){
        skipUpdate--
        return;
    }
    if(!ReverseType){
        skipUpdate = 2
        span.innerText = span.innerText + wordList[wordIndex][characterIndex]
        characterIndex++
    }
    else{
        span.innerText = span.innerText.slice(0 , span.innerText.length - 1)
        characterIndex--
    }
    if(characterIndex === wordList[wordIndex].length){
        skipUpdate = 5
        ReverseType = true
    }
    if(span.innerText.length === 0 && ReverseType){
        wordIndex++
        ReverseType = false

    }
    if(wordIndex == wordList.length){
        wordIndex = 0
        clearInterval
    }

 }, 200)