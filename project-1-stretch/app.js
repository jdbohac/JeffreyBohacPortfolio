//currently equiped weapon tracker
let eqWeapon = 0;
//current attacking enemy tracker
let currentEnemy = 0;
let currentEnemyHp = 0;
//trigger for win state
let hasKey = false;
//curent stage id
let stageName = '#gate-stage'
let hasTeeth = false;
let currentPlayerAttack = 0;
let currentEnemyAttack = 0;
//array of weapons that can be obtained
const weapons = [{
    name: 'Slim Jim',
    atk: 2,
    crit: 4,
    accuracy: 0.8 
    },
    {
    name: 'shish-kebab',
    atk: 5,
    crit:6,
    accuracy: 0.9 
    },
    {
    name: 'Leg of Lamb',
    atk:  7,
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
        name:'bottled-water',
        stamina: 15,
        hunger: 5,

    },
    {
        name:'yakitori',
        hunger:-30,
        stamina:5,
    }
]
//items obtained by exploration
const stageItems =[
    {
        name:'dennis-teeth',
    },
    {
        name:'Rat Droppings',
    },
    {
        name:'Large Key',
        intro:'The Mighty Ribeye wretches at the smell of the poopoo you\'ve pulled from your left sock. He begins to spew a sticky green ichor and continues for several second. Among the chunks is a large key, possibly for a door that\'s locked somewhere!'
    }
]
//currently help items
const inventory = []
//populate iventory list to display
const popInv = () => {
    $('#inventory-list').remove()
    const $list = $('<ul>').attr('id', 'inventory-list')
    for (let i=0; i<inventory.length; i++){
    const $items = $('<li>').attr('id', inventory[i].name + '-button').addClass('inv-item')
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
const useBottledWater = () => {
    player.hunger += dropItems[0].hunger
    player.stamina += dropItems[0].stamina
    $('#bottled-water').remove()
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
        atk: 10,
        stamina:10,
        intro:'You used Spit Roast, a jet of flames launches from your jowls.',
    },
    {
        name:'Broil',
        atk: 7,
        stamina:15,
        intro:`You wrap ${enemies[currentEnemy].name} in a warm embrace. Too warm, in fact \
        it combusts spontaneously from the heat`,
    },
    {
        name:'Tenderize',
        atk: 9,
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
    }
    
    
}
const attackRound = () =>{
    currentEnemyAttack = enemies[currentEnemy].atk 
    handleHunger(currentEnemyAttack)
    currentEnemyHp -= Math.floor(Math.random() *3) + weapons[eqWeapon].atk
    updateStats()
    if(player.hunger >= 100){
        $('.stage').hide()
        $('#lose-stage').fadeIn()

    }
    if(currentEnemyHp <= 0){
        player.hunger += enemies[currentEnemy].hunger
        player.xp += enemies[currentEnemy].xp
        if(Math.random() < 0.9){
            dropItem()
        }

        showStage()
    }
}
const dropItem = () => {
    if(Math.abs(Math.random()) <0.7){
        inventory.push(dropItems[0])
        $('#battle-drop').fadeIn()
    } else{
        inventory.push(dropItems[1])
        $('#battle-drop').fadeIn()
    }
}
const showStage = () => {
    $('.popup').hide()
    $('.stage').hide()
$(`${stageName}`).fadeIn()
}
//range determines which enemy types can be present in current stage
const startBattle = (range) => {
    $('.enemy-attack').remove()
    currentEnemyAttack = enemies[currentEnemy].atk
    currentPlayerAttack = weapons[eqWeapon].atk
    currentEnemy = range;
    currentEnemyHp = enemies[currentEnemy].hp
    let $enemyAttack = $('<p>').addClass('enemy-attack')
    $enemyAttack.text(`${enemies[currentEnemy].intro}`)
    $('#enemy-stats').append($enemyAttack)
    showBattle()
}
const takeWeapon = (weaponName) => {
    for (let i = 0; i < weapons.length; i++) {
        if(weapons[i].name == weaponName.data.item){
            inventory.push(weapons[i])

        }
    }
    $(`#${weaponName.data.item}-img`).hide()
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
        handleHunger(3)
        $('.move-button').hide()
        $('.gate').fadeIn()
        $('.stage').hide()
        $('#gate-stage').fadeIn()
}        
const stageCave =  () => {
    stageName = '#cave-stage'
        handleHunger(3)
        $('.move-button').hide()
        $('.cave').fadeIn()
        $('.stage').hide()
        $('#cave-stage').fadeIn().css('display', 'flex')

    battleChance(Math.floor(Math.random() *2))
    }

const stageThicket = () => {
    stageName = '#thicket-stage'
        handleHunger(3)
        $('.move-button').hide()
        $('.thicket').fadeIn()
        $('.stage').hide()
        $('#thicket-stage').fadeIn().css('display', 'flex')

    battleChance(Math.floor(Math.random() *4))
}
const getKey = () => {
    inventory.push(stageItems[2])
    $('#key-img').remove()
}
const getDennisTeeth = () => {
    inventory.push(stageItems[0])
    $('#dennis-teeth-img').hide()
    $('#dennis-teeth-pickup').show()
}
let hasDroppings = false
const scareMonster = () =>{
    for (let i = 0; i < inventory.length; i++) {
        if(inventory[i].name == 'Rat Droppings'){
            hasDroppings = true;  
        }
    
    }
    if(hasDroppings == true){
        $('#monster-key').show()
        $('#monster-img').hide()
        $('#key-img').css('display', 'block')
    }else{
        $('#monster-meet').show()
    }
}

let hasMetDennis = false
const dennis = () => {
    for (let i =0; i <inventory.length; i++){
        if(inventory[i].name == 'dennis-teeth'){
            hasTeeth = true
        }
    }
    if(hasMetDennis == false){
    $('#dennis-meet').show()
    hasMetDennis = true;
    } else if (hasMetDennis && hasTeeth){
        $('#dennis-teeth').show()
        $('#dennis').hide()
        $('#dennis-teeth-button').remove()
        inventory.push(stageItems[1])
    }else{
        $('#dennis-remind').show()
    }
}

const impasse = () => {
    $('#nope').fadeIn()
}

    if(currentEnemyHp <= 0){
        enemies.slice(currentEnemy, 1)
        showStage()
    }
    if(player.hunger >= 100){
        $('.stage').hide()
        $('#lose-stage').fadeIn()
    }




$(() => {
$('#inv-button').on('click', showInventory)
$('#for-move-gate').on('click', () => {
    for (let i = 0; i < inventory.length; i++) {
        if(inventory[i].name == 'Large Key'){
            hasKey = true
        }
    }
            if(hasKey){
            $('.stage').hide()
            $('#menu-flex').hide()
            $('#win').slideDown()
            } else {
                impasse()
            }
    })
$('#right-move-gate').on('click', stageCave)
$('#left-move-gate').on('click', stageThicket)
$('#left-move-cave').on('click', stageGate)
$('#for-move-cave').on('click', impasse)  
$('#right-move-thicket').on('click', stageGate)  
$('#attack').on('click', attackRound)
$('.back').on('click', showStage)
$('#dennis').on('click', dennis)
$('#dennis-teeth-img').on('click', getDennisTeeth)
$('#bottled-water').on('click', useBottledWater)
$('#monster-img').on('click', scareMonster)
$('#key-img').on('click', getKey)
$('#shish-kebab-img').click({item: 'shish-kebab'}, takeWeapon)
})

