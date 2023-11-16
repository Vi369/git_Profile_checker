// api url

const apiUrl = "https://api.github.com/users/"

const getUserDeatails = async(username)=>{
    const responce = await fetch(apiUrl + username)
    const data = await responce.json()
    // console.log(data)

    const card = `
    <div id="card"
    class="max-w-sm rounded overflow-hidden shadow-lg "
    >
            <!-- image -->
            <img class="w-full rounded-xl" src=${data.avatar_url
            } alt="user git profile">
        <!-- user info -->

        <div class="px-6 py-4">
            <h1 class="font-bold text-xl mb-2">Name: ${data.name
            }</h1>
            <p class=" text-orange-700 text-base">Bio: ${data.bio}</p>
        </div>
        <div id="user-info"
        class="px-6 py-4"
       >
            
            <!-- followers following info -->
            
            <ul>
                <li>
                    <strong>Followers: ${data.followers}</strong>
                </li>

                <li>
                    <strong>Following: ${data.following
                    }</strong>
                </li>

                <li>
                    <strong>Public_Repos: ${data.public_repos
                    }</strong>
                </li>
            </ul>
        </div>
    </div>
            <!-- old repos user -->
            <h2 class="font-bold text-xl my-2 text-center">Old repos click and visit repos</h2>
        <div id="repos"
        class="px-6 pt-4 pb-2">

           
        </div>
    `
//     `
//     <div class="max-w-sm rounded overflow-hidden shadow-lg">
//   <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
//   <div class="px-6 py-4">
//     <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
//     <p class="text-gray-700 text-base">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
//     </p>
//   </div>
//   <div class="px-6 pt-4 pb-2">
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//   </div>
// </div>
//     `







    main.innerHTML = card;
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
            console.log(item)
            const elem = document.createElement('a');
            elem.href = item.html_url;
            elem.innerText = item.name;
            elem.target = "_blank"
            repos.appendChild(elem);

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




