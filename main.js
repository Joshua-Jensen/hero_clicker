// main clicking loop
//levelUp function that handles incrementing the hero level checking for gold and cost increment
// dps interval function
let gold = 0
let dps = 0
let clickDamage = 1
let monster = {
    name: 'potatoMonster',
    maxHp: 100,
    currentHp: 100,
    Bounty: 100,
}
heroes = [
    {
        name: 'cid',
        lvl: 0,
        dps: 0,
        dpsIncrease: 0,
        clickDamageAdded: 0,
        clickDamageIncrease: 1,
        cost: 5,
    },
    {
        name: 'treebeast',
        lvl: 0,
        dps: 1,
        dpsIncrease: 1,
        clickDamageAdded: 0,
        clickDamageIncrease: 0,
        cost: 50,
    },
    {
        name: 'ivan',
        lvl: 0,
        dps: 22,
        dpsIncrease: 22,
        clickDamageAdded: 0,
        clickDamageIncrease: 0,
        cost: 250,
    },
    {
        name: 'brittany',
        lvl: 0,
        dps: 74,
        dpsIncrease: 74,
        clickDamageAdded: 0,
        clickDamageIncrease: 0,
        cost: 1000,
    },
]
drawGold()
drawDamage()
drawHeroes()
drawHpBar()
// SECTION draw functions

function drawDamage() {
    let dpsElem = document.getElementById('dps')
    let clickDamageElem = document.getElementById('click-damage')
    dpsElem.innerText = '0'
    dpsElem.innerText = dps.toString()
    clickDamageElem.innerText = clickDamage.toString()
    console.log('Test')
}

function drawGold() {
    let goldElem = document.getElementById('gold')
    goldElem.innerText = gold.toString()
}

function drawLevelUp(name) {
    heroes.forEach(h => {
        if (h.name == name) {
            let levelElem = document.getElementById(h.name)
            let cost = levelElem.querySelector('.cost')
            let textLevel = levelElem.querySelector('.lvl')
            textLevel.innerText = h.lvl.toString()
            cost.innerText = h.cost.toString()
            console.log(h)
        }
    })

}

function drawHeroes() {
    heroes.forEach(h => {
        let levelElem = document.getElementById(h.name)
        console.log(levelElem)
        let cost = levelElem.querySelector('.cost')
        let textLevel = levelElem.querySelector('.lvl')
        cost.innerText = h.cost.toString()
        textLevel.innerText = h.lvl.toString()
    })
}

// function drawHpBar() {
//     let progressBarElem = document.getElementById('progress-bar')
//     progressBarElem.innerHTML = `<div class="progress" role="progressbar" aria-label="hp remaining" aria-valuenow="${(monster.currentHp / monster.maxHp) * 100}"
//     aria-valuemax="100" aria-valuemin="0"></div>`
//     if (monster.currentHp < 1) {
//         gold += monster.Bounty
//         monster.currentHp = monster.maxHp

//     }
    // console.log(monster.currentHp)
}

function shakeOn() {
    document.getElementById('enemy').classList.toggle('shake')
    // document.getElementById("enemy").classList.add('shake')
    // document.getElementById("enemy").classList.remove('shake')
    // shakeOff()
    // document.getElementById('enemy').classList.toggle('shake')
}


// function shakeOff() {
//     document.getElementById('enemy').classList.remove('shake')
// }


//SECTION game loops

function gameLoop() {
    gold += (clickDamage)
    console.log(gold)
    monster.currentHp -= clickDamage
    drawGold()
    drawHpBar()
}

setInterval(dpsTick, 1000)


function dpsTick() {
    gold += dps
    monster.currentHp -= dps
    drawGold()
    drawHpBar()
    console.log(gold, 'a second passes');
}

function levelUp(name) {
    heroes.forEach(h => {
        if (h.name == name) {
            if (gold >= h.cost) {
                h.lvl++
                h.dps += h.dpsIncrease
                h.clickDamageAdded += h.clickDamageIncrease
                clickDamage += h.clickDamageIncrease
                dps += h.dpsIncrease
                gold -= h.cost
                h.cost = Math.floor(h.cost * (1.07 ** h.lvl))
                drawLevelUp(h.name)
                drawGold()
                drawDamage()
                console.log(h)
            }
        }
    });
}


