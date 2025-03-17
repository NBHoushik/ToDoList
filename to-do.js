function add(){
  d=document.querySelector("#d1");
  v=document.querySelector("#txt");
    dv=document.createElement("div");
    let unq="div"+new Date().getTime();
    dv.id=unq;
    dv.className="divstyling";
    para=document.createElement("p");
    para.className='parastyling'
    para.style.display="inline-block";
    para.innerText="🥶"+""+""+v.value;
    btn=document.createElement("button");
    btn.innerText="✔";
    btn.className="buttonstyling";
    btn.style.color="green";
    //complete function
    btn.onclick=function(){
      dvcomplete=document.querySelector("#"+unq);

      p=dvcomplete.querySelector("p");
      p.style.textDecoration ="line-through";
      dvcomplete.style.backgroundColor="#d4f4dd";
      dvcomplete.style.width="50%";
      
    };
    //
    btn2=document.createElement("button");
    btn2.innerText="❌";
    btn2.className="buttonstyling";
    //remove function
    btn2.onclick=function(){
      dvremove=document.querySelector("#"+unq);
      dvremove.remove();
    };
    //
    dv.appendChild(para);
    dv.appendChild(btn);
    dv.appendChild(btn2);
    d.appendChild(dv);
    v.value=""

}



