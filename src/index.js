// api url

const apiUrl = "https://api.github.com/users/"

const getUserDeatails = async(username)=>{
    const responce = await fetch(apiUrl + username)
    const data = await responce.json();

document.querySelector("#card").innerHTML = `
<div id="card" class="max-w-sm rounded overflow-hidden shadow-lg">
    <!-- User Image -->
    <img class="w-full rounded-xl" src="${data.avatar_url}" alt="user git profile">

    <!-- User Info -->
    <div class="px-6 py-4">
        <h1 class="font-bold text-xl mb-2">Name: ${data.name}</h1>
        <p class=" text-base">Bio: ${data.bio}</p>
    </div>

    <!-- Followers/Following/Public Repos Info -->
    <div id="user-info" class="px-6 py-4">
        <ul>
            <li><strong>Followers:</strong> ${data.followers}</li>
            <li><strong>Following:</strong> ${data.following}</li>
            <li><strong>Public Repos:</strong> ${data.public_repos}</li>
        </ul>
    </div>
</div>`;

document.querySelector("#oldRepo").innerHTML = `
<!-- Old Repos Section -->
        <h2 class="font-bold hover:underline text-xl mb-2 text-center">Old Repositories</h2>
        <div id="repos"
        class=" flex flex-wrap gap-4 h-auto">
`
   
    getRepos(username)
}

// getRepos function definition 
const getRepos = async(username)=>{
    // repos id 
    const repos = document.getElementById('repos');
    const responce = await fetch(apiUrl + username + '/repos')
    const data = await responce.json();
    const classList = 
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

const handleSubmit =()=>{
    const inputValue = document.getElementById('search');
    if(inputValue.value == "") alert("Arey bhaii || input can't be Empty")

    else{
        getUserDeatails(inputValue.value);
    }
    return false;
}




