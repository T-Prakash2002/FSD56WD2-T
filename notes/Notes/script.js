const Allurl=`https://emojihub.yurace.pro/api/all`;

const RandomUrl=`https://emojihub.yurace.pro/api/random/category/smileys-and-people`;

const displayAll=document.getElementById("displayAll");

const DisplayRandom=document.getElementById("randomemoji");

async function AllfetchUrl(url){

    return fetch(url)
        .then(response=>response.json())
        .catch(()=>{
            console.log("Fetch Advice data Error");
        })


}

function Display(emoji,display){

    const card=document.createElement('div');
        card.className='col col-lg-2 col-sm-6 col-md-3 h-100 p-4 h-50';
        card.innerHTML=`
            <div class="card border-0 p-2" id="${emoji.name}">
            <a href="#search-row" class="link-secondary link-offset-2 link-underline-opacity-0">
                <div class="card-img-top text-center pt-5">
                    <h1><span>${emoji.htmlCode[0]}</span></h1>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${emoji.name}</h5>
                    <p class="card-text">Category: ${emoji.category}</p>
                    <p class="card-text">Group: ${emoji.group}</p>
                </div>
               </a>
            </div>   
       
        `

    display.appendChild(card);
}
async function loadEmoji(){

    AllfetchUrl(Allurl).then((response)=>{
        response.map((data)=>{
        Display(data,displayAll);
    })
    })

}

loadEmoji();


async function Clickbtn(){

   AllfetchUrl(RandomUrl).then((response)=>{
    
    let emoji=`
        <div class="card text-center emoji">
        <a class="link-danger link-offset-2 link-underline-opacity-0" href="#${response.name}">
            <h1 class="logo pt-5">${response.htmlCode[0]}</h1>
                    <h5 class="pt-5">${response.name}</h5>
        </a>
                
        </div>
    `
        DisplayRandom.innerHTML=emoji;
    })
    
}

