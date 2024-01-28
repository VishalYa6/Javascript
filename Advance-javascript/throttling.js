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
        let context = this
        args = arguments
       if(flag){ 
        func.apply((context, args))
        func();
        flag = false;
        setTimeout(()=>{
            flag = true
          }, limit)
      } 
    }
       
}