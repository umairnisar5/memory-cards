const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');
 

// Keep track of current card
let currentActiveCard = 0;


// Store card data 
const cardsData = [
    {
        question: 'what must a variable begin with?',
        answer : 'A letter, $ or _'
    },
    {
        question: 'what is a variable?',
        answer : 'container for a piece of data'
    },
    {
        question : 'Example of case sensitive variable ',
        answer : 'thisIsAVariable'
    }
];

// creat all cards
function createCards(){
    cardData.forEach((dat, index) => createCards(data, index));
 }

 // create a single card in DOM 
 function
 