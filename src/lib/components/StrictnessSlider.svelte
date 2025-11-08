<script lang="ts">
	let { value = $bindable(70) }: { value: number } = $props();
</script>

<div class="space-y-2">
	<label class="block text-sm font-medium text-gray-700">
		Classicalness Level: <span class="font-bold text-orange-600">{value}</span>
	</label>
	<input
		type="range"
		min="0"
		max="100"
		step="5"
		bind:value
		class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
	/>
	<div class="flex justify-between text-xs text-gray-500">
		<span>Modern</span>
		<span>Classical</span>
	</div>
</div>
