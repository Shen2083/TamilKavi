<script lang="ts">
	let { value = $bindable('Serene') }: { value: string } = $props();

	const tones = ['Serene', 'Romantic', 'Melancholic', 'Devotional', 'Playful', 'Heroic'];
</script>

<div class="space-y-2">
	<label class="block text-sm font-medium text-gray-700">
		Emotion / Tone
	</label>
	<select
		bind:value
		class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
	>
		{#each tones as tone}
			<option value={tone}>{tone}</option>
		{/each}
	</select>
</div>
