document.addEventListener('DOMContentLoaded', ()=>{
  
        let deal = document.querySelector('#deal')
        deal.addEventListener('click', e => {
            e.preventDefault()
            let p1 = document.querySelector('.c1')
        p1.innerHTML = '<img src = ./cards/Card_back_01.svg>'

        let c2 = document.querySelector('.c2')
        c2.innerHTML = '<img src = ./cards/Card_back_01.svg>'

        let myc1 = document.querySelector('.myC1')
        myc1.innerHTML = '<img src = ./cards/10c.svg>'

        let myc2 = document.querySelector('.myC2')
        myc2.innerHTML = '<img src = ./cards/9c.svg>'
        })
    
        
    
        
    
    let cbet = document.querySelector('.cbet')
    let ptotal = document.querySelector('.ptotal')
        let post = document.querySelector('#post')
        post.addEventListener('click', e => {
            e.preventDefault()
            cbet.textContent = 'CURRENT BET: $20'
         alert ('Player 1 and you both posted $20')
         ptotal.textContent = ('POT TOTAL: $40')
         
        })
        
    
  
        
    let bet = 20
    let total = 40


    let call = document.querySelector('#call')
    call.addEventListener('click', (e)=>{
        e.preventDefault()
        alert('YOU MATCHED THE CURRENT BET OF $20')
        cbet.textContent=(`CURRENT BET: $ ${bet}`)
        total = total + 20
        ptotal.textContent = (`P0T TOTAL: $ ${total}`)
        alert(`Player 1 also called $20`)
        cbet.textContent=(`CURRENT BET: $ ${bet}`)
        total = total + 20
        ptotal.textContent = (`P0T TOTAL: $ ${total}`)
    })

    let raise = document.querySelector('#raise')
    raise.addEventListener('click', e =>{
        e.preventDefault()
        let inpt = prompt('You raise bet to: ')
        
        console.log(inpt);
        bet = inpt
        alert(`player 1 called your amount of $ ${bet}`)
        cbet.textContent=(`CURRENT BET: $ ${bet}`)
        total = total + parseInt(inpt * 2)
        ptotal.textContent = (`P0T TOTAL: $ ${total}`)
    })
    let fold = document.querySelector('#fold')
    fold.addEventListener('click', (e)=>{
        e.preventDefault()
        
        let p1 = document.querySelector('.c1')
        p1.innerHTML = '<img src = ./cards/4c.svg>'

        let c2 = document.querySelector('.c2')
        c2.innerHTML = '<img src = ./cards/3d.svg>'
        alert('You folded. Player 1 won')
    })

    let flop = document.querySelector('#flop')
    flop.addEventListener('click', e => {
        e.preventDefault()
        let community1 = document.querySelector('.com-card1')
        let community2 = document.querySelector('.com-card2')
        let community3 = document.querySelector('.com-card3')
        community1.innerHTML = '<img src = ./cards/6c.svg>'
        community2.innerHTML = '<img src = ./cards/js.svg>'
        community3.innerHTML = '<img src = ./cards/8c.svg>'

    })
    let turn = document.querySelector('#turn')
    turn.addEventListener('click', e => {
        e.preventDefault()
        let card4 = document.querySelector('.com-card4')
        card4.innerHTML = '<img src = ./cards/7c.svg>'
    })
    let reveal = document.querySelector('#reveal')
    reveal.addEventListener('click', e => {
        e.preventDefault()
        river = document.querySelector('.com-card5')
        river.innerHTML='<img src = ./cards/5d.svg>'
    })
    let win = document.querySelector('#winner')
    win.addEventListener('click', e =>{
        e.preventDefault()

        let p1 = document.querySelector('.c1')
        p1.innerHTML = '<img src = ./cards/4c.svg>'

        let c2 = document.querySelector('.c2')
        c2.innerHTML = '<img src = ./cards/3d.svg>'

        let myc1 = document.querySelector('.myC1')
        myc1.style.border = '2px solid red'

        let myc2 = document.querySelector('.myC2')
        myc2.style.border = '2px solid red'

        let community1 = document.querySelector('.com-card1')
        let community3 = document.querySelector('.com-card3')
        let card4 = document.querySelector('.com-card4')
        card4.style.border = '2px solid red'
        community1.style.border = '2px solid red'
        community3.style.border = '2px solid red'
         
        let ul = document.querySelector('ul')
        let h3 = document.createElement('h3')
        h3.textContent = ' According to the cheat sheet you have 5 consecutive cards of the same suit(STRAIGHT FLUSH). Player one has 5 card of different suites(Flush). You win because your hand is higher/stronger.'
        ul.appendChild(h3)
        function winMessage() {
            alert('You won!')
        }
        setTimeout(winMessage, 2000)
    })
})