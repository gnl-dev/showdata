/*********************************
 * Name : GnlCreateDataSheet
 * Version : 0.alpha1 05002019
 * About : Show table informations
 * Author :  GNL
 * Company : GNL Company
 * Comment : To do what you dont like it !
 * Dependences : gnl-show-data.js
 **************************************************/
console.log("<Gnl: Modal Module is loading>");
"use strict";

function GnlModal(title,el_body) {
  title = 'Formulaire' || title;

  let bg = document.createElement("div");
  bg.className= "gnl-modal-bg";
  bg.addEventListener("click",function(e) {
    let target = e.target || e.srcElement;
    if(e.target === this)this.remove();
  });
  let modal = document.createElement("div");
  let el = document.createElement("div");

  el.className = "title";
  el.textContent = title;
  modal.appendChild(el); // title
  
  el = document.createElement("div");
  el.className = "body";
  let e = GnlShowDataOpt.data_list.length/GnlShowDataOpt.nb;
  e= e+1 * GnlShowDataOpt.nb <= GnlShowDataOpt.data_list.length?e:e+1;
  console.log("=+> " + Math.round(e));

  for(let i=0;i<GnlShowDataOpt.data_title.length;i++) {
    //Afficher les éléments du tableau
    el.innerHTML+=`<span>${data_title[i]} : </span>`;
    el.innerHTML+=`<input class='' type='text' value='' placeholder='${data_title[i]}'>`;

  }

  modal.appendChild(el); // body
 
  el = document.createElement("div");
  el.className = "footer";
  modal.appendChild(el); // footer

  btn = document.createElement("span");
  btn.className="primary";
  btn.textContent = "Valider";
  btn.addEventListener("click",function(){
    data.push(['ajout 01','ajout 02']);

  });
  el.appendChild(btn);
  btn = document.createElement("span");
  btn.textContent = "Close";
  btn.className = "close";
  btn.addEventListener('click',function(e) {
    document.body.firstChild.remove();
  });
  el.appendChild(btn);

  bg.appendChild(modal);
  document.body.firstChild.before(bg);
}