const UserSocialMedia = {
  github: 'camposerick',
  linkedin: 'in/camposerick',
  facebook: 'erick.aguero.7',
  instagram: 'camposerick_',
  twitter: '_erickcampos'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${UserSocialMedia[social]}`
  }
}

function getGithubInfo() {
  const url = `https://api.github.com/users/${UserSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userPhoto.src = data.avatar_url
    })
}

changeSocialMediaLinks()
getGithubInfo()
