const inputBox=document.getElementById("inputBox")
const fromBox=document.getElementById("fromBox")
const toBox=document.getElementById("toBox")
const calc=document.getElementById("calc")
const result=document.getElementById("result")
const history=document.getElementById("history")
const moonNight=document.getElementsByClassName("moonNight")[0];
const body=document.getElementsByTagName("body")
const moodIcon=document.getElementById("moodIcon")
// const removeCommaAndChangeNumber=(x)=>{
//     return  Number(x.replace(",",""))
// }
// const dataInFromTo=(x,y,z)=>{
//     let o =document.createElement("option")
//     o.append(y)
//     o.setAttribute("value",removeCommaAndChangeNumber(z))
//     x.appendChild(o)
// }
//     for(x in data.rates){
//         dataInFromTo(fromBox,x,data.rates[x])
//         dataInFromTo(toBox,x,data.rates[x])
//     }
    
// calc.addEventListener("click",(e)=>{
//     e.preventDefault()
//     console.log(inputBox.value,fromBox.value,toBox.value)
// })
const removeCommaAndChangeNumber=(x)=>{
    return Number(x.replace(",",""))
}
const dataInFromTo=(x,y,z)=>{
    const o=document.createElement("option")
    o.append(y)
    o.setAttribute("value",removeCommaAndChangeNumber(z))
    x.append(o)
}
for(x in data.rates){
   dataInFromTo(fromBox,x,data.rates[x])
   dataInFromTo(toBox,x,data.rates[x])
}

const record=(x)=>{
    const historyTr=document.createElement("tr")
    x.map((el)=>{
        let historyTd=document.createElement("td")
        historyTd.append(el)
        historyTr.appendChild(historyTd)
        history.appendChild(historyTr)
    })
}
calc.addEventListener("click",(e)=>{
    e.preventDefault()
    const rowSpacer=document.getElementById("rowSpacer")
    if(rowSpacer){
        rowSpacer.remove()
    }
    let inputValue=inputBox.value;
    let fromValue=fromBox.value;
    let toValue=toBox.value;
    const first=inputValue*fromValue;
    const second=first/toValue;
    result.textContent=second.toFixed(2)
    let recordResult=result.textContent
    // let recordResult=second.toFixed(2)
    // result.textContent=recordResult
    let fromText=inputValue+" "+fromBox.options[fromBox.selectedIndex].textContent;
    let toText=toBox.options[toBox.selectedIndex].textContent;
    let date=new Date().toLocaleTimeString()
    const arr=[date,fromText,toText,recordResult];
    record(arr)
    localStorage.setItem("localRecord",history.innerHTML)
    inputBox.value="";
    fromBox.value="";
    toBox.value="1";
    inputBox.focus()

})  
const saveLocal=()=>{
    if(localStorage.getItem("localRecord")){
        history.innerHTML=localStorage.getItem("localRecord")
    }else{
        history.innerHTML=`<tr><td id="rowSpacer" colspan="4">there is no record</td></tr>`
    }
}
saveLocal()
moonNight.addEventListener("click",()=>{
    document.body.classList.toggle("changeMood")
    moodIcon.classList.toggle("fa-sun")
})