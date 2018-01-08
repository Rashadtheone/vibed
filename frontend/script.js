const artist = document.querySelector('.artist')
const submit = document.getElementById('submit')
const editSubmit = document.getElementById('submit-edit')
const deleteButton = document.getElementById('delete')

let currentlyEditing = ''

function editModal (artist) {
  $('#modal-edit').modal('open')
  const nameEdit = document.getElementById('name-edit')
  const soundcloudEdit = document.getElementById('soundcloud-edit')
  const itunesEdit = document.getElementById('itunes-edit')
  const spotifyEdit = document.getElementById('spotify-edit')
  const twitterEdit = document.getElementById('twitter-edit')
  const instagramEdit = document.getElementById('instagram-edit')
  const snapchatEdit = document.getElementById('snapchat-edit')
  const facebookEdit = document.getElementById('facebook-edit')
  const flowEdit = document.getElementById('flow-edit')
  const deliveryEdit = document.getElementById('instagram-edit')
  const styleEdit = document.getElementById('style-edit')
  const visualsEdit = document.getElementById('visuals-edit')
  const overallEdit = document.getElementById('unique-edit')
  const articleEdit = document.getElementById('article-edit')

  nameEdit.value = artist.name
  soundcloudEdit.value = artist.soundcloud
  itunesEdit.value = artist.itunes
  spotifyEdit.value = artist.spotify
  twitterEdit.value = artist.twtitter
  instagramEdit.value = artist.instagram
  snapchatEdit.value = artist.snapchat
  facebookEdit.value = artist.facebook
  flowEdit.value = artist.flow
  deliveryEdit.value = artist.delivery
  styleEdit.value = artist.style
  visualsEdit.value = artist.visuals
  overallEdit.value = artist.unique
  articleEdit.value = artist.article

  currentlyEditing = artist._id
}

function addArtist (artistData) {
  artist.innerHTML = ''
  artistData.forEach(artist => {
    if (!artist.img) return

    const imageNode = document.createElement('img')
    imageNode.setAttribute('src', artist.img)
    imageNode.classList.add('artist')

    imageNode.addEventListener('click', () => { editModal(artist) })

    artist.appendChild(imageNode)
  })
}

axios.get('http://localhost:7000/vibed').then(res => {
  addArtist(res.data)
})

editSubmit.addEventListener('click', (e) => {
    // submit put request to artist
  const name = document.getElementById('name-edit').value
  const soundcloud = document.getElementById('soundcloud-edit').value
  const itunes = document.getElementById('itunes-edit').value
  const spotify = document.getElementById('spotify-edit').value
  const twitter = document.getElementById('twitter-edit').value
  const instagram = document.getElementById('instagram-edit').value
  const snapchat = document.getElementById('snapchat-edit').value
  const facebook = document.getElementById('facebook-edit').value
  const flow = document.getElementById('flow-edit').value
  const delivery = document.getElementById('instagram-edit').value
  const style = document.getElementById('style-edit').value
  const visuals = document.getElementById('visuals-edit').value
  const overall = document.getElementById('unique-edit').value
  const article = document.getElementById('article-edit').value

  axios.put(`http://localhost:7000/vibed`, {
    name,
    soundcloud,
    itunes,
    spotify,
    twitter,
    instagram,
    snapchat,
    facebook,
    flow,
    delivery,
    style,
    visuals,
    overall,
    article
  }).then((resp) => {
    console.log(resp)
    addArtist(resp.data)
    $('modal-edit').modal('close')
  })
})

deleteButton.addEventListener('click', (e) => {
  axios.delete(`http:/localhost:7000/artist/${currentlyEditing}`)
.then((resp) => {
  addArtist(resp.data)
  $('modal-edit').modal('close')
})
})

$('.modal').modal()
