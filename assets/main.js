const API = 'https://star-wars-characters.p.rapidapi.com/46DYBV/star_wars_characters';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33283a5c7amsh7860f15ec94d5a7p1a8ad8jsn167f6a1e9f50',
		'X-RapidAPI-Host': 'star-wars-characters.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
	const response = await fetch(urlApi, options);
	const data = await response.json();
	console.log(data);
	return data;
}

(async() => {
	try {
		const characters = await fetchData(API);
		let view = `
		${characters.map(character => `
			<div class="group relative">
				<div
				class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
					<p> Homeworld: ${character.homeworld}</p>
					<p> Gender: ${character.gender}</p>
					<p> Species: ${character.species}</p>
					<p> Hair Color: ${character.hair_color}</p>
					<p> Mass: ${character.mass}</p>
					<p> Height: : ${character.height} </p>
				</div>
				<div class="mt-4 flex justify-between">
					<h3 class="text-sm text-gray-700">
					<span aria-hidden="true" class="absolute inset-0"></span>
					<strong>${character.name}</strong> 
					</h3>
				</div>
            </div>
		`).slice(0.4).join('')}		
		`;
		content.innerHTML = view;
	} catch(error) {
		console.log(error);
	}
})();