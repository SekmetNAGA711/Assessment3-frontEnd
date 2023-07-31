let favoriteColor = document.getElementById('color')
let favoritePlace = document.getElementById('place')
let favoriteRitual = document.getElementById('ritual')

function favColor () {
    favoriteColor = alert('My Favorite colors are purple and green!')

}

function favPlace () {
    favoritePlace = alert('My favorite place is Hawaii!')
}

function favRitual() {
    favoriteRitual = alert('My favorite ritual is waking up early to meditate, peacefully preparing for the day with warm tea and workout in the evening')
}

favoriteColor.addEventListener('click', favColor)
favoritePlace.addEventListener('click', favPlace)
favoriteRitual.addEventListener('click', favRitual)

