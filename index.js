const checkboxlist=document.querySelectorAll(".custom_check")
const inputfields=document.querySelectorAll(".goal_input")
const errorlabel=document.querySelector(".error_label")
const progressbar=document.querySelector(".progress_bar")
const progressvalue=document.querySelector(".progress_value")

checkboxlist.forEach(function(ckeckbox,index){
   ckeckbox.addEventListener("click",function(){

    const allgoaladded=[...inputfields].every(function(input){
      return input.value
    })

    if(allgoaladded){
        ckeckbox.parentElement.classList.toggle('completed')
        updateprogress()
    }else{
        progressbar.classList.add("show_error")
    }

   })
})

function updateprogress(){
  const completedgoals=document.querySelectorAll('.completed').length
  const totalgoals=inputfields.length;
  const progresspercentage= (completedgoals/totalgoals)*100;
  progressvalue.style.width= `${progresspercentage}%`
  progressvalue.querySelector("span").textContent=`${completedgoals}/${totalgoals} completed`
}

