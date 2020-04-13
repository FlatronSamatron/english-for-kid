const items = {
    main:[
        ['body','Body parts','src/img/body/body0.png'],
        ['cloth','Clothing','src/img/cloth/cloth0.png'],
        ['food','Food','src/img/food/food0.png'],
        ['sea','Sea animal','src/img/animal/animal0.png'],
        ['color','Color','src/img/color/color0.png'],
        ['figure','Figures','src/img/figure/figure0.png'],
        ['fruit','Fruits','src/img/fruit/fruit0.png'],
        ['transport','Transport','src/img/transport/trnsport0.png']
    ],
    body:[
        ['src/img/body/body0.png','Body parts','','Тело'],
        ['src/img/body/body1.png','Arm','src/audio/body/body1.mp3','Рука'],
        ['src/img/body/body2.png','Cheek','src/audio/body/body2.mp3','Щека'],
        ['src/img/body/body3.png','Chin','src/audio/body/body3.mp3','Подбородок'],
        ['src/img/body/body4.png','Leg','src/audio/body/body4.mp3','Нога'],
        ['src/img/body/body5.png','Lips','src/audio/body/body5.mp3','Губы'],
        ['src/img/body/body6.png','Neck','src/audio/body/body6.mp3','Шея'],
        ['src/img/body/body7.png','Hand','src/audio/body/body7.mp3','Ладонь'],
        ['src/img/body/body8.png','Eyes','src/audio/body/body8.mp3','Глаза']],
    cloth:[
        ['src/img/cloth/cloth0.png','Body parts','','Тело'],
        ['src/img/cloth/cloth1.png','Belt','src/audio/cloth/cloth1.mp3','Ремень'],
        ['src/img/cloth/cloth2.png','Boots','src/audio/cloth/cloth2.mp3','Ботинки'],
        ['src/img/cloth/cloth3.png','Gloves','src/audio/cloth/cloth3.mp3','Перчатки'],
        ['src/img/cloth/cloth4.png','Hat','src/audio/cloth/cloth4.mp3','Шляпа'],
        ['src/img/cloth/cloth5.png','Shoes','src/audio/cloth/cloth5.mp3','Обувь'],
        ['src/img/cloth/cloth6.png','Socks','src/audio/cloth/cloth6.mp3','Носки'],
        ['src/img/cloth/cloth7.png','Skirt','src/audio/cloth/cloth7.mp3','Юбка'],
        ['src/img/cloth/cloth8.png','Mittens','src/audio/cloth/cloth8.mp3','Рукавицы']],
    food:[
        ['src/img/food/food0.png','Body parts','','Тело'],
        ['src/img/food/food1.png','Apple','src/audio/food/food1.mp3','Яблоко'],
        ['src/img/food/food2.png','Cheese','src/audio/food/food2.mp3','Сыр'],
        ['src/img/food/food3.png','Cookie','src/audio/food/food3.mp3','Печенье'],
        ['src/img/food/food4.png','Mushroom','src/audio/food/food4.mp3','Гриб'],
        ['src/img/food/food5.png','Hamburger','src/audio/food/food5.mp3','Гамбургер'],
        ['src/img/food/food6.png','Sandvich','src/audio/food/food6.mp3','Бутерброд'],
        ['src/img/food/food7.png','Tomato','src/audio/food/food7.mp3','Помидор'],
        ['src/img/food/food8.png','Soup','src/audio/food/food8.mp3','Суп']],
    // sea:{

    // },
    // color:{

    // },
    // figure:{

    // },
    // fruit:{

    // },
    // transport:{

    // }
}
let arr = [];
const cards = document.querySelector('.cards');
const card = document.querySelectorAll('.card');
const menu = document.querySelector('.menu-togle');
const nav = document.querySelector('nav');
const span = document.querySelectorAll('.menu-togle span');
let aud = 0;
menu.addEventListener('click', (e)=>{
        if(e.target.classList.contains('tog')){
            e.target.closest('div').classList.remove('tog')
            span.forEach(el=>el.classList.remove('tog'))
            nav.style.left = -300 +'px'
            span[1].style.display = 'block'
            span[0].style.transform = 'rotate(0deg)'
            span[2].style.transform = 'rotate(0deg)'
            span[0].style.top = '0'
        } else {
            e.target.closest('div').classList.add('tog')
            span.forEach(el=>el.classList.add('tog'))
            nav.style.left = 0
            span[1].style.display = 'none'
            span[0].style.transform = 'rotate(45deg)'
            span[2].style.transform = 'rotate(-45deg)'
            span[0].style.top = '9px'
        } 
})

nav.addEventListener('click', (e)=>{
    let li = e.target.closest('li');
    if(li) {
        let info = e.target.closest('li').classList[0]
        cardTopic(info)
        menu.classList.remove('tog')
        span.forEach(el=>el.classList.remove('tog'))
        nav.style.left = -300 +'px'
        span[1].style.display = 'block'
        span[0].style.transform = 'rotate(0deg)'
        span[2].style.transform = 'rotate(0deg)'
        span[0].style.top = '0'
    } 
})


cards.addEventListener('click', (e)=>{
    // let div = e.target.closest('div').classList.contains('card');
    let div = e.target.closest('div').classList.contains('card');
    let divT = e.target.closest('div').classList.contains('trans');
    if(div && !divT) {
        let info = e.target.closest('div').classList[1]
        cardTopic(info)
    } 
})

function cardTopic(info){
    if(info == 'main'){
        card.forEach((el,i)=>{
            el.className = 'card ' + items.main[i][0] + ' off'
            el.querySelector('p').innerText = items.main[i][1]
            el.querySelector('img').src = items.main[i][2]
            el.querySelector('.rotate').style.display = 'none'
            cards.classList.add('off')
        })
    } else {
    aud = 0
    card.forEach((el,i)=>{
        for(let key in items){
            if(info == key){
                arr = items[key]
            }
        }
        el.className = `card ${info}`;
        el.querySelector('img').src = arr[i+1][0]
        el.querySelector('p').innerText = arr[i+1][1]
        el.querySelector('.rotate').style.display = 'block'
        el.querySelector('.rotate').addEventListener('click', ()=>rotateRu(i,info))
        el.addEventListener('click',(e)=>{
            if(e.target.closest('div').classList.contains('rotate')){return}
            if(e.target.closest('div').classList.contains('off')){return}
            if(arr[i+1][2]){
            if(aud == 0){
                console.log(aud)
                let audio = new Audio(arr[i+1][2]);
                audio.play();
                aud++
                console.log(aud)
            }
            }
        })
    })
}
}

function rotateRu(i,info){
    card[i].classList.add('trans')
    card[i].style.transform = 'rotateY(180deg)'
    card[i].querySelector('p').style.transform = 'rotateY(180deg)'
    card[i].querySelector('p').innerHTML = arr[i+1][3]
    card[i].querySelector('img').style.transform = 'rotateY(180deg)'
    card[i].querySelector('.rotate').style.display = 'none'
    cards.classList.remove('off')
        cards.addEventListener('mouseover', (e)=>{
            let div = e.target.classList.contains('cards');
            // let off = e.target.classList.contains('off');
            let off = cards.classList.contains('off')
            console.log(off)
            if(div && !off){
                rotateEng(i)
            }
        })
}

function rotateEng(i){
    // console.log('rotate')
    card[i].classList.remove('trans')
    card[i].style = ''
    card[i].querySelector('p').style = ''
    card[i].querySelector('p').innerHTML = arr[i+1][1]
    card[i].querySelector('img').style = ''
    card[i].querySelector('.rotate').style.display = 'block'
    cards.removeEventListener('mouseover', rotateEng , false)
}


// function togleMenu(info){
//     console.log(info)
// }