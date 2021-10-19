const setNormalView = (isNormalView) => {
	if (isNormalView) {
		document.querySelector('#normal-view').classList.add('selected')
		document.querySelector('#compact-view').classList.remove('selected')

		document.querySelectorAll('.card-body').forEach((cardBody) => {
			cardBody.classList.remove('hidden')
		})

		document.querySelectorAll('.row>div').forEach((ele) => {
			ele.classList.replace('col-lg-2', 'col-lg-4')
		})
	} else {
		document.querySelector('#compact-view').classList.add('selected')
		document.querySelector('#normal-view').classList.remove('selected')

		document.querySelectorAll('.card-body').forEach((cardBody) => {
			cardBody.classList.add('hidden')
		})

		document.querySelectorAll('.row>div').forEach((ele) => {
			ele.classList.replace('col-lg-4', 'col-lg-2')
		})
	}
}

setNormalView(true) // By default normal view is enabled.

document.querySelector('#normal-view').addEventListener('mousedown', () => {
	setNormalView(true)
})

document.querySelector('#compact-view').addEventListener('mousedown', () => {
	setNormalView(false)
})

const fixBrokenImages = () => {
	const fallbackURL = 'images/fallback_image.png'
	const img = document.getElementsByTagName('img')
	for (let i = 0; i < img.length; i++) {
		let t = img[i]
		if (t.naturalWidth === 0) {
			t.src = fallbackURL
		}
	}
}

$(document).ready(function () {
	$.getJSON('pokemon.json', function (allPokemon) {
		const template = $('#cardTemplate').html()
		allPokemon.forEach((pokemon) => {
			const card = $(template).clone()
			card
				.find('img')
				.attr('src', pokemon.pokemonImage)
				.attr('alt', pokemon.pokemonName)

			card.find('.card-title').text(pokemon.pokemonName)
			card.find('.card-text').text(pokemon.pokemonDescription)
			card.find('a').text(`Contributed by - ${pokemon.contributedByName}`)
			let button = card.find('a').clone()
			if (pokemon.contributedByUrl) {
				card.find('a').attr('href', pokemon.contributedByUrl)
			} else {
				card.find('a').replaceWith(function () {
					return $('<p />', { html: $(this).html() })
				})
			}
			if (pokemon.improvedByName) {
				button
					.attr('style', 'margin-top: 20px')
					.text(`Improved by - ${pokemon.improvedByName}`)
				if (pokemon.improvedByUrl) {
					console.log('here')
					button.attr('href', pokemon.contributedByUrl)
				} else {
					button = `<p>Improved by - ${pokemon.improvedByName}</p>`
				}
				card.find('.card-body').append(button)
			}

			$('#pokemon-row').prepend(card)
		})
	}).fail(function () {
		console.log(
			'You should try running this within a server rather than through the browser'
		)
	})
})

window.onload = fixBrokenImages
