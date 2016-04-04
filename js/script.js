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
        
        button_1.addEventListener("click", function(event) {
            button_1.setAttribute("class", "btn red");
        });
        
        button_2.addEventListener("click", function(event) {
            button_2.setAttribute("class", "btn red two");
        });
        
        button_3.addEventListener("click",function(event){
          button_3.setAttribute("class", "btn disabled");
          
          var submit = document.createElement("button");
          submit.setAttribute("class", "btn waves-effect waves-light grey");
          
          submit.textContent = "Correct! Next Question >";
          
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
            
            button_4.addEventListener("click", function(event) {
                button_4.setAttribute("class", "btn red");
            });
        
            button_6.addEventListener("click", function(event) {
                button_6.setAttribute("class", "btn red");
            });
        
        button_5.addEventListener("click",function(event){
          button_5.setAttribute("class", "btn disabled two");
          
          var submit_2 = document.createElement("button");
          submit_2.setAttribute("class", "btn waves-effect waves-light grey");
          
          submit_2.textContent = "Correct! Next Question >";
          
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
            
            button_7.addEventListener("click", function(event) {
                button_7.setAttribute("class", "btn red");
            });
        
            button_9.addEventListener("click", function(event) {
                button_9.setAttribute("class", "btn red");
            });
        
        button_8.addEventListener("click",function(event){
          button_8.setAttribute("class", "btn disabled two");
          
          var submit_3 = document.createElement("button");
          submit_3.setAttribute("class", "btn waves-effect waves-light grey");
          
          submit_3.textContent = "Correct! Next Question >";
          
          submit_3.style.display = "block";
          submit_3.style.marginLeft = "auto";
          submit_3.style.marginRight = "auto";
          submit_3.style.marginTop = "2rem";
          
          main.appendChild(submit_3);
          });
          
        });
          
          });
          
        });
    });
    }); 
});