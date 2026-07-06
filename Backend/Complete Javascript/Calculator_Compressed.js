// demo 27.html file se connect h   
 

function getData()
 {
              var t1 = document.querySelector("#t1")
             var t2 = document.querySelector("#t2")
            var m1= document.querySelector("#msg")
              var num1= parseFloat(t1.value)
              var num2= parseFloat(t2.value)
 }
 function addfun()
       {
          
              getData()
              var res=(num1+num2)
              m1.innerHTML= `<b>Result is : </b> ${res.toFixed(3)}`      
            
       }

       function subfun()
       {
           
             getData()
              var res=(num1-num2)
               

              m1.innerHTML= `<b>Result is : </b> ${res.toFixed(3)}`  
       }

       function Mulfun()
       {
           
              getData()
              var res=(num1*num2)
              m1.innerHTML= `<b>Result is : </b> ${res.toFixed(3)}`      
            
       }

       function Divfun()
       {
           
             getData()
              var res=(num1/num2)
              m1.innerHTML= `<b>Result is : </b> ${res.toFixed(3)}`       
            
       }
