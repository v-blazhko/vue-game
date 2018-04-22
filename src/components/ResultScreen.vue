<template>
	<div class="alert alert-secondary">
		<h3>Success: {{stats.success}}</h3>
		<h3>Errors: {{stats.error}}</h3>
		<hr>
		<div class="buttons">
			<button class="btn btn-primary" @click="$emit('repeat')">Repeat Level</button>
			<button class="btn btn-primary" @click="$emit('nextLevel')" v-if="level < 2">Next Level</button>
			<button class="btn btn-success" @click="$emit('eraseGame')">New Game</button>
		</div>				
	</div>
</template>

<script>
export default {
	props:['stats','level']
}
	
</script>

<style scoped>
	
.buttons{
	display: flex;
	justify-content: space-around;
}
</style>