# Poké-Dex

![Pokémon](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png)

There's no doubt that most of our childhood was spent watching Pokémon and playing games like Pokémon Fire-Red, Ruby, Emerald, etc. From Kanto to Hoenn to Sinnoh, we have seen it all and experienced it all. With Hacktoberfest 2020 coming up and being one of the people who would participate for the very first time, I decided to create this repository that's actually a very basic website that lets users view and add their favourite Pokémon.

# Contents of the website

1. index.html - Contains the content of the home page.
2. index.css - Contains the styling given to the home page.
3. about.html - Contains some information about me.
4. about.css - Contains the styling given to the about page.

# What can I contribute?

There is always something to contribute to a project whether you are a novice or a veteran. In this project, you can add your favourite Pokémon as a card to the website! Or maybe you didn't like the line that you are reading right now and want to change that. Sure! Why not?

# How can I contribute?

Kindly refer to [CONTRIBUTING.md](https://github.com/AM1CODES/Poke-Dex/blob/master/CONTRIBUTING.md) file to learn how to contribute!

And that's it!
Follow these steps to make your very first pull request.

# But what if I don't know how to add cards? :(

Not everyone is aware of every tool present in the world no matter how easy or complex it is. It's also not necessary to know each and every tool out there. Use the code sample below to add your own card because everyone loves Pokémon and everyone should get a chance to add their favourite Pokémon!

```html
<div class="col-lg-4 mb-4">
	<div class="card">
		<img class="card-img-top" src="[Link to Pokémon image]" alt="" />
		<div class="card-body">
			<h5 class="card-title">[Name of your favourite Pokémon]</h5>
			<p class="card-text">[Small Description about your Pokémon]</p>
			<a
				href="[Add the link to your GitHub Profile]"
				class="btn btn-outline-danger btn-sm"
				>Contributed by - [Add your GitHub Username/profile name]</a
			>
		</div>
	</div>
</div>
```

Copy this code and paste it in the index.html file to make your changes. Test it on your own system and then create a pull request.

Or an even easier way is to just add an object to the `pokemon.js` file with

```js
	{
		pokemonName: [Name of your favourite Pokémon],
		pokemonDescription: [Small Description about your Pokémon],
		pokemonImage: [Link to Pokémon image],
		contributedByName: [Add your Github Username],
		contributedByUrl: [Add a link to your Github profile],
		// these are only needed if you have improved a card
		improvedByName: [Add your Github Username],
		improvedByUrl: [Add a link to your Github profile],
	},
```

If all of the pokemon get added to this file, then we can extend this project to include functionality like search and filtering.

# Congratulations!

Congratulations! You just made your first pull request and if it gets merged, you can view the changes you made live using the link provided above!
