async function fetchcomments(){
    let response=await fetch('https://jsonplaceholder.typicode.com/users');
    userlist= await response.json();
    console.log(userlist)
}


fetchcomments();
