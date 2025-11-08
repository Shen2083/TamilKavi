<script lang="ts">
	import TonePicker from './TonePicker.svelte';
	import StrictnessSlider from './StrictnessSlider.svelte';

	let {
		onGenerate
	}: {
		onGenerate: (params: any) => void;
	} = $props();

	let keywords = $state('');
	let tone = $state('Serene');
	let classicalness = $state(70);
	let length = $state('Standard');
	let wantTranslit = $state(true);
	let wantGloss = $state(false);
	let wantMeterNote = $state(true);
	let isGenerating = $state(false);

	async function handleSubmit() {
		if (!keywords.trim()) return;
		
		isGenerating = true;
		try {
			await onGenerate({
				keywords,
				tone,
				classicalness,
				length,
				wantTranslit,
				wantGloss,
				wantMeterNote
			});
		} finally {
			isGenerating = false;
		}
	}
</script>

<div class="bg-white rounded-xl shadow-lg p-6 space-y-6">
	<h2 class="text-2xl font-bold text-gray-800">Create Your Venba</h2>
	
	<div class="space-y-2">
		<label class="block text-sm font-medium text-gray-700">
			Keywords / Ideas
		</label>
		<textarea
			bind:value={keywords}
			placeholder="Example: காதல், வெம்மை, மல்லிகை"
			rows="3"
			class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent font-tamil"
		></textarea>
	</div>

	<TonePicker bind:value={tone} />

	<StrictnessSlider bind:value={classicalness} />

	<div class="space-y-2">
		<label class="block text-sm font-medium text-gray-700">
			Length
		</label>
		<div class="flex gap-3">
			{#each ['Short', 'Standard', 'Extended'] as len}
				<button
					type="button"
					onclick={() => length = len}
					class="flex-1 py-2 px-4 rounded-lg border-2 transition-all {length === len
						? 'border-orange-500 bg-orange-50 text-orange-700 font-semibold'
						: 'border-gray-300 text-gray-600 hover:border-orange-300'}"
				>
					{len}
				</button>
			{/each}
		</div>
	</div>

	<div class="space-y-3">
		<label class="flex items-center gap-2 cursor-pointer">
			<input type="checkbox" bind:checked={wantTranslit} class="w-4 h-4 text-orange-600" />
			<span class="text-sm text-gray-700">Show transliteration</span>
		</label>
		<label class="flex items-center gap-2 cursor-pointer">
			<input type="checkbox" bind:checked={wantGloss} class="w-4 h-4 text-orange-600" />
			<span class="text-sm text-gray-700">Show gloss (brief meaning)</span>
		</label>
		<label class="flex items-center gap-2 cursor-pointer">
			<input type="checkbox" bind:checked={wantMeterNote} class="w-4 h-4 text-orange-600" />
			<span class="text-sm text-gray-700">Show meter note</span>
		</label>
	</div>

	<button
		onclick={handleSubmit}
		disabled={!keywords.trim() || isGenerating}
		class="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
	>
		{isGenerating ? 'Generating...' : 'Generate Venba'}
	</button>
</div>
