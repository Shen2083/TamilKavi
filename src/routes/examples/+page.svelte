<script lang="ts">
        import { SITE_URL } from '$lib/config';
        
        const canonicalUrl = SITE_URL + '/examples';
        const pageTitle = 'Example வெண்பா Poems – VenbaCraft';
        const pageDescription = 'Explore beautiful examples of AI-generated Tamil Venba poetry. See how VenbaCraft creates authentic classical Tamil poems with different tones and themes.';
        
        const examples = [
                {
                        title: 'Serene Nature',
                        theme: 'Calm lake, water, fish',
                        tone: 'Serene',
                        classicalness: 70,
                        poem: 'அமைதியாம் நீர்நிலையில் மீன்கள் விளையாடி\nநிமிர்ந்த நெற்பயிர் காற்றில் அசைந்திட\nதமிழ் வளம் போற்றும் இயற்கை அழகினில்\nஅமைதி காணும் மனமே!',
                        transliteration: 'amaithiyām nīrnilaiyil mīṉkaḷ viḷaiyāḍi\nnimirntha netpayir kātril asaintida\ntamiḻ vaḷam pōtrum iyaṟkai aḻakiṉil\namaiti kāṇum maṉamē!',
                        gloss: 'In the calm waters, fish play joyfully. The tall rice plants sway in the wind. In the natural beauty that celebrates Tamil prosperity, the mind finds peace!'
                },
                {
                        title: 'Romantic Longing',
                        theme: 'Love, moonlight, waiting',
                        tone: 'Romantic',
                        classicalness: 85,
                        poem: 'நிலாவொளி பரவிய வான்வீதியில் நின்று\nமலர்ந்த காதலின் நினைவுகள் மிகுந்து\nகலந்த காலங்கள் மீண்டும் வரும் என்றே\nதனிமை காத்திருக்கும் உள்ளமே!',
                        transliteration: 'nilāvoḷi paraviya vānvīthiyil ninṟu\nmalarntha kāthaliṉ niṉaivukaḷ miṉṯu\nkalantha kālaṅkaḷ mīṇṭum varum eṉṟē\ntaṉimai kāttirukum uḷḷamē!',
                        gloss: 'Standing under the moonlit sky, memories of bloomed love overflow. The heart waits in solitude, believing those cherished times will return again!'
                },
                {
                        title: 'Devotional Prayer',
                        theme: 'Divine grace, temple, devotion',
                        tone: 'Devotional',
                        classicalness: 95,
                        poem: 'கோயில் மணி ஒலியில் தெய்வ நாமம் எதிரொலித்து\nவேள் நிலவொளியும் விளக்கொளியும் சேர்ந்து\nஆயிரம் தீபங்கள் ஏற்றும் பக்தியினால்\nஆன்மா பேரருள் பெறுமே!',
                        transliteration: 'kōyil maṇi oliyil teyva nāmam etiroḷittu\nvēḷ nilavoḷiyum viḷakkoḷiyum sērntu\nāyiram tīpaṅkaḷ ēṟṟum paktiyiṉāl\nāṉmā pēraruḷ peṟumē!',
                        gloss: 'As temple bells echo divine names, moonlight and lamp light merge together. Through devotion that lights a thousand lamps, the soul receives supreme grace!'
                }
        ];
</script>

<svelte:head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        
        {@html `<script type="application/ld+json">${JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'CollectionPage',
                name: pageTitle,
                description: pageDescription,
                hasPart: examples.map(ex => ({
                        '@type': 'CreativeWork',
                        name: ex.title,
                        text: ex.poem,
                        inLanguage: 'ta',
                        genre: 'Classical Tamil Venba Poetry',
                        author: {
                                '@type': 'Organization',
                                name: 'VenbaCraft AI'
                        }
                }))
        })}</script>`}
</svelte:head>

<div class="min-h-screen py-12 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div class="max-w-6xl mx-auto">
                <div class="mb-8">
                        <a href="/" class="text-orange-600 hover:text-orange-700 font-medium">← Back to Generator</a>
                </div>
                
                <div class="text-center mb-12">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4 font-tamil">
                                Example வெண்பா Poems
                        </h1>
                        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
                                Explore beautiful examples of AI-generated Tamil classical poetry in the Venba style
                        </p>
                </div>
                
                <div class="grid gap-8">
                        {#each examples as example}
                                <article class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                                        <div class="mb-6">
                                                <h2 class="text-2xl font-bold text-gray-900 mb-2">{example.title}</h2>
                                                <div class="flex flex-wrap gap-2 text-sm">
                                                        <span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                                                                {example.tone}
                                                        </span>
                                                        <span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
                                                                Classicalness: {example.classicalness}/100
                                                        </span>
                                                        <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                                                Theme: {example.theme}
                                                        </span>
                                                </div>
                                        </div>
                                        
                                        <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 mb-4">
                                                <p class="text-2xl leading-relaxed font-tamil text-gray-900 whitespace-pre-line">
                                                        {example.poem}
                                                </p>
                                        </div>
                                        
                                        <div class="space-y-3">
                                                <div>
                                                        <h3 class="text-sm font-semibold text-gray-700 mb-1">Transliteration:</h3>
                                                        <p class="text-gray-600 italic text-sm">
                                                                {example.transliteration}
                                                        </p>
                                                </div>
                                                
                                                <div>
                                                        <h3 class="text-sm font-semibold text-gray-700 mb-1">Gloss:</h3>
                                                        <p class="text-gray-600 text-sm">
                                                                {example.gloss}
                                                        </p>
                                                </div>
                                        </div>
                                </article>
                        {/each}
                </div>
                
                <div class="mt-12 text-center">
                        <a href="/" class="inline-block bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-orange-700 hover:to-amber-700 transition-colors">
                                Create Your Own Venba Poem
                        </a>
                </div>
        </div>
</div>
