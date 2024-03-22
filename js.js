const emojis = ["🐯", "🐯", "🐒", "🐒", "🦍", "🦍", "🐺", "🐺", "🐷", "🐷", "🐶", "🐶", "🐈", "🐈", "🦁", "🦁"]
let score = 0
const pontos = document.getElementById("pontos");
var embaralha = emojis.sort(() => (Math.random() > .5) ? 2: -1);
for(let i = 0; i < emojis.length; i++){
    
    let box = document.createElement('div');
    box.className = 'card';
    box.innerHTML = embaralha[i];

    box.onclick = function(){
        this.classList.add('boxOpen')
        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length > 1){
                if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML){
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMath')
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMath')
                    score += 10;
                    pontos.innerHTML = score
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                    if(document.querySelectorAll('.boxMath').length == emojis.length){
                        addBlur();
                        alert("Você venceu o jogo! pontuação "+ score)
                    }
                }
                    else{
                        score = score - 5;
                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                    pontos.innerHTML = score
                    }
            }
        }, 500)
    }
    document.querySelector('.jogo').appendChild(box); 
}
function addBlur() {
  }