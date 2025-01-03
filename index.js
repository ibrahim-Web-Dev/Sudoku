for (let index = 1; index <= 9; index++) {
    for (let i = 1; i <=9 ; i++) {
        const element = document.querySelector("#box"+index+i);
        restrictToNum(element)
    }
}
function restrictToNum(e) {
    e.addEventListener("keydown",(event)=>{
        event.preventDefault()
        if(isNaN(event.key)){
            return;
        }
        else if (Number(event.key)<1) {
            e.textContent=1;
            return;
        }
        e.textContent="";
        e.textContent=event.key
    })

}
