//Validation Part
var num_question = document.querySelector("#num_question");
var select_catagory = document.querySelector("#select_catagory");
var select_defficult = document.querySelector("#select_defficult");
var select_time = document.querySelector("#select_time");
var num_question_p = document.querySelector("#num_question_p");
var select_catagory_p = document.querySelector("#select_catagory_p");
var select_defficult_p = document.querySelector("#select_defficult_p");
var select_time_p = document.querySelector("#select_time_p");
var question_1 = document.querySelector(".question_1")
var total_q = document.querySelector(".total_q");
var counter = document.querySelector("#counter");
var line = document.querySelector(".sub_line");
var showquestion = document.querySelector("#question");
var time_over = document.querySelector(".time_over");
let q_count = 1;
let c;
var pritam,score = 0;
// var option_no1 = document.querySelector("#option_no1");
// var option_no2 = document.querySelector("#option_no2");
// var option_no3 = document.querySelector("#option_no3");
// var option_no4 = document.querySelector("#option_no4");
var questionCount = 0,opt_count = 0;
let allquestion = [
    {question : "HTML full form"},
    {question : "CSS full form"},
    {question : "JS full form"},
    {question : "WWW Fathers Name"},
    {question : "IP Full Form"},
    {question : "Which tag is a Inline tag"},
    {question : "How many heading tag are Avalable in HTML"},
    {question : "Which HTML attribute is used to define inline styles?"},
    {question : "Which property is used to change the background color in CSS?"},
    {question : "Which CSS property is used to change the text color of an element?"},
]
let alloption = [
    {options : ["Hyper Text Markup Language","Hyper Text Clear Language","Hyper Text Makup Language","Hyper Text Markup"]},
    {options : ["Case cading style Page","Case cading style sheet","Case cading sheet style","Case cading stylish Page"]},
    {options : ["Java Style","Java Stylish","Java Script","Java Shop"]},
    {options : ["Timothy berner Lee","Timothy berner Pee","Timothy burner Lee","Timm berner Lee"]},
    {options: ["Internet Protocol","Internet Prot","Internet Protect","Inter Protocol"]},
    {options: ["span Tag","a Tag","label Tag","a and b Both"]},
    {options: ["6","1","4","3"]},
    {options: ["Class","Styles","style","font"]},
    {options: ["background-color","bg_color","bgcolor","bg-color"]},
    {options: ["fgcolor","text-color","textcolor","color"]},
]
let allrightans = [
    {right: "Hyper Text Markup Language"},
    {right: "Case cading style sheet"},
    {right: "Java Script"},
    {right: "Timothy berner Lee"},
    {right : "Internet Protocol"},
    {right : "a and b Both"},
    {right : "6"},
    {right : "style"},
    {right : "background-color"},
    {right : "color"},
]
function submit(){
    let a = 0,c = 1;
    if(num_question.value == "select" || num_question.value == "no"){
        num_question_p.style.display = "contents";
        a = 1;
    }
    if(select_catagory.value == "no"){
        select_catagory_p.style.display = "contents";
        a = 1;
    }
    if(select_defficult.value == "select"){
        select_defficult_p.style.display = "contents";
        a = 1;
    }
    if(select_time.value == "select"){
        select_time_p.style.display = "contents";
        a = 1;
    }
    if(a == 0){
        question_1.style.visibility = "visible";
        total_q.innerHTML = q_count + "/" + num_question.value;
        counter.innerHTML = select_time.value;
        q_count++;
        pritam = setInterval(()=>{
            c = counter.innerHTML
            c= parseInt(c);
            c--;
            counter.innerHTML = c;
            if(c == 0){
                let b = 0;
                for(let i = 0;i<4;i++){
                    for(let j = 0;j<allrightans.length;j++){
                        if(document.querySelector(`#option_no${i}`).innerHTML == allrightans[j].right){
                            let rightans = document.querySelector(`.option_${i}`);
                            rightans.style.backgroundColor = "green";
                            rightans.style.borderColor = "yellow";
                            // line.style.transition = "none";
                            document.querySelector(`#input_${j + 1}`).checked = true;
                            clearInterval(pritam);
                            b = 1;
                            break;
                        }
                    }
                    if(b == 1)
                        break;
                }
            }
        },1000)
        // line.style.width = "0px";
        // line.style.transition = "${select_time.value}s ease";
        // line.style.transition = `${select_time.value}s ease-in-out`; 
        // line.style.backgroundColor = "red";
        document.querySelector("#question").innerHTML = allquestion[questionCount].question;
        for(let i = 0;i<1;i++){
            for(let j = 0;j<4;j++)
                document.querySelector(`#option_no${j}`).innerHTML = alloption[opt_count].options[j];
        }
        questionCount++;
        opt_count++;
    }
}
// function stop(){
    
// }
function q_check(option_num){
    let f = 0;
    for(let i = 0;i<allrightans.length;i++)
    {
        if(document.querySelector(`#option_no${option_num}`).innerHTML == allrightans[i].right){
            let rightans = document.querySelector(`.option_${option_num}`);
            rightans.style.backgroundColor = "green";
            rightans.style.borderColor = "yellow";
            clearInterval(pritam);
            // line.style.transition = "none";
            f = 1;
            score++;
        }
    }
    if(f == 0){
        let worngans = document.querySelector(`.option_${option_num}`);
        worngans.style.backgroundColor = "red";
        worngans.style.borderColor = "yellow";
        clearInterval(pritam);    
        // line.style.transition = "none";
    }
}
function next(){
    if(questionCount == num_question.value){
        document.querySelector("#next").innerHTML = "Submit";
        let score_box = document.querySelector(".score_box");
        question_1.style.visibility = "hidden";
        score_box.style.visibility = "visible";
        document.querySelector("#marks").innerHTML = `Score: ${score} / ${num_question.value}`;
    }




        clearInterval(pritam);
        for(let i = 0;i<4;i++){
            document.querySelector(`.option_${i}`).style.backgroundColor = "transparent";
            document.querySelector(`.option_${i}`).style.borderColor = "white";
            document.querySelector(`#input_${i+1}`).checked = false;
        }
        total_q.innerHTML = q_count + "/" + num_question.value;
        q_count++;
        // line.style.width = "100%";
        // line.style.backgroundColor = "red";
        counter.innerHTML = select_time.value;
        pritam = setInterval(()=>{
            c = counter.innerHTML
            c= parseInt(c);
            c--;
            counter.innerHTML = c;
            if(c == 0){
                let b = 0;
                for(let i = 0;i<4;i++){
                    for(let j = 0;j<allrightans.length;j++){
                        if(document.querySelector(`#option_no${i}`).innerHTML == allrightans[j].right){
                            let rightans = document.querySelector(`.option_${i}`);
                            rightans.style.backgroundColor = "green";
                            rightans.style.borderColor = "yellow";
                            // line.style.transition = "none";
                            document.querySelector(`#input_${i + 1}`).checked = true;
                            // console.log(`#input_${i + 1}`);
                            clearInterval(pritam);
                            b = 1;
                            break;
                        }
                    }
                    if(b == 1)
                        break;
                }
                // clearInterval(pritam);
            }
        },1000)
        // line.style.width = "0px";
        // line.style.transition = "${select_time.value}s ease";
        // line.style.transition = `${select_time.value}s ease-in-out`; 
        // line.style.backgroundColor = "red";
        document.querySelector("#question").innerHTML = allquestion[questionCount].question;
        for(let i = 0;i<1;i++){
            for(let j = 0;j<4;j++)
                document.querySelector(`#option_no${j}`).innerHTML = alloption[opt_count].options[j];
        }
        opt_count++;
        questionCount++;
}
function home(){
        let score_box = document.querySelector(".score_box");
        // question_1.style.visibility = "hidden";
        score_box.style.visibility = "hidden";
        q_count = 1;
        score = 0;
        questionCount = 0;
        opt_count = 0;
        clearInterval(pritam);
        for(let i = 0;i<4;i++){
            document.querySelector(`.option_${i}`).style.backgroundColor = "transparent";
            document.querySelector(`.option_${i}`).style.borderColor = "white";
            document.querySelector(`#input_${i+1}`).checked = false;
        }
}
