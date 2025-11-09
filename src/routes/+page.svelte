<script lang="ts">
        import PromptForm from '$lib/components/PromptForm.svelte';
        import OutputCard from '$lib/components/OutputCard.svelte';
        import { onMount } from 'svelte';
        import { SITE_URL } from '$lib/config';

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

        const canonicalUrl = SITE_URL;
        const pageTitle = 'VenbaCraft – AI Tamil வெண்பா (Venba) Poetry Generator';
        const pageDescription = 'Generate authentic Tamil classical poetry in வெண்பா (Venba) style with AI. Customize emotional tone, classicalness level, and length for beautiful traditional Tamil poems online.';
        const previewImage = SITE_URL + '/social-preview.png';
</script>

<svelte:head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={previewImage} />
        <meta property="og:locale" content="ta_IN" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:site_name" content="VenbaCraft" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={previewImage} />
        
        {@html `<script type="application/ld+json">${JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebApplication',
                name: 'VenbaCraft',
                description: 'AI-powered Tamil classical poetry generator for வெண்பா (Venba) style poems',
                url: canonicalUrl,
                applicationCategory: 'EducationalApplication',
                operatingSystem: 'Web',
                offers: {
                        '@type': 'Offer',
                        price: '0',
                        priceCurrency: 'USD'
                },
                inLanguage: ['ta', 'en'],
                potentialAction: {
                        '@type': 'CreateAction',
                        target: {
                                '@type': 'EntryPoint',
                                urlTemplate: canonicalUrl,
                                actionPlatform: [
                                        'http://schema.org/DesktopWebPlatform',
                                        'http://schema.org/MobileWebPlatform'
                                ]
                        },
                        result: {
                                '@type': 'CreativeWork',
                                name: 'Tamil Venba Poem'
                        }
                }
        })}</script>`}
</svelte:head>

<div class="min-h-screen py-12 px-4">
        <div class="max-w-6xl mx-auto">
                <nav class="flex justify-end gap-4 mb-8">
                        <a href="/about" class="text-gray-600 hover:text-orange-600 font-medium transition-colors">About வெண்பா</a>
                        <a href="/examples" class="text-gray-600 hover:text-orange-600 font-medium transition-colors">Examples</a>
                </nav>
                
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
                        <p>வெண்பா (Venba) is a classical Tamil poetic form with compact meter and elegant expression</p>
                </footer>
        </div>
</div>
