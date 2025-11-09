<script lang="ts">
        import { SITE_URL } from '$lib/config';
        import ContentNav from '$lib/components/ContentNav.svelte';
        
        const canonicalUrl = SITE_URL + '/gallery';
        const pageTitle = 'வெண்பா Poetry Gallery - Analyzed Tamil Classical Poems';
        const pageDescription = 'Explore a curated collection of வெண்பா (Venba) poems with detailed meter analysis, syllable breakdowns, and explanations. Learn classical Tamil poetry through annotated examples.';
        
        const poems = [
                {
                        id: 'thirukkural-1',
                        title: 'Thirukkural - Verse 1',
                        author: 'Thiruvalluvar',
                        type: 'Kural Venba (குறள் வெண்பா)',
                        tamil: 'அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு',
                        transliteration: 'akara mudala ezhuthellām ādhi\npagavan muṯaṟṟē ulaku',
                        meaning: 'As the letter அ is the first of all letters, so God is first in the world.',
                        analysis: {
                                structure: '2 lines, 4+3 word pattern',
                                syllables: 'Line 1: அ-க-ர | மு-த-ல | எ-ழுத்-தெல்-லாம் | ஆ-தி\nLine 2: ப-க-வன் | மு-தற்-றே | உ-ல-கு',
                                seer: 'Classic Kural Venba meter with proper தேமா and புளிமா patterns',
                                theme: 'Primacy of the divine - philosophical opening'
                        },
                        significance: 'The very first verse of Thirukkural, demonstrating perfect Kural Venba form. Sets the tone for the entire work by establishing God as the foundation.'
                },
                {
                        id: 'nature-poem',
                        title: 'Serene Lake',
                        author: 'VenbaCraft AI',
                        type: 'Kural Venba (குறள் வெண்பா)',
                        tamil: 'அமைதியாம் நீர்நிலையில் மீன்கள் விளையாடி\nநிமிர்ந்த நெற்பயிர் காற்றில் அசைந்திட',
                        transliteration: 'amaithiyām nīrnilaiyil mīṉkaḷ viḷaiyāḍi\nnimirntha netpayir kātril asaintida',
                        meaning: 'In the calm waters, fish play joyfully. The tall rice plants sway in the wind.',
                        analysis: {
                                structure: '2 lines describing natural serenity',
                                syllables: 'Balanced ner-nirai pattern creating flowing rhythm',
                                seer: 'Mix of தேமா and கூவிளம் patterns',
                                theme: 'Nature, tranquility, rural beauty'
                        },
                        significance: 'Demonstrates how modern AI can follow classical Venba patterns while describing contemporary scenes.'
                },
                {
                        id: 'devotional-poem',
                        title: 'Temple Prayer',
                        author: 'VenbaCraft AI',
                        type: 'Nerisai Venba (நேரிசை வெண்பா)',
                        tamil: 'கோயில் மணி ஒலியில் தெய்வ நாமம் எதிரொலித்து\nவேள் நிலவொளியும் விளக்கொளியும் சேர்ந்து\nஆயிரம் தீபங்கள் ஏற்றும் பக்தியினால்\nஆன்மா பேரருள் பெறுமே',
                        transliteration: 'kōyil maṇi oliyil teyva nāmam etiroḷittu\nvēḷ nilavoḷiyum viḷakkoḷiyum sērntu\nāyiram tīpaṅkaḷ ēṟṟum paktiyiṉāl\nāṉmā pēraruḷ peṟumē',
                        meaning: 'As temple bells echo divine names, moonlight and lamp light merge together. Through devotion that lights a thousand lamps, the soul receives supreme grace!',
                        analysis: {
                                structure: '4 lines with devotional imagery',
                                syllables: 'Extended meter with rich vocabulary',
                                seer: 'Classical patterns maintained throughout',
                                theme: 'Devotion, divine grace, temple worship'
                        },
                        significance: 'Shows how Venba can express deep spiritual themes with elaborate imagery in the longer Nerisai form.'
                },
                {
                        id: 'love-poem',
                        title: 'Moonlit Longing',
                        author: 'VenbaCraft AI',
                        type: 'Kural Venba (குறள் வெண்பா)',
                        tamil: 'நிலாவொளி பரவிய வான்வீதியில் நின்று\nமலர்ந்த காதலின் நினைவுகள் மிகுந்து',
                        transliteration: 'nilāvoḷi paraviya vānvīthiyil ninṟu\nmalarntha kāthaliṉ niṉaivukaḷ mikunṯu',
                        meaning: 'Standing under the moonlit sky, memories of bloomed love overflow.',
                        analysis: {
                                structure: '2 lines expressing romantic longing',
                                syllables: 'Flowing nirai patterns for emotional effect',
                                seer: 'Melodious combinations',
                                theme: 'Romance, memory, longing, moonlight'
                        },
                        significance: 'Illustrates how Venba excels at expressing delicate emotions through measured verse.'
                },
                {
                        id: 'wisdom-poem',
                        title: 'Knowledge is Light',
                        author: 'VenbaCraft AI',
                        type: 'Kural Venba (குறள் வெண்பா)',
                        tamil: 'அறிவுதான் அனைத்துக்கும் ஆதாரம் என்பதை\nதெரிந்து கொள்வோம் செயல்படுவோம்',
                        transliteration: 'aṟivuthāṉ aṉaittukkum āthāram eṉpathai\ntherindhu koḷvōm seyalpaḍuvōm',
                        meaning: 'Knowing that knowledge is the foundation for all things, let us learn and act accordingly.',
                        analysis: {
                                structure: '2 lines of didactic wisdom',
                                syllables: 'Strong ner patterns for emphasis',
                                seer: 'Balanced metrical feet',
                                theme: 'Wisdom, knowledge, education, action'
                        },
                        significance: 'Follows the Thirukkural tradition of compact moral instruction in perfect metrical form.'
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
</svelte:head>

<div class="min-h-screen py-12 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div class="max-w-6xl mx-auto">
                <ContentNav />
                
                <div class="text-center mb-12">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4 font-tamil">
                                வெண்பா கவிதை தொகுப்பு | Venba Poetry Gallery
                        </h1>
                        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
                                Explore analyzed examples of வெண்பா poetry with detailed meter breakdowns and explanations
                        </p>
                </div>
                
                <div class="grid gap-8">
                        {#each poems as poem}
                                <article class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                                        <div class="mb-6">
                                                <div class="flex items-start justify-between mb-3">
                                                        <div>
                                                                <h2 class="text-2xl font-bold text-gray-900 mb-1">{poem.title}</h2>
                                                                <p class="text-gray-600">by {poem.author}</p>
                                                        </div>
                                                        <span class="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                                                                {poem.type}
                                                        </span>
                                                </div>
                                        </div>
                                        
                                        <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 mb-6">
                                                <p class="text-3xl leading-relaxed font-tamil text-gray-900 whitespace-pre-line text-center">
                                                        {poem.tamil}
                                                </p>
                                        </div>
                                        
                                        <div class="space-y-4 mb-6">
                                                <div class="bg-gray-50 p-4 rounded-lg">
                                                        <h3 class="text-sm font-semibold text-gray-700 mb-2">📖 Transliteration:</h3>
                                                        <p class="text-gray-600 italic">
                                                                {poem.transliteration}
                                                        </p>
                                                </div>
                                                
                                                <div class="bg-blue-50 p-4 rounded-lg">
                                                        <h3 class="text-sm font-semibold text-gray-700 mb-2">💡 Meaning:</h3>
                                                        <p class="text-gray-700">
                                                                {poem.meaning}
                                                        </p>
                                                </div>
                                        </div>
                                        
                                        <details class="bg-amber-50 p-4 rounded-lg cursor-pointer">
                                                <summary class="font-semibold text-gray-800 cursor-pointer hover:text-orange-600 flex items-center gap-2">
                                                        <span>🔍</span>
                                                        <span>Click for Detailed Meter Analysis</span>
                                                </summary>
                                                <div class="mt-4 space-y-3">
                                                        <div class="bg-white p-3 rounded">
                                                                <h4 class="font-semibold text-sm text-gray-700 mb-1">Structure:</h4>
                                                                <p class="text-gray-600 text-sm">{poem.analysis.structure}</p>
                                                        </div>
                                                        <div class="bg-white p-3 rounded">
                                                                <h4 class="font-semibold text-sm text-gray-700 mb-1">Syllable Pattern:</h4>
                                                                <p class="text-gray-600 text-sm font-mono whitespace-pre-line">{poem.analysis.syllables}</p>
                                                        </div>
                                                        <div class="bg-white p-3 rounded">
                                                                <h4 class="font-semibold text-sm text-gray-700 mb-1">Seer (Metrical Feet):</h4>
                                                                <p class="text-gray-600 text-sm">{poem.analysis.seer}</p>
                                                        </div>
                                                        <div class="bg-white p-3 rounded">
                                                                <h4 class="font-semibold text-sm text-gray-700 mb-1">Theme:</h4>
                                                                <p class="text-gray-600 text-sm">{poem.analysis.theme}</p>
                                                        </div>
                                                        <div class="bg-orange-100 p-3 rounded border-l-4 border-orange-500">
                                                                <h4 class="font-semibold text-sm text-orange-800 mb-1">Significance:</h4>
                                                                <p class="text-gray-700 text-sm">{poem.significance}</p>
                                                        </div>
                                                </div>
                                        </details>
                                </article>
                        {/each}
                </div>
                
                <div class="mt-12 text-center bg-white rounded-xl p-8 shadow-lg">
                        <h2 class="text-2xl font-bold text-gray-900 mb-4">Create Your Own Venba</h2>
                        <p class="text-gray-600 mb-6">
                                Now that you've explored these examples, try generating your own வெண்பா poetry!
                        </p>
                        <a href="/" class="inline-block bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-orange-700 hover:to-amber-700 transition-colors">
                                Go to Generator
                        </a>
                </div>
        </div>
</div>
