
let display=document.getElementById('form-i');
let btn=document.getElementById('btn')

function fetchid(id){

    fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then(response => response.json())
        .catch(error => console.log("Error fetching users: ",error))
        .then(users=>{
            return users[0]
        })
        .then((user)=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        })
        .then((response=>response.json()))
        .catch(error => console.log("Error fetching users: ",error))
        .then(posts=>{
            return posts[0]
        })
        .then(post=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${post.id}`);
        })
        .then(response=>response.json())
        .catch(error => console.log("Error fetching users: ",error))

        .then(comments=>{
            
            comments.map(element => {
               
                let div=document.createElement('div');
                div.className='col m-5'
                div.innerHTML=`
                    <div class="card p-2 ">
                        <div class="card-body">
                            <p>
                                <h5>Id: ${element.id}</h5><br>
                                <h5>User Id: ${element.userId}</h5><br>
                                <h5>Title: ${element.title}</h5><br>
                                <h5>Body: ${element.body}</h5><br>
                            </p>
                        </div>
                    
                    </div>


                `
                display.appendChild(div);
            });
            
            

        })
}

function getId(e){

    e.preventDefault();

    let id=e.target.elements.Id.value;

    fetchid(id);
}

