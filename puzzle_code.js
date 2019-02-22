function fun(x,y)
{
   x.value=y.value;
    y.value="";
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    if(document.getElementById(0).value!="" ) document.getElementById(0).style.color='red';
    else
        document.getElementById(0).style.color='black';
     if(document.getElementById(1).value!="1" ) document.getElementById(1).style.color='red'; else
        document.getElementById(1).style.color='black';
     if(document.getElementById(2).value!="2" ) document.getElementById(2).style.color='red';else
        document.getElementById(2).style.color='black';
     if(document.getElementById(3).value!="3" ) document.getElementById(3).style.color='red';else
        document.getElementById(3).style.color='black';
     if(document.getElementById(4).value!="4" ) document.getElementById(4).style.color='red';else
        document.getElementById(4).style.color='black';
     if(document.getElementById(5).value!="5" ) document.getElementById(5).style.color='red';else
        document.getElementById(5).style.color='black';
     if(document.getElementById(6).value!="6" ) document.getElementById(6).style.color='red';else
        document.getElementById(6).style.color='black';
     if(document.getElementById(7).value!="7" ) document.getElementById(7).style.color='red';else
        document.getElementById(7).style.color='black';
     if(document.getElementById(8).value!="8" ) document.getElementById(8).style.color='red';else
        document.getElementById(8).style.color='black';
 if(document.getElementById(0).value=="" && document.getElementById(1).value=="1" && document.getElementById(2).value=="2" && document.getElementById(3).value=="3" && document.getElementById(4).value=="4" && document.getElementById(5).value=="5" && document.getElementById(6).value=="6" && document.getElementById(7).value=="7" && document.getElementById(8).value=="8"){
         alert("YOU WIN, CONGRATULATIONS! "+"You Take= "+localStorage.clickcount+" Steps");
         
       localStorage.clickcount = 0;
    } 
}
function myFunction(button){
      
       
        var val=button.id;
    
        switch(val){
                case '6' :
                if(document.getElementById(0).value==""){
    fun(document.getElementById(0),document.getElementById(6));
                }
                else if(document.getElementById(5).value==""){
    fun(document.getElementById(5),document.getElementById(6));
                }
                else if(document.getElementById(3).value==""){
    fun(document.getElementById(3),document.getElementById(6));
                }
                break;
                
                case '8' :
                if(document.getElementById(0).value==""){
                  var a=document.getElementById(0);
                    var b=document.getElementById(8);
                   fun(a,b);
                }
                else if(document.getElementById(5).value==""){
                     var a=document.getElementById(5);
                    var b=document.getElementById(8);
                   fun(a,b);
                }
                else if(document.getElementById(7).value==""){
                   var a=document.getElementById(7);
                    var b=document.getElementById(8);
                   fun(a,b);
                }
                break;
                
                case '4' :
                if(document.getElementById(1).value==""){
                 
                  var a=document.getElementById(1);
                    var b=document.getElementById(4);
                   fun(a,b);
                }
                else if(document.getElementById(7).value==""){
                     var a=document.getElementById(7);
                    var b=document.getElementById(4);
                   fun(a,b);
                }
                else if(document.getElementById(5).value==""){
                     var a=document.getElementById(5);
                    var b=document.getElementById(4);
                   fun(a,b);
                }
                break;
            
                case '2' :
                if(document.getElementById(1).value==""){
                   var a=document.getElementById(1);
                    var b=document.getElementById(2);
                   fun(a,b);
                }
                else if(document.getElementById(3).value==""){
                     var a=document.getElementById(3);
                    var b=document.getElementById(2);
                   fun(a,b);
                }
                else if(document.getElementById(5).value==""){
                     var a=document.getElementById(5);
                    var b=document.getElementById(2);
                   fun(a,b);
                }
                break;
                case '5' :
                if(document.getElementById(4).value==""){
                   var a=document.getElementById(4);
                    var b=document.getElementById(5);
                   fun(a,b);
                }
                else if(document.getElementById(2).value==""){
                   var a=document.getElementById(2);
                    var b=document.getElementById(5);
                   fun(a,b);
                }
                else if(document.getElementById(6).value==""){
                    var a=document.getElementById(6);
                    var b=document.getElementById(5);
                   fun(a,b);
                }
                else if(document.getElementById(8).value==""){
                   var a=document.getElementById(8);
                    var b=document.getElementById(5);
                   fun(a,b);
                }
                break;
                
                case '3' :
                if(document.getElementById(6).value==""){
                 var a=document.getElementById(6);
                    var b=document.getElementById(3);
                   fun(a,b);
                }
                else if(document.getElementById(2).value==""){
                   var a=document.getElementById(2);
                    var b=document.getElementById(3);
                   fun(a,b);
                }
                break;
                
                case '0' :
                if(document.getElementById(6).value==""){
                 var a=document.getElementById(6);
                    var b=document.getElementById(0);
                   fun(a,b);
                }
                else if(document.getElementById(8).value==""){
                    var a=document.getElementById(8);
                    var b=document.getElementById(0);
                   fun(a,b);
                }
                break;
                
                case '1' :
                if(document.getElementById(2).value==""){
                 
                   var a=document.getElementById(2);
                    var b=document.getElementById(1);
                   fun(a,b);
                }
                else if(document.getElementById(4).value==""){
                    var a=document.getElementById(4);
                    var b=document.getElementById(1);
                   fun(a,b);
                }
                break;
                
                case '7' :
                if(document.getElementById(4).value==""){
                  var a=document.getElementById(4);
                    var b=document.getElementById(7);
                   fun(a,b);
                }
                else if(document.getElementById(8).value==""){
                             var a=document.getElementById(8);
                    var b=document.getElementById(7);
                   fun(a,b);
        
                }
                break;
        }
   
    }