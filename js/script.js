var score = 0;

document.addEventListener("DOMContentLoaded",function(event){
    var main = document.getElementById("js-change");
    
    var heading = document.createElement("button");
    
    var attr = document.createAttribute("class");
    attr.value = "btn-large waves-effect waves-light grey";                           
    heading.setAttributeNode(attr);
    heading.textContent = "Begin";
    
    var answer_attr = document.createAttribute("class");
    answer_attr.value = "btn waves-effect waves-light grey";
    
    main.appendChild(heading);
    
    heading.addEventListener('click',function(event){
        var question = document.createElement("h3");
        main.removeChild(heading);
        var question_array = ["What cosmetic product is also considered Rouge?", "What color do you usually apply to the crease of the eye?", "What is highlighter?", "How do you apply highlighter?", "What is the product used to enhance eyelashes?"];
        question.textContent = question_array[0];
        var answers_1 = ["Mascara", "Eyeshadow", "Blush"];
        var button_1 = document.createElement("button");
        var button_2 = document.createElement("button");
        var button_3 = document.createElement("button");
        
        button_1.setAttributeNode(answer_attr);
        button_2.setAttribute("class", "btn waves-effect waves-light grey two");
        button_3.setAttribute("class", "btn waves-effect waves-light grey");
        
        button_1.textContent = answers_1[0];
        button_2.textContent = answers_1[1];
        button_3.textContent = answers_1[2];
        
        main.appendChild(question);
        main.appendChild(button_1);
        main.appendChild(button_2);
        main.appendChild(button_3);
        
        button_1.onclick = function(){
            score = score - 5;
            button_1.disabled = true;
            button_1.setAttribute("class", "btn disabled");
        };
        
        
        button_2.onclick = function(){
            score = score - 5;
            button_2.disabled = true;
            button_2.setAttribute("class", "btn disabled two");
        };
        
        button_3.addEventListener("click",function(event){
            button_2.disabled = true;
            button_1.disabled = true;
          button_3.setAttribute("class", "btn disabled");
          score = score + 10;
          var submit = document.createElement("button");
          submit.setAttribute("class", "btn waves-effect waves-light grey");
          
          submit.textContent = "Next Question";
          
          submit.style.display = "block";
          submit.style.marginLeft = "auto";
          submit.style.marginRight = "auto";
          submit.style.marginTop = "2rem";
          
          main.appendChild(submit);
          
          submit.addEventListener("click",function(event) {
              main.removeChild(button_1);
              main.removeChild(button_2);
              main.removeChild(button_3);
              main.removeChild(submit);
              question.textContent = question_array[1];
            var answers_2 = ["Lightest", "Darkest", "Highlighter"];
            var button_4 = document.createElement("button");
            var button_5 = document.createElement("button");
            var button_6 = document.createElement("button");
            
            button_4.setAttribute("class", "btn waves-effect waves-light grey");
            button_5.setAttribute("class", "btn waves-effect waves-light grey two");
            button_6.setAttribute("class", "btn waves-effect waves-light grey");
            
            button_4.textContent = answers_2[0];
            button_5.textContent = answers_2[1];
            button_6.textContent = answers_2[2];
           
            main.appendChild(button_4);
            main.appendChild(button_5);
            main.appendChild(button_6);
            
            button_4.onclick = function(){
            score = score - 5;
            button_4.disabled = true;
            button_4.setAttribute("class", "btn disabled");
        };
        
            button_6.onclick = function(){
            score = score - 5;
            button_6.disabled = true;
            button_6.setAttribute("class", "btn disabled");
        };
        
        button_5.addEventListener("click",function(event){
            button_4.disabled = true;
            button_6.disabled = true;
          button_5.setAttribute("class", "btn disabled two");
          score = score + 10;
          var submit_2 = document.createElement("button");
          submit_2.setAttribute("class", "btn waves-effect waves-light grey");
          
          submit_2.textContent = "Next Question";
          
          submit_2.style.display = "block";
          submit_2.style.marginLeft = "auto";
          submit_2.style.marginRight = "auto";
          submit_2.style.marginTop = "2rem";
          
          main.appendChild(submit_2);
          
          submit_2.addEventListener("click",function(event) {
              main.removeChild(button_4);
              main.removeChild(button_5);
              main.removeChild(button_6);
              main.removeChild(submit_2);
              question.textContent = question_array[2];
            var answers_3 = ["Lip Color", "Brightening Product", "Eyeshadow"];
            var button_7 = document.createElement("button");
            var button_8 = document.createElement("button");
            var button_9 = document.createElement("button");
            
            button_7.setAttribute("class", "btn waves-effect waves-light grey");
            button_8.setAttribute("class", "btn waves-effect waves-light grey two");
            button_9.setAttribute("class", "btn waves-effect waves-light grey");
            
            button_7.textContent = answers_3[0];
            button_8.textContent = answers_3[1];
            button_9.textContent = answers_3[2];
           
            main.appendChild(button_7);
            main.appendChild(button_8);
            main.appendChild(button_9);
            
            button_7.onclick = function(){
            score = score - 5;
            button_7.disabled = true;
            button_7.setAttribute("class", "btn disabled");
        };
        
            button_9.onclick = function(){
            score = score - 5;
            button_9.disabled = true;
            button_9.setAttribute("class", "btn disabled");
        };
        
        button_8.addEventListener("click",function(event){
            button_7.disabled = true;
            button_9.disabled = true;
          button_8.setAttribute("class", "btn disabled two");
          score = score + 10;
          
          var submit_3 = document.createElement("button");
          submit_3.setAttribute("class", "btn waves-effect waves-light grey");
          
          submit_3.textContent = "Next Question";
          
          submit_3.style.display = "block";
          submit_3.style.marginLeft = "auto";
          submit_3.style.marginRight = "auto";
          submit_3.style.marginTop = "2rem";
          
          main.appendChild(submit_3);
          
          submit_3.addEventListener("click",function(event) {
              main.removeChild(button_7);
              main.removeChild(button_8);
              main.removeChild(button_9);
              main.removeChild(submit_3);
              question.textContent = question_array[3];
            var answers_4 = ["Top of Cheekbones", "Temples", "Eyelids"];
            var button_10 = document.createElement("button");
            var button_11 = document.createElement("button");
            var button_12 = document.createElement("button");
            
            button_10.setAttribute("class", "btn waves-effect waves-light grey");
            button_11.setAttribute("class", "btn waves-effect waves-light grey two");
            button_12.setAttribute("class", "btn waves-effect waves-light grey");
            
            button_10.textContent = answers_4[0];
            button_11.textContent = answers_4[1];
            button_12.textContent = answers_4[2];
           
            main.appendChild(button_10);
            main.appendChild(button_11);
            main.appendChild(button_12);
            
            button_11.onclick = function(){
            score = score - 5;
            button_11.disabled = true;
            button_11.setAttribute("class", "btn disabled two");
        };
        
            button_12.onclick = function(){
            score = score - 5;
            button_12.disabled = true;
            button_12.setAttribute("class", "btn disabled");
        };
        
        button_10.addEventListener("click",function(event){
            button_12.disabled = true;
            button_11.disabled = true;
          button_10.setAttribute("class", "btn disabled");
          score = score + 10;
          var submit_4 = document.createElement("button");
          submit_4.setAttribute("class", "btn waves-effect waves-light grey");
          
          submit_4.textContent = "Next Question";
          
          submit_4.style.display = "block";
          submit_4.style.marginLeft = "auto";
          submit_4.style.marginRight = "auto";
          submit_4.style.marginTop = "2rem";
          
          main.appendChild(submit_4);
          
          submit_4.addEventListener("click",function(event) {
              main.removeChild(button_10);
              main.removeChild(button_11);
              main.removeChild(button_12);
              main.removeChild(submit_4);
              question.textContent = question_array[4];
            var answers_5 = ["Contour", "Eyeliner", "Mascara"];
            var button_13 = document.createElement("button");
            var button_14 = document.createElement("button");
            var button_15 = document.createElement("button");
            
            button_13.setAttribute("class", "btn waves-effect waves-light grey");
            button_14.setAttribute("class", "btn waves-effect waves-light grey two");
            button_15.setAttribute("class", "btn waves-effect waves-light grey");
            
            button_13.textContent = answers_5[0];
            button_14.textContent = answers_5[1];
            button_15.textContent = answers_5[2];
           
            main.appendChild(button_13);
            main.appendChild(button_14);
            main.appendChild(button_15);
            
            button_13.onclick = function(){
            score = score - 5;
            button_13.disabled = true;
            button_13.setAttribute("class", "btn disabled");
        };
        
            button_14.onclick = function(){
            score = score - 5;
            button_14.disabled = true;
            button_14.setAttribute("class", "btn disabled two");
        };
        
        button_15.addEventListener("click",function(event){
            button_13.disabled = true;
            button_14.disabled = true;
          button_15.setAttribute("class", "btn disabled");
          score = score + 10;
          var submit_5 = document.createElement("button");
          submit_5.setAttribute("class", "btn waves-effect waves-light grey");
          
          submit_5.textContent = "Finish Quiz";
          
          submit_5.style.display = "block";
          submit_5.style.marginLeft = "auto";
          submit_5.style.marginRight = "auto";
          submit_5.style.marginTop = "2rem";
          
          main.appendChild(submit_5);
          
          submit_5.addEventListener("click",function(event) {
              main.removeChild(button_13);
              main.removeChild(button_14);
              main.removeChild(button_15);
              main.removeChild(submit_5);
              main.removeChild(question);
              var your = document.createElement("h3");
              var total = document.createElement("h1");
              your.textContent = "Your Score:";
              
              total.textContent = score;
              
              var outof = document.createElement("h4");
              outof.textContent = "out of 50";
              
              main.appendChild(your);
              main.appendChild(total);
              main.appendChild(outof);
          });
           
            
            
          });
        });
          });
        });
          });
          
        });
          
          });
          
        });
          });
    });
    }); 
