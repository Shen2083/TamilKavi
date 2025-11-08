<script lang="ts">
        import PromptForm from '$lib/components/PromptForm.svelte';
        import OutputCard from '$lib/components/OutputCard.svelte';
        import { onMount } from 'svelte';

        let poem = $state('');
        let error = $state('');
        let lastParams = $state<any>(null);

        onMount(() => {
                const params = new URLSearchParams(window.location.search);
                if (params.has('keywords')) {
                        const urlParams = {
                                keywords: params.get('keywords') || '',
                                tone: params.get('tone') || 'Serene',
                                classicalness: parseInt(params.get('classicalness') || '70'),
                                length: params.get('length') || 'Standard',
                                wantTranslit: params.get('wantTranslit') === 'true' || params.get('wantTranslit') === null,
                                wantGloss: params.get('wantGloss') === 'true',
                                wantMeterNote: params.get('wantMeterNote') === 'true' || params.get('wantMeterNote') === null
                        };
                        generatePoem(urlParams);
                }
        });

        async function generatePoem(params: any) {
                error = '';
                poem = '';
                lastParams = params;

                try {
                        const response = await fetch('/api/generate', {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(params)
                        });

                        const data = await response.json();

                        if (!response.ok) {
                                error = data.error || 'Failed to generate poem';
                                return;
                        }

                        poem = data.poem;
                } catch (err) {
                        error = err instanceof Error ? err.message : 'An error occurred';
                }
        }

        function handleRegenerate() {
                if (lastParams) {
                        generatePoem(lastParams);
                }
        }
</script>

<svelte:head>
        <title>VenbaCraft - Tamil Classical Poetry Generator</title>
</svelte:head>

<div class="min-h-screen py-12 px-4">
        <div class="max-w-6xl mx-auto">
                <header class="text-center mb-12">
                        <h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-3 font-tamil">
                                VenbaCraft
                        </h1>
                        <p class="text-gray-600 text-lg">
                                Generate authentic Tamil classical poetry with AI
                        </p>
                </header>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                                <PromptForm onGenerate={generatePoem} />
                        </div>

                        <div>
                                {#if error}
                                        <div class="bg-red-50 border border-red-200 rounded-xl p-6">
                                                <h3 class="text-red-800 font-semibold mb-2">Error</h3>
                                                <p class="text-red-600">{error}</p>
                                                {#if error.includes('API key')}
                                                        <p class="text-sm text-red-500 mt-3">
                                                                Please add your <code class="bg-red-100 px-2 py-1 rounded">OPENAI_API_KEY</code> in Replit Secrets.
                                                        </p>
                                                {/if}
                                        </div>
                                {:else if poem}
                                        <OutputCard {poem} params={lastParams} onRegenerate={handleRegenerate} />
                                {:else}
                                        <div class="bg-white rounded-xl shadow-lg p-12 text-center">
                                                <div class="text-6xl mb-4">📝</div>
                                                <h3 class="text-xl font-semibold text-gray-700 mb-2">
                                                        Ready to Create
                                                </h3>
                                                <p class="text-gray-500">
                                                        Enter your keywords and preferences to generate your first Venba poem
                                                </p>
                                        </div>
                                {/if}
                        </div>
                </div>

                <footer class="mt-16 text-center text-gray-500 text-sm">
                        <p>வேண்பா (Venba) is a classical Tamil poetic form with compact meter and elegant expression</p>
                </footer>
        </div>
</div>
