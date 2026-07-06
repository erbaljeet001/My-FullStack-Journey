    // demo 26.html file se connect h  

function addfun()
       {
           var t1 = document.querySelector("#t1")
             var t2 = document.querySelector("#t2")
              var num1= parseFloat(t1.value)
              var num2= parseFloat(t2.value)

              var res=(num1+num2)
               
              var m1= document.querySelector("#msg")

              m1.innerHTML= `<b>Result is : </b> ${res.toFixed(3)}`      
            
       }

       function subfun()
       {
           var t1 = document.querySelector("#t1")
             var t2 = document.querySelector("#t2")
              var num1= parseFloat(t1.value)
              var num2= parseFloat(t2.value)

              var res=(num1-num2)
               
              var m1= document.querySelector("#msg")

              m1.innerHTML= `<b>Result is : </b> ${res.toFixed(3)}`  
       }

       function Mulfun()
       {
           var t1 = document.querySelector("#t1")
             var t2 = document.querySelector("#t2")
              var num1= parseFloat(t1.value)
              var num2= parseFloat(t2.value)

              var res=(num1*num2)
               
              var m1= document.querySelector("#msg")

              m1.innerHTML= `<b>Result is : </b> ${res.toFixed(3)}`      
            
       }

       function Divfun()
       {
           var t1 = document.querySelector("#t1")
             var t2 = document.querySelector("#t2")
              var num1= parseFloat(t1.value)
              var num2= parseFloat(t2.value)

              var res=(num1/num2)
               
              var m1= document.querySelector("#msg")

              m1.innerHTML= `<b>Result is : </b> ${res.toFixed(3)}`       
            
       }
