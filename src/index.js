// api url
const apiUrl = "https://api.github.com/users/"
const loadingSpinner = document.querySelector("#loadingSpinner");

const getUserDeatails = async(username)=>{
    loadingSpinner.style.display = "block"; // loading spinner on 
    const responce = await fetch(apiUrl + username)
        const data = await responce.json();
        if(data!== null ){
            loadingSpinner.style.display = "none"; // loading spinner off
        }

// card 
document.querySelector("#card").innerHTML = `
<div class="max-w-sm rounded overflow-hidden shadow-lg">
    <!-- User Image -->
    <img class="w-full rounded-xl" src="${data.avatar_url}" alt="user git profile">

    <!-- User Info -->
    <div class="px-6 py-4">
        <h1 class="font-bold text-xl mb-2">Name: ${data.name}</h1>
        <p class=" text-base">Bio: ${data.bio}</p>
    </div>
</div>`;

// old reporsitory
document.querySelector("#oldRepo").innerHTML = `
<!-- Old Repos Section -->
        <h2 class="font-bold text-orange-600 text-xl mb-2 text-center"> <strong>Public Repos: </strong>  ${data.public_repos} :) Click and visit</h2>
        <div id="repos"
        class=" flex flex-wrap gap-4 ">
`
// user follewers and following info 
document.querySelector('#user-info').innerHTML = `
<!-- Followers/Following/Public Repos Info -->
    <ul class = "flex items-center justify-evenly">
        <li><strong>
        <a href="#" class = "hover: underline hover:text-orange-500">Followers:</a></strong> ${data.followers}</li>
        <li><strong>
        <a href="#" class = " hover: underline hover:text-orange-500">Following:
        </a></strong> ${data.following}</li>
    </ul>`
    getRepos(username)

}
// getuserDetails function end here 


// getRepos function definition 
const getRepos = async(username)=>{
    // repos id 
    const repos = document.getElementById('repos');
    const responce = await fetch(apiUrl + username + '/repos')
    const data = await responce.json();
    data.forEach(
        (item)=>{
            const div = document.createElement('div');
            const elem = document.createElement('a');
            elem.href = item.html_url;
            elem.innerText = item.name;
            elem.target = "_blank"
            div.appendChild(elem);
            repos.appendChild(div);

        }
    )

}


// Serch when press enter key 
document.addEventListener("keydown", e=>{
    if(e.key==="Enter") handleSubmit()
})


const handleSubmit =()=>{
    const inputValue = document.getElementById('search');
    if(inputValue.value == "") alert("Arey bhaii || input can't be Empty")

    else{
        getUserDeatails(inputValue.value);
    }
    return false;
}




