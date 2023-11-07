const quizData=[
    {
        question: "What is the primary goal of sex education?",
        options:[
            "To promote abstinence only",
            "To provide comprehensive information on sexual health",
            "To discourage any discussion about sex",
            "To focus solely on the risks of sexual activity"
        ],
        correct: 1,
        checked: -1
    },
    {
        question: "At what age is it recommended to start sex education for children?",
        options:[
            "10-12 years old",
            "5-7 years old",
            "15-17 years old",
            " 2-3 years old"
        ],
        correct: 1,
        checked: -1
    },
    {
        question: "Which sexually transmitted infection (STI) is caused by a virus?",
        options:[
            "Chlamydia",
            "Gonorrhea",
            "Syphilis",
            "Human Papillomavirus (HPV)"
        ],
        correct: 1,
        checked: -1
    },
    {
        question: "What is the menstrual cycle?",
        options:[
            "The monthly process of ovulation in females",
            "A yearly hormonal change in males",
            "The process of sperm production in males",
            "The growth of body hair in puberty"
        ],
        correct: 0,
        checked: -1
    },
    {
        question: "What is the importance of using contraception?",
        options:[
            "To prevent any form of intimacy",
            "To control someone's reproductive choices",
            "To reduce the risk of unintended pregnancies and STIs",
            "Contraception is not necessary in committed relationships"
        ],
        correct: 2,
        checked: -1

    },
    {
        question: "What is the most effective method of preventing unintended pregnancies and sexually transmitted infections (STIs)?",
        options:[
            "Abstinence",
            "Condom use",
            "Birth control pills",
            "Praying for protection"
        ],
        correct: 1,
        checked: -1

    },
    {
        question: "What is the primary role of parents and guardians in sex education?",
        options:[
            "To prevent any discussion about sex",
            "To be the sole providers of sex education",
            "To supplement school-based sex education with open and age-appropriate discussions",
            "To leave sex education entirely to schools"
        ],
        correct: 2,
        checked: -1

    },
    {
        question: "Which of the following statements about sexually transmitted infections (STIs) is true?",
        options:[
            "STIs can only be transmitted through sexual intercourse",
            "Condoms provide 100% protection against all STIs.",
            "Some STIs can be transmitted through skin-to-skin contact.",
            "STIs have no impact on reproductive health."
        ],
        correct: 2,
        checked:-1

    },
    {
        question: "What is the purpose of teaching about the concept of \"sexual health\" in sex education?",
        options:[
            "To discourage any discussion about sex",
            "To focus solely on avoiding diseases",
            "To promote a holistic understanding of physical, emotional, and social aspects of sexuality",
            "To limit discussions to reproductive health only"
        ],
        correct: 2,
        checked: -1
    },
    {
        question: "Which of the following is an example of a long-acting reversible contraceptive method?",
        options:[
            "Birth control pills",
            "Condoms",
            "Hormonal patches",
            "Intrauterine device (IUD)"
        ],
        correct: 3,
        checked: -1

    },
];

const quiz=document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll("#question, #option_1, #option_2, #option_3, #option_4");
const submitBtn = document.querySelector("#submit");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#previous");
let currentQuiz = 0;
let score = 0;
const loadNextQuiz = () => {
    const {question, options} = quizData[currentQuiz];
    questionElm.innerText = `${currentQuiz+1}: ${question}`;

    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );

    var radioElement;

    if(quizData[currentQuiz].checked===0) {
        radioElement = document.getElementById("a");
        radioElement.checked = true;
    }
    else if(quizData[currentQuiz].checked===1) {
        radioElement = document.getElementById("b");
        radioElement.checked = true;
    }
    else if(quizData[currentQuiz].checked===2) {
        radioElement = document.getElementById("c");
        radioElement.checked = true;
    }
    else if(quizData[currentQuiz].checked===3) {
        radioElement = document.getElementById("d");
        radioElement.checked = true;
    }
};

const loadPrevQuiz = () => {
    const {question, options} = quizData[currentQuiz];
    questionElm.innerText = `${currentQuiz+1}: ${question}`;

    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );

    var radioElement;

    if(quizData[currentQuiz].checked===0) {
        radioElement = document.getElementById("a");
        radioElement.checked = true;
    }
    else if(quizData[currentQuiz].checked===1) {
        radioElement = document.getElementById("b");
        radioElement.checked = true;
    }
    else if(quizData[currentQuiz].checked===2) {
        radioElement = document.getElementById("c");
        radioElement.checked = true;
    }
    else if(quizData[currentQuiz].checked===3) {
        radioElement = document.getElementById("d");
        radioElement.checked = true;
    }
};

loadNextQuiz();

const getSelectedOption=()=>{
    let answerElement=Array.from(answerElm);
    return answerElement.findIndex((currElm,index)=>currElm.checked);
    
}
const deselected=()=>{
    return answerElm.forEach((currElm)=>(currElm.checked=false));
}
submitBtn.addEventListener('click',()=>{
    const selectedOptionIndex=getSelectedOption();
    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score++;
    }
    currentQuiz++;
    if(currentQuiz===quizData.length){
        quiz.innerHTML=`
            <div class="result">
            <h3>🏆 Your Score: ${score}/${quizData.length} Correct Answers</h3>
            <p class="para"></p>
            <button class="reload-button" onclick="location.reload()">Play Again ↻</button>
            </div>
        `;
        const para=document.querySelector(".para");
        if(score>=7){
            para.innerText="😀 Congratulation! you have good Knowledge of sexual health 🎉";
        }
        else if(score>=4 && score<7){
            para.innerText="Good 🙂, But you need to know more about Sex Education. You can check out Resources Section";
        }
        else{
            para.innerText="sorry 😔! you are not aware of Sex education. Read more from our Resources Section.";
        }

    }
    }
    );

nextBtn.addEventListener('click',()=>{
    const selectedOptionIndex=getSelectedOption();
    quizData[currentQuiz].checked=selectedOptionIndex;
    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score++;
    }
    currentQuiz++;
    if(currentQuiz<quizData.length){
        deselected();
        loadNextQuiz();
    }
    else{
        currentQuiz=currentQuiz-1;
    }
});

prevBtn.addEventListener('click',()=>{
    const selectedOptionIndex=getSelectedOption();
    quizData[currentQuiz].checked=selectedOptionIndex;
    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score++;
    }
    currentQuiz--;
    if(currentQuiz>=0){
        deselected();
        loadPrevQuiz();
    }
    else{
        currentQuiz++;
    }
});