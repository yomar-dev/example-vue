/**
 * Instancia de nuestra App
 */
const app = new Vue({
	el: '#app',
	template: `
		<div class="view">
			<game-header></game-header>
			<game-add @new="addNewGame"></game-add>
			<game-list v-bind:games="games"></game-list>
		</div>
	`,
	data: {
		games: [
			{ title: 'ME: Andromeda' },
			{ title: 'Fifa 2017' },
			{ title: 'League of Legend' }
		]
	},
	methods: {
		addNewGame function (game) {
			this.games.push(game);
		}
	}
})