import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = [];
followersArray.push('Spencerp34')
followersArray.push('tetondan')
followersArray.push('dustinmyers')
followersArray.push('justsml')
followersArray.push('luishrd')
followersArray.push('bigknell')


const allCards = followersArray.forEach( (item) =>
  axios
    .get(`https://api.github.com/users/${item}`)
    .then((res) => {
      const userInfo = res.data
        const finishedProduct = cardMaker({ avatar_url: userInfo.avatar_url, name: userInfo.name, login: userInfo.login, location: userInfo.location, html_url: userInfo.html_url, followers: userInfo.followers, following: userInfo.following, bio: userInfo.bio})
        document.querySelector('.cards').appendChild(finishedProduct)
        // console.log(finishedProduct)

    })
    .catch((error) => {
      console.log(error)
    })
)


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



function cardMaker ({avatar_url, name, login, location, html_url, followers, following, bio}){
  const userCard = document.createElement('div')
  userCard.classList.add('card')
  const profilePic = document.createElement('img')
  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  const nameText = document.createElement('h3')
  nameText.classList.add('name')
  const userNameText = document.createElement('p')
  userNameText.classList.add('username')
  const locationText = document.createElement('p')
  const profileText = document.createElement('p')
  const profileLink = document.createElement('a')
  const follwersText = document.createElement('p')
  const followingText = document.createElement('p')
  const bioText = document.createElement('p')

  profilePic.src = avatar_url
  nameText.textContent = name
  userNameText.textContent = login
  locationText.textContent = location
  profileText.textContent = `Profile: `
  profileLink.textContent = ` ${html_url}`
  profileLink.href = html_url
  follwersText.textContent = `Followers: ${followers}`;
  followingText.textContent = `Following: ${following}`;
  bioText.textContent = bio 

  document.querySelector('.cards').appendChild(userCard)
  userCard.appendChild(profilePic)
  userCard.appendChild(cardInfo)
  cardInfo.appendChild(nameText)
  cardInfo.appendChild(userNameText)
  cardInfo.appendChild(locationText)
  cardInfo.appendChild(profileText)
  profileText.appendChild(profileLink)
  cardInfo.appendChild(follwersText)
  cardInfo.appendChild(followingText)
  cardInfo.appendChild(bioText)

  return userCard
}


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
