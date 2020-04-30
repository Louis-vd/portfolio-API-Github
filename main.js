
//Récupération des données de l'user//
const myProfile = async () => {
    const requete = await fetch('https://api.github.com/users/Louis-vd');
    const json = await requete.json();

    
    const image = document.getElementById('photo');
    image.src = json.avatar_url;
    document.getElementById("login").innerHTML = json.login;
    document.getElementById('name').innerHTML = json.name;
    document.getElementById("followers").innerHTML = "Followers: " + json.followers;
    document.getElementById('following').innerHTML = "Following: " +json.following;
    document.getElementById('public_repos').innerHTML = "Public Repos: " +json.public_repos;
    
    
    console.log(json);

};

myProfile();


//Récupération des repos//
const listOfRepos = async () => {
    const infoMe = document.getElementById('repoInfo');
    const requete = await fetch('https://api.github.com/users/Louis-vd/repos');
    const json = await requete.json();


    json.forEach(element => {
        
        const link = document.createElement("a");
        link.href = element.html_url;
        link.textContent = element.full_name;
        link.style.cssText ='text-decoration:none; color:white; padding:25px; width: 30%; border: 1px solid white; margin: 10px;';
        infoMe.appendChild(link);
    
        /*const list = document.createElement("li");
        list.appendChild(link);
        infoMe.appendChild(list);
        list.style.cssText ='text-decoration:none;';*/

    });
    
    console.log(json);

};

listOfRepos();
