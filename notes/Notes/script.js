
const Apikey='e279ad601d9b438681641dec8fb7c873';

const d=document.getElementById('display');

async function fetchurl(ip){
    const options = {method: 'GET'};


    let response=await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${Apikey}&ip_address=${ip}`,options);

    let  res=await response.json();

    return (res);
}

function display(query){

    const card=document.createElement('div');
        card.className='col bg-body-secondary p-3 rounded';
        card.innerHTML=`
                    <h3 class="pb-2">Details</h3>
                    <div class="card rounded p-2">
                        <div class="card-header">
                        <h2>${query.connection.autonomous_system_organization}</h2>
                        </div>
                        <div class="card-body">
                            <p><strong>IP Address:</strong>  ${query.ip_address}</p>

                            <p><strong>Connection_Type:</strong> ${query.connection.connection_type}</p>

                            <p><strong>Continent:</strong> ${query.continent}</p>

                            <p><strong>Country:</strong> ${query.country}</p>

                            <p><strong>Region:</strong> ${query.region}</p>

                            <p><strong>City:</strong> ${query.city}</p>

                            <p><strong>City:</strong> ${query.postal_code}</p>

                            <p><strong>Lon:</strong> ${query.longitude}</p>

                            <p><strong>Lat:</strong> ${query.latitude}</p>

                            <p><strong>Current_time:</strong> ${query.timezone.current_time}</p>

                            <p><strong>Currency:</strong> ${query.currency.currency_name}</p>

                        </div>
                    </div>

        `
d.appendChild(card);
}

async function s(){
    let ip=document.getElementById('ip').value;
    
    let response=await fetchurl(ip);
   
    display(response);

}