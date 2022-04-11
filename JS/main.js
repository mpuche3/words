words.map(word => {
    document.querySelector("#game").innerHTML += create_word_HTML(word);
    // console.log(x.ipa)
    // console.log(`/trʌf(ə)l/`)
})

a = [...document.querySelectorAll(".word")]
a.map(x => x.onclick = word_onclick);

function play_sound(sound){
    var msg = new SpeechSynthesisUtterance(sound);
    window.speechSynthesis.speak(msg);
}

function word_onclick(e) {
    if(e.target.children[0] !== undefined){
        word = e.target.children[0].innerHTML
        e.target.children[0].classList.toggle('hideP')
        console.log(e.keyCode)
        if (e.ctrlKey) {
            window.open("https://www.lexico.com/definition/" + word, '_blank').focus();
        } else {
            play_sound(word)
        }
    }
}

function create_word_HTML(word) {
    return `
    <div class="word">
        <div class = "spelling">${word}</div>
    </div>
    `
}