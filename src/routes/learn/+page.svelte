<script lang="ts">
        import { SITE_URL } from '$lib/config';
        import ContentNav from '$lib/components/ContentNav.svelte';
        
        const canonicalUrl = SITE_URL + '/learn';
        const pageTitle = 'Learn வெண்பா (Venba) Poetry - Complete Guide to Tamil Classical Meter';
        const pageDescription = 'Master the art of வெண்பா (Venba) poetry. Learn about meter patterns, syllable rules, ner and nirai, seer structure, and classical Tamil prosody with detailed examples and analysis.';
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
                '@type': 'EducationalOccupationalProgram',
                name: 'Tamil Venba Poetry Primer',
                description: pageDescription,
                url: canonicalUrl,
                provider: {
                        '@type': 'Organization',
                        name: 'VenbaCraft'
                },
                educationalLevel: 'Beginner to Advanced',
                inLanguage: ['ta', 'en']
        })}</script>`}
</svelte:head>

<div class="min-h-screen py-12 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div class="max-w-5xl mx-auto">
                <ContentNav />
                
                <article class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6 font-tamil">
                                வெண்பா இலக்கணம் | Venba Poetry Primer
                        </h1>
                        
                        <div class="prose prose-lg max-w-none">
                                <section class="mb-12">
                                        <h2 class="text-3xl font-semibold text-gray-800 mt-8 mb-4">What is வெண்பா (Venba)?</h2>
                                        <p class="text-gray-700 leading-relaxed mb-4">
                                                வெண்பா (Venba) is one of the most important and ancient poetic meters in Tamil literature, dating back over 2,000 years. 
                                                The name comes from <strong>வெண்</strong> (veṇ, meaning "pure") and <strong>பா</strong> (pā, meaning "song" or "poetry"), 
                                                symbolizing the purity and elegance of this form.
                                        </p>
                                        <p class="text-gray-700 leading-relaxed">
                                                Venba is characterized by its compact structure and strict metrical rules based on syllable patterns. 
                                                It has been used by the greatest Tamil poets, most famously by Thiruvalluvar in the Thirukkural, 
                                                where each of the 1,330 couplets follows the Kural Venba meter.
                                        </p>
                                </section>

                                <section class="mb-12 bg-orange-50 p-6 rounded-xl">
                                        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Understanding Syllables: நேர் (Ner) and நிரை (Nirai)</h2>
                                        <p class="text-gray-700 leading-relaxed mb-4">
                                                The foundation of Venba meter lies in understanding two types of syllables:
                                        </p>
                                        
                                        <div class="grid md:grid-cols-2 gap-6 mb-4">
                                                <div class="bg-white p-5 rounded-lg border-l-4 border-orange-500">
                                                        <h3 class="text-xl font-bold text-orange-700 mb-2">நேர் (Ner) - Short Syllable</h3>
                                                        <p class="text-gray-600 mb-3">A short syllable typically consists of:</p>
                                                        <ul class="list-disc pl-5 space-y-2 text-gray-700">
                                                                <li>A consonant + short vowel (க, கி, கு)</li>
                                                                <li>Takes one unit of time (mātrā)</li>
                                                                <li>Marked as <span class="font-mono bg-gray-100 px-2 py-1 rounded">.</span> or <span class="font-mono bg-gray-100 px-2 py-1 rounded">|</span></li>
                                                        </ul>
                                                        <div class="mt-3 p-3 bg-orange-50 rounded font-tamil text-lg">
                                                                Examples: க, தி, மு, ப
                                                        </div>
                                                </div>
                                                
                                                <div class="bg-white p-5 rounded-lg border-l-4 border-amber-600">
                                                        <h3 class="text-xl font-bold text-amber-700 mb-2">நிரை (Nirai) - Long Syllable</h3>
                                                        <p class="text-gray-600 mb-3">A long syllable consists of:</p>
                                                        <ul class="list-disc pl-5 space-y-2 text-gray-700">
                                                                <li>A consonant + long vowel (கா, கீ, கூ)</li>
                                                                <li>A consonant + short vowel + consonant (கல், தன்)</li>
                                                                <li>Takes two units of time</li>
                                                                <li>Marked as <span class="font-mono bg-gray-100 px-2 py-1 rounded">-</span> or <span class="font-mono bg-gray-100 px-2 py-1 rounded">||</span></li>
                                                        </ul>
                                                        <div class="mt-3 p-3 bg-amber-50 rounded font-tamil text-lg">
                                                                Examples: கா, தீ, மூ, பன், தல்
                                                        </div>
                                                </div>
                                        </div>
                                </section>

                                <section class="mb-12">
                                        <h2 class="text-3xl font-semibold text-gray-800 mb-4">சீர் (Seer) - Metrical Feet</h2>
                                        <p class="text-gray-700 leading-relaxed mb-6">
                                                Syllables combine to form <strong>சீர் (seer)</strong>, which are metrical feet. 
                                                Each seer contains 2 or 3 syllables following specific patterns. The four primary types are:
                                        </p>
                                        
                                        <div class="grid md:grid-cols-2 gap-4">
                                                <div class="bg-gradient-to-br from-orange-100 to-orange-50 p-5 rounded-lg">
                                                        <h3 class="text-lg font-bold text-gray-800 mb-2">1. தேமா (Tēmā)</h3>
                                                        <p class="font-mono text-gray-700 mb-2">Pattern: நேர் + நிரை (. -)</p>
                                                        <p class="text-sm text-gray-600">One short + one long syllable</p>
                                                        <div class="mt-2 p-2 bg-white rounded font-tamil">மலர், கவி, நிலா</div>
                                                </div>
                                                
                                                <div class="bg-gradient-to-br from-amber-100 to-amber-50 p-5 rounded-lg">
                                                        <h3 class="text-lg font-bold text-gray-800 mb-2">2. புளிமா (Puḷimā)</h3>
                                                        <p class="font-mono text-gray-700 mb-2">Pattern: நிரை + நேர் (- .)</p>
                                                        <p class="text-sm text-gray-600">One long + one short syllable</p>
                                                        <div class="mt-2 p-2 bg-white rounded font-tamil">பாடு, தீது, மீது</div>
                                                </div>
                                                
                                                <div class="bg-gradient-to-br from-orange-100 to-orange-50 p-5 rounded-lg">
                                                        <h3 class="text-lg font-bold text-gray-800 mb-2">3. கூவிளம் (Kūviḷam)</h3>
                                                        <p class="font-mono text-gray-700 mb-2">Pattern: நேர் + நேர் + நிரை (. . -)</p>
                                                        <p class="text-sm text-gray-600">Two short + one long syllable</p>
                                                        <div class="mt-2 p-2 bg-white rounded font-tamil">கவிதை, முகிலே</div>
                                                </div>
                                                
                                                <div class="bg-gradient-to-br from-amber-100 to-amber-50 p-5 rounded-lg">
                                                        <h3 class="text-lg font-bold text-gray-800 mb-2">4. கருவிளம் (Karuviḷam)</h3>
                                                        <p class="font-mono text-gray-700 mb-2">Pattern: நிரை + நிரை (- -)</p>
                                                        <p class="text-sm text-gray-600">Two long syllables</p>
                                                        <div class="mt-2 p-2 bg-white rounded font-tamil">வானம், காலம்</div>
                                                </div>
                                        </div>
                                </section>

                                <section class="mb-12 bg-amber-50 p-6 rounded-xl">
                                        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Types of Venba</h2>
                                        <p class="text-gray-700 leading-relaxed mb-6">
                                                Venba poetry comes in different lengths, each with specific metrical structures:
                                        </p>
                                        
                                        <div class="space-y-6">
                                                <div class="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                                                        <h3 class="text-2xl font-bold text-orange-700 mb-3">குறள் வெண்பா (Kural Venba)</h3>
                                                        <p class="text-gray-700 mb-3">
                                                                <strong>Structure:</strong> 2 lines (அடிகள்) with 4 + 3 words
                                                        </p>
                                                        <p class="text-gray-700 mb-3">
                                                                <strong>Meter Pattern:</strong> Each line follows specific seer patterns, 
                                                                with the first line containing 4 seers and the second containing 3 seers plus ending syllables.
                                                        </p>
                                                        <div class="bg-orange-50 p-4 rounded-lg font-tamil text-xl leading-relaxed">
                                                                <p class="mb-2">அகர முதல எழுத்தெல்லாம் ஆதி</p>
                                                                <p>பகவன் முதற்றே உலகு</p>
                                                        </div>
                                                        <p class="text-sm text-gray-600 mt-3 italic">
                                                                - Thirukkural 1 (The letter 'அ' is first among letters; God is first in the world)
                                                        </p>
                                                </div>
                                                
                                                <div class="bg-white p-6 rounded-lg border-l-4 border-amber-500">
                                                        <h3 class="text-2xl font-bold text-amber-700 mb-3">சிந்து வெண்பா (Sindi Venba)</h3>
                                                        <p class="text-gray-700 mb-3">
                                                                <strong>Structure:</strong> 3 lines with melodious rhythm
                                                        </p>
                                                        <p class="text-gray-700 mb-3">
                                                                Used for more descriptive and narrative poetry while maintaining metrical precision.
                                                        </p>
                                                </div>
                                                
                                                <div class="bg-white p-6 rounded-lg border-l-4 border-orange-600">
                                                        <h3 class="text-2xl font-bold text-orange-800 mb-3">நேரிசை வெண்பா (Nerisai Venba)</h3>
                                                        <p class="text-gray-700 mb-3">
                                                                <strong>Structure:</strong> 4 lines (standard classical form)
                                                        </p>
                                                        <p class="text-gray-700 mb-3">
                                                                This extended form allows for more elaborate themes while maintaining strict metrical discipline.
                                                        </p>
                                                </div>
                                        </div>
                                </section>

                                <section class="mb-12">
                                        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Rules and Constraints</h2>
                                        <div class="bg-gray-50 p-6 rounded-lg">
                                                <h3 class="text-xl font-semibold text-gray-800 mb-3">Traditional Venba follows these rules:</h3>
                                                <ol class="list-decimal pl-6 space-y-3 text-gray-700">
                                                        <li><strong>Syllable Count:</strong> Each line must have a specific number of syllables</li>
                                                        <li><strong>Seer Pattern:</strong> Syllables must form proper seer (metrical feet)</li>
                                                        <li><strong>Ending Rules (தளை):</strong> Lines must end with specific syllable patterns</li>
                                                        <li><strong>Word Placement:</strong> Certain positions require specific word types</li>
                                                        <li><strong>Rhyme and Euphony:</strong> Pleasant sound patterns (இன்னிசை)</li>
                                                        <li><strong>Meaning Completeness:</strong> Each couplet or verse must be self-contained</li>
                                                </ol>
                                        </div>
                                </section>

                                <section class="mb-12 bg-gradient-to-r from-orange-100 to-amber-100 p-8 rounded-xl">
                                        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Practice Exercise</h2>
                                        <p class="text-gray-700 leading-relaxed mb-4">
                                                Try analyzing this simple Venba line by identifying ner and nirai syllables:
                                        </p>
                                        <div class="bg-white p-6 rounded-lg font-tamil text-2xl text-center mb-4">
                                                மலர் மணம் கமழும் காலை
                                        </div>
                                        <details class="bg-white p-4 rounded-lg cursor-pointer">
                                                <summary class="font-semibold text-gray-800 cursor-pointer hover:text-orange-600">
                                                        Click to see syllable breakdown →
                                                </summary>
                                                <div class="mt-4 p-4 bg-orange-50 rounded font-mono">
                                                        <p class="mb-2">ம-லர் (nirai-nirai) | ம-ணம் (nirai-nirai) | க-ம-ழும் (ner-ner-nirai) | கா-லை (nirai-nirai)</p>
                                                        <p class="text-sm text-gray-600 mt-3">
                                                                This line demonstrates a balanced mix of ner and nirai syllables creating rhythmic flow.
                                                        </p>
                                                </div>
                                        </details>
                                </section>

                                <section>
                                        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Further Exploration</h2>
                                        <div class="grid md:grid-cols-3 gap-4">
                                                <a href="/gallery" class="block p-6 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-xl hover:shadow-lg transition-shadow">
                                                        <h3 class="text-xl font-bold mb-2">📚 Poetry Gallery</h3>
                                                        <p class="text-sm">Explore analyzed Venba examples</p>
                                                </a>
                                                <a href="/glossary" class="block p-6 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-xl hover:shadow-lg transition-shadow">
                                                        <h3 class="text-xl font-bold mb-2">📖 Glossary</h3>
                                                        <p class="text-sm">Tamil poetry terms explained</p>
                                                </a>
                                                <a href="/guide" class="block p-6 bg-gradient-to-br from-orange-600 to-amber-600 text-white rounded-xl hover:shadow-lg transition-shadow">
                                                        <h3 class="text-xl font-bold mb-2">🎯 Interactive Guide</h3>
                                                        <p class="text-sm">Learn to generate Venba</p>
                                                </a>
                                        </div>
                                </section>
                        </div>
                </article>
        </div>
</div>
