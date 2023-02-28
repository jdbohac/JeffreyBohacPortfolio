//currently equiped weapon tracker
let eqWeapon = 0;
//current attacking enemy tracker
let currentEnemy = 0;
let currentEnemyHp = 0;
//trigger for win state
let hasKey = false;
//curent stage id
let stageName = '#gate-stage'
//array of weapons that can be obtained
const weapons = [{
    name: 'Slim Jim',
    atk: Math.floor(Math.random() * 4) + 1,
    crit: 4,
    accuracy: 0.8 
    },
    {
    name: 'Shish Kebab',
    atk: Math.floor(Math.random() * 3) + 4,
    crit:6,
    accuracy: 0.9 
    },
    {
    name: 'Leg of Lamb',
    atk: Math.floor(Math.random() * 7) + 4,
    crit:9,
    accuracy: 0.8 
    }
    
] 
//player character stats
const player = {
    name:'Hungry Joe',
    weapon: weapons[eqWeapon].name,
    //used for special attacks
    stamina:50,
    //grows with every move and damage taken
    hunger:0,
    //unlocks special moves
    xp:0
}
//items obtained from battle
const dropItems = [
    {
        name:'bottled water',
        stamina: 15,
        hunger: 5,
    },
    {
        name:'Yakitori',
        hunger:-30,
        stamina:5,
    }
]
//items obtained by exploration
const stageItems =[
    {
        name:'Dennis\'s teeth',
        intro:'You\'ve found Dennis\'s missing teeth!\
        They don\'t smell very nice...'
    },
    {
        name:'Rat Droppings',
        intro:'Dennis forces a mushy bunch into your hand. It is indeed feces. Let\'s say they\'re from a rat. You regretfully thank Dennis and he sprints out of the cave faster than you have ever seen a man run before.'
    },
    {
        name:'Large Key',
        intro:'The Mighty Ribeye wretches at the smell of the poopoo you\'ve pulled from your left sock. He begins to spew a sticky green ichor and continues for several second. Among the chunks is a large key, possibly for a door that\'s locked somewhere!'
    }
]
//currently help items
const inventory = [{
    name:'Large Key',
    intro:'The Mighty Ribeye wretches at the smell of the poopoo you\'ve pulled from your left sock. He begins to spew a sticky green ichor and continues for several second. Among the chunks is a large key, possibly for a door that\'s locked somewhere!'
}]
const popInv = () => {
    $('#inventory-list').remove()
    const $list = $('<ul>').attr('id', 'inventory-list')
    for (let i=0; i<inventory.length; i++){
    const $items = $('<li>').attr('id', inventory[i].name).addClass('inv-item')
    $items.append(inventory[i].name)
    $items.appendTo($list)
}
    $list.appendTo('#inv-list')
}
let invToggle = 2;    
    const showInventory = () => {
    
    if(invToggle % 2 == 0){
        popInv()
    $('#inv-container').slideDown(300)
    invToggle++
    } else{
        $('#inv-container').css('display', 'none')
        invToggle++
    }
}

const enemies = [
    {
        name:'Flanking Steak',
        intro:'You\'ve been flanked by a Steak Monster!',
        outro:'You quickly gobble up its writhing body, 15 hunger is restored.',
        atk: Math.floor(Math.random() * 3) + 2,
        hp:18,
        accuracy:0.7,
        hunger:-15,
        xp:10

    },
    {
        name: 'Filet Mignome',
        intro: 'A deadly Mignome scurries up to you!',
        outro:'You struggle to swallow its remains in one gulp but you do and it restores 20 hunger.',
        atk: Math.floor(Math.random() * 3) + 3,
        hp:15,
        accuracy:0.9,
        hunger:-20,
        xp:15
    },
    {
        name:'Spare Ribs',
        intro:'You are confronted by an animate skeleton with a massive ribcage.',
        outro:'Not a lot of meat on those bones, it restores 10 hunger',
        atk: Math.floor(Math.random() * 5) + 3,
        hp:20,
        accuracy:0.8,
        hunger:-10,
        xp:30
    },
    {
        name:'Colonel Chicken',
        intro:'You are approached by a chiken in a white suit, it has a mean look in its eyes',
        outro:'Finger-licking good! it restored 20 hunger',
        atk: Math.floor(Math.random() * 6) + 4,
        accuracy:0.7,
        hunger:-25,
        hp:25,
        xp:20
    }
]
const specialMoves = [
    {
        name:'Spit Roast',
        atk: () => {
            let atk = Math.floor(Math.random() * 10) + 5
            return atk
        },
        stamina:10,
        intro:'You used Spit Roast, a jet of flames launches from your jowls.',
    },
    {
        name:'Broil',
        atk: () => {
            let atk = Math.floor(Math.random() * 10) + 7
            return atk
        },
        stamina:15,
        intro:`You wrap ${enemies[currentEnemy].name} in a warm embrace. Too warm, in fact \
        it combusts spontaneously from the heat`,
    },
    {
        name:'Tenderize',
        atk: () => {
            let atk = Math.floor(Math.random() * 12) + 9
            return atk
        },
        stamina:20,
        intro:`You absolutely pulverize the ${enemies[currentEnemy].name}. The poor soul, \
        you should be ashamed of yourself.`
    }
]
const handleHunger = (hunger) => {
    player.hunger += hunger
    if (player.hunger < 0){
        player.hunger = 0
    }
}
//determines if a battle will happen on move
const battleChance = (range) => {
    if(Math.random() < .4){
        startBattle(range)
    } else {
        showStage()
    }
    
    
}
const attackRound = () =>{
    handleHunger(enemies[currentEnemy].atk)
    currentEnemyHp -= weapons[eqWeapon].atk
    updateStats()
    if(player.hunger >= 100){
        $('.stage').hide()
        $('#lose-stage').fadeIn()

    }
    if(currentEnemyHp <= 0){
        showStage()
    }
}
const showStage = () => {
    $('.stage').hide()
$(`${stageName}`).fadeIn()
}
//range determines which enemy types can be present in current stage
const startBattle = (range) => {
    currentEnemy = Math.floor(Math.random() * range);
    currentEnemyHp = enemies[currentEnemy].hp
    showBattle()
}
const addInventory = (item) => {
    inventory.push(item)
}
//display reflect stat changes after battle
const updateStats = () => {
    $('.stats').remove()
    let $enemyHp = $('<p>').addClass('stats')
    $enemyHp.text(`${enemies[currentEnemy].name} has: ${currentEnemyHp}hp left`)
    let $playerStats = $('<p>').addClass('stats')
    $playerStats.text(`Your current hunger is ${player.hunger}`)
    $('#player-stats').append($playerStats)
    $('#enemy-stats').append($enemyHp)
}
const showBattle = () => {
    $('.stage').hide()
    $('#battle-stage').fadeIn()
    updateStats()


}
const stageGate =  () => {
    stageName = '#gate-stage'
    if(player.hunger >= 100){
        // showLose()
    }else {
        handleHunger(3)
        $('.move-button').hide()
        $('.gate').fadeIn()
        $('.stage').hide()
        $('#gate-stage').fadeIn()
    }

}    
        
const stageCave =  () => {
    stageName = '#cave-stage'
        handleHunger(3)
        $('.move-button').hide()
        $('.cave').fadeIn()
        $('.stage').hide()
        $('#cave-stage').fadeIn()

    battleChance(2)
    }







$(() => {
$('#inv-button').on('click', showInventory)
$('#for-move-gate').on('click', () => {
    for (let i = 0; i < inventory.length; i++) {
        if(inventory[i].name == 'Large Key'){

            $('.stage').hide()
            $('#menu-flex').hide()
            $('#win').slideDown()
            }
        }
    })
$('#right-move-gate').on('click', stageCave)
$('#left-move-cave').on('click', stageGate)    
$('#attack').on('click', attackRound)
    if(currentEnemyHp <= 0){
        enemies.slice(currentEnemy, 1)
        showStage()
    }
    if(player.hunger >= 100){
        $('.stage').hide()
        $('#lose-stage').fadeIn()
    }
    })

