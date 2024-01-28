const expensive = ()=>{
    console.log("expensive");
}
window.addEventListener("resize" , betterExpensive)


//for better expensive function throttle expensive function

const betterExpensive = throttle(expensive, limit);
                                 //( "" , 100)

const throttle =  (func , limit) =>{
    let flag = true;
    return function(){
       if(flag){ 
        func();
        flag = false;
        setTimeout(()=>{
            flag = true
          }, limit)
      } 
    }
       
}