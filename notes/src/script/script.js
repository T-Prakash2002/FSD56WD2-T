menu=['coffee','tea','cake','sandwitch']

const d=document.createElement('div');

const paragraph=document.createElement('p');


const ul=document.createElement('ul');

menu.map(element =>{
    let item=document.createElement('li');
    item.innerHTML=element;
    ul.appendChild(item);
});

d.append(ul);
console.log(document.body.appendChild(d));