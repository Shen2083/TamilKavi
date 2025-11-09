<script lang="ts">
        import { SITE_URL } from '$lib/config';
        import ContentNav from '$lib/components/ContentNav.svelte';
        
        const canonicalUrl = SITE_URL + '/glossary';
        const pageTitle = 'Tamil Poetry Glossary - வெண்பா Terms & Definitions';
        const pageDescription = 'Comprehensive glossary of Tamil poetry terms including வெண்பா types, meter patterns, seer structures, and prosody terminology. Learn ner, nirai, seer, thalai, and more.';
        
        const glossaryTerms = [
                {
                        category: 'Basic Concepts',
                        terms: [
                                { tamil: 'வெண்பா', romanized: 'Veṇpā', definition: 'A classical Tamil poetic form characterized by strict metrical rules based on syllable patterns. The name means "white/pure song".' },
                                { tamil: 'பா', romanized: 'Pā', definition: 'Poetry or song in Tamil. The fundamental unit of Tamil poetic composition.' },
                                { tamil: 'அடி', romanized: 'Aḍi', definition: 'Line or verse. The basic structural unit of Tamil poetry. Venba poems contain 2-12 lines.' },
                                { tamil: 'சீர்', romanized: 'Sīr / Seer', definition: 'Metrical foot consisting of 2-3 syllables arranged in specific patterns. The building block of Tamil meter.' }
                        ]
                },
                {
                        category: 'Syllable Types (அசை வகைகள்)',
                        terms: [
                                { tamil: 'நேர்', romanized: 'Nēr (Ner)', definition: 'Short syllable taking one unit of time (mātrā). Consists of consonant + short vowel. Marked as (.) or (|).' },
                                { tamil: 'நிரை', romanized: 'Nirai', definition: 'Long syllable taking two units of time. Consists of consonant + long vowel OR consonant + short vowel + consonant. Marked as (-) or (||).' }
                        ]
                },
                {
                        category: 'Metrical Feet Types (சீர் வகைகள்)',
                        terms: [
                                { tamil: 'தேமா', romanized: 'Tēmā', definition: 'A seer with pattern ner + nirai (. -). One short syllable followed by one long syllable. Example: மலர் (ma-lar)' },
                                { tamil: 'புளிமா', romanized: 'Puḷimā', definition: 'A seer with pattern nirai + ner (- .). One long syllable followed by one short syllable. Example: பாடு (pā-ḍu)' },
                                { tamil: 'கூவிளம்', romanized: 'Kūviḷam', definition: 'A seer with pattern ner + ner + nirai (. . -). Two short syllables followed by one long syllable.' },
                                { tamil: 'கருவிளம்', romanized: 'Karuviḷam', definition: 'A seer with pattern nirai + nirai (- -). Two long syllables in sequence.' }
                        ]
                },
                {
                        category: 'Venba Types',
                        terms: [
                                { tamil: 'குறள் வெண்பா', romanized: 'Kural Veṇpā', definition: 'Two-line Venba form (couplet) with 4+3 word pattern. Made famous by Thiruvalluvar\'s Thirukkural. Most compact and popular form.' },
                                { tamil: 'சிந்து வெண்பா', romanized: 'Sindi Veṇpā', definition: 'Three-line Venba form with melodious rhythm. Used for more descriptive poetry.' },
                                { tamil: 'நேரிசை வெண்பா', romanized: 'Nērisai Veṇpā', definition: 'Four-line Venba form (quatrain). The standard classical extended form allowing elaborate themes.' },
                                { tamil: 'ஆசிரிய வெண்பா', romanized: 'Āsiriya Veṇpā', definition: 'Longer form with 5-12 lines, used for narrative and descriptive poetry.' }
                        ]
                },
                {
                        category: 'Structural Terms',
                        terms: [
                                { tamil: 'தளை', romanized: 'Thaḷai', definition: 'The ending pattern or constraint of a Venba line. Specific syllable patterns required at line endings.' },
                                { tamil: 'எதுகை', romanized: 'Edukai', definition: 'Consonantal rhyme - matching consonants in specific positions across lines, creating sonic cohesion.' },
                                { tamil: 'மோனை', romanized: 'Mōṉai', definition: 'Initial rhyme or alliteration - words beginning with the same sound in corresponding positions.' },
                                { tamil: 'பிரிப்பு', romanized: 'Pirippu', definition: 'The caesura or natural pause within a line of poetry, dividing it into metrical segments.' }
                        ]
                },
                {
                        category: 'Quality & Style',
                        terms: [
                                { tamil: 'செய்யுள்', romanized: 'Seyyuḷ', definition: 'Formal poetry following metrical rules, as opposed to prose. Venba is a type of seyyuḷ.' },
                                { tamil: 'இன்னிசை', romanized: 'Iṉṉisai', definition: 'Pleasant sound or euphony. The melodious quality achieved through proper syllable arrangement.' },
                                { tamil: 'சிந்து', romanized: 'Sindu', definition: 'Flowing, melodious quality in poetry, often associated with lyrical verse.' },
                                { tamil: 'நூல்', romanized: 'Nūl', definition: 'Classical text or treatise. Major works written in Venba are called nūl (e.g., Thirukkural is a nūl).' }
                        ]
                },
                {
                        category: 'Prosody Terms (இலக்கணம்)',
                        terms: [
                                { tamil: 'யாப்பு', romanized: 'Yāppu', definition: 'Prosody or metrics - the systematic study and rules of poetic meter in Tamil.' },
                                { tamil: 'மாத்திரை', romanized: 'Māttirai', definition: 'Unit of time (mora). Ner = 1 mātrā, Nirai = 2 mātrā. The basic temporal unit of meter.' },
                                { tamil: 'அளபெடை', romanized: 'Aḷapeḍai', definition: 'Metrical lengthening of syllables for rhythmic purposes in poetry.' },
                                { tamil: 'குற்று', romanized: 'Kuṯṟu', definition: 'Short vowel sounds (அ, இ, உ, எ, ஒ) forming ner syllables.' },
                                { tamil: 'நெடில்', romanized: 'Neḍil', definition: 'Long vowel sounds (ஆ, ஈ, ஊ, ஏ, ஓ, ஐ, ஔ) forming nirai syllables.' }
                        ]
                },
                {
                        category: 'Classical References',
                        terms: [
                                { tamil: 'திருக்குறள்', romanized: 'Tirukkuṟaḷ', definition: 'The most famous Tamil classical text, containing 1,330 couplets in Kural Venba form by Thiruvalluvar (circa 2nd century CE).' },
                                { tamil: 'திருவள்ளுவர்', romanized: 'Tiruvaḷḷuvar', definition: 'The legendary Tamil poet-philosopher who composed the Thirukkural, master of Kural Venba form.' },
                                { tamil: 'தொல்காப்பியம்', romanized: 'Tolkāppiyam', definition: 'The oldest extant Tamil grammar text (circa 3rd century BCE), codifying rules for Tamil prosody including Venba.' },
                                { tamil: 'சங்க இலக்கியம்', romanized: 'Caṅka Ilakkiyam', definition: 'Sangam literature (300 BCE - 300 CE), the classical Tamil literary corpus that established poetic traditions.' }
                        ]
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
        <div class="max-w-5xl mx-auto">
                <ContentNav />
                
                <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4 font-tamil text-center">
                                தமிழ் கவிதை சொற்களஞ்சியம்
                        </h1>
                        <h2 class="text-2xl text-gray-700 mb-8 text-center">
                                Tamil Poetry Glossary
                        </h2>
                        
                        <p class="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
                                A comprehensive reference for understanding வெண்பா (Venba) poetry terminology, 
                                meter patterns, and classical Tamil prosody concepts.
                        </p>
                        
                        <div class="space-y-8">
                                {#each glossaryTerms as category}
                                        <section class="border-l-4 border-orange-500 pl-6">
                                                <h3 class="text-2xl font-bold text-orange-700 mb-6">
                                                        {category.category}
                                                </h3>
                                                
                                                <dl class="space-y-6">
                                                        {#each category.terms as term}
                                                                <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-5 rounded-lg hover:shadow-md transition-shadow">
                                                                        <dt class="mb-2">
                                                                                <span class="text-2xl font-tamil text-gray-900 font-bold">
                                                                                        {term.tamil}
                                                                                </span>
                                                                                <span class="text-lg text-gray-600 ml-3 italic">
                                                                                        ({term.romanized})
                                                                                </span>
                                                                        </dt>
                                                                        <dd class="text-gray-700 leading-relaxed">
                                                                                {term.definition}
                                                                        </dd>
                                                                </div>
                                                        {/each}
                                                </dl>
                                        </section>
                                {/each}
                        </div>
                        
                        <div class="mt-12 bg-gradient-to-r from-orange-100 to-amber-100 p-8 rounded-xl">
                                <h3 class="text-2xl font-bold text-gray-800 mb-4">Quick Reference Guide</h3>
                                <div class="grid md:grid-cols-2 gap-6">
                                        <div class="bg-white p-4 rounded-lg">
                                                <h4 class="font-bold text-gray-800 mb-2">🔤 Syllable Markers</h4>
                                                <p class="text-sm text-gray-600 mb-2">
                                                        <span class="font-mono bg-gray-100 px-2 py-1 rounded">.</span> or <span class="font-mono bg-gray-100 px-2 py-1 rounded">|</span> = நேர் (ner, short)
                                                </p>
                                                <p class="text-sm text-gray-600">
                                                        <span class="font-mono bg-gray-100 px-2 py-1 rounded">-</span> or <span class="font-mono bg-gray-100 px-2 py-1 rounded">||</span> = நிரை (nirai, long)
                                                </p>
                                        </div>
                                        
                                        <div class="bg-white p-4 rounded-lg">
                                                <h4 class="font-bold text-gray-800 mb-2">📏 Common Seer Patterns</h4>
                                                <p class="text-sm text-gray-600 mb-1">தேமா: . - (ner-nirai)</p>
                                                <p class="text-sm text-gray-600 mb-1">புளிமா: - . (nirai-ner)</p>
                                                <p class="text-sm text-gray-600">கூவிளம்: . . - (ner-ner-nirai)</p>
                                        </div>
                                        
                                        <div class="bg-white p-4 rounded-lg">
                                                <h4 class="font-bold text-gray-800 mb-2">📖 Venba Line Counts</h4>
                                                <p class="text-sm text-gray-600 mb-1">Kural: 2 lines</p>
                                                <p class="text-sm text-gray-600 mb-1">Sindi: 3 lines</p>
                                                <p class="text-sm text-gray-600">Nerisai: 4 lines</p>
                                        </div>
                                        
                                        <div class="bg-white p-4 rounded-lg">
                                                <h4 class="font-bold text-gray-800 mb-2">⏱️ Time Units</h4>
                                                <p class="text-sm text-gray-600 mb-1">1 mātrā = 1 ner syllable</p>
                                                <p class="text-sm text-gray-600">2 mātrā = 1 nirai syllable</p>
                                        </div>
                                </div>
                        </div>
                        
                        <div class="mt-8 text-center">
                                <h3 class="text-xl font-bold text-gray-800 mb-4">Continue Learning</h3>
                                <div class="flex flex-wrap justify-center gap-4">
                                        <a href="/learn" class="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                                                Venba Primer
                                        </a>
                                        <a href="/gallery" class="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                                                Poetry Gallery
                                        </a>
                                        <a href="/guide" class="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                                                Interactive Guide
                                        </a>
                                </div>
                        </div>
                </div>
        </div>
</div>
