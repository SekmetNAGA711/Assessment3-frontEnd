console.log("hello world");

let image = document.querySelector('#image')


function handleSubmit(evt) {

	form = alert('Your details have been successfully submitted!')
	

	
}

function giveCompliment(evt){
   image = alert('You are a great explorer!')
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', giveCompliment)