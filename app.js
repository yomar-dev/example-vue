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
	`
})