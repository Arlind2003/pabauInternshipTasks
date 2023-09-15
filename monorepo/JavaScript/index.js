window.addEventListener('load', ()=>{
    const CHECKBOXES_NUM = 4;
    let changed = false;
    let shuffleButton = document.getElementById("shuffle");
    let changeButton = document.getElementById("change");
    let showButton = document.getElementById("show");
    const checkBoxValues = {
          false: {
              values: ["Facebook", "Google", "GitHub", "LinkedIn"]
          },
          true: {
              values: ["Internship", "Pabau", "Employment", "Career"]
          }
    };

    shuffleButton.addEventListener("click", ()=>{
        const limit = Math.floor(CHECKBOXES_NUM/2);
        for(let i = 0; i < limit; i++){
            const checkbox1 = document.getElementById("checkbox"+i);
            const text1 = document.getElementById("checkbox-text"+i);

            const checkbox2 = document.getElementById("checkbox"+(CHECKBOXES_NUM-i-1));
            const text2 = document.getElementById("checkbox-text"+(CHECKBOXES_NUM-i-1));
           try {
               const refVal = checkbox1.value;
               checkbox1.value = checkbox2.value;
               checkbox2.value = refVal;

               const refText = text1.innerText;
               text1.innerText = text2.innerText;
               text2.innerText = refText;
           }catch (e) {
               console.log(e);
           }
        }
    });
    changeButton.addEventListener("click", ()=>{
          const values = checkBoxValues[changed].values;

          for(let i = 0; i < CHECKBOXES_NUM; i++){
            const checkbox = document.getElementById("checkbox"+i);
            const text = document.getElementById("checkbox-text"+i);
           try {
               text.innerText = values[i];
               checkbox.value = values[i];
           }catch (e) {
               console.log(e);
           }
        }
        changed = !changed;
    });
    showButton.addEventListener('click', ()=>{
        let index = 0;
        for(let i = 0; i < CHECKBOXES_NUM; i++){
           const checkbox = document.getElementById("checkbox"+i);

           if(checkbox.checked) {
               const text = document.getElementById("value" + index++);
               text.parentElement.style.display = "flex";
               text.innerText = checkbox.value;
           }
        }
        const container = document.getElementById("selected-values-container");
        if(index == 0){
           container.style.display = "none";
           return;
        }else{
           container.style.display = "flex";
        }
        for(let i = index; i < CHECKBOXES_NUM; i++){
            const text = document.getElementById("value"+index++);
            text.parentElement.style.display = "none";
        }
    })
})