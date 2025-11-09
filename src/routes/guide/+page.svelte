<script lang="ts">
        import { SITE_URL } from '$lib/config';
        import ContentNav from '$lib/components/ContentNav.svelte';
        
        const canonicalUrl = SITE_URL + '/guide';
        const pageTitle = 'How to Generate வெண்பா Poetry - Interactive VenbaCraft Guide';
        const pageDescription = 'Learn how to use VenbaCraft to generate authentic Tamil வெண்பா poetry. Understand how keywords, emotional tone, and classicalness levels affect your AI-generated Tamil poems.';
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
                        <h1 class="text-4xl font-bold text-gray-900 mb-6 font-tamil text-center">
                                VenbaCraft Usage Guide
                        </h1>
                        <p class="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
                                Master the art of generating authentic வெண்பா poetry with AI. Learn how each parameter shapes your poem.
                        </p>
                        
                        <!-- Keywords Section -->
                        <section class="mb-12">
                                <div class="bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-xl mb-6">
                                        <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                                <span>🔑</span>
                                                <span>Step 1: Choose Your Keywords</span>
                                        </h2>
                                        <p class="text-gray-700 mb-4">
                                                Keywords are the foundation of your poem. They define the subject matter and imagery.
                                        </p>
                                        
                                        <div class="grid md:grid-cols-2 gap-4">
                                                <div class="bg-white p-5 rounded-lg">
                                                        <h3 class="font-bold text-orange-700 mb-3">✅ Good Keyword Examples</h3>
                                                        <ul class="space-y-2 text-sm text-gray-700">
                                                                <li>• <strong>Specific:</strong> "sunset, ocean, peace" → Creates vivid imagery</li>
                                                                <li>• <strong>Thematic:</strong> "love, memory, moonlight" → Emotional depth</li>
                                                                <li>• <strong>Abstract:</strong> "wisdom, justice, truth" → Philosophical content</li>
                                                                <li>• <strong>Mixed:</strong> "flower, morning, joy" → Balanced concrete/abstract</li>
                                                                <li>• <strong>Tamil:</strong> "மலர், காதல், இயற்கை" → Direct Tamil input</li>
                                                        </ul>
                                                </div>
                                                
                                                <div class="bg-white p-5 rounded-lg border-l-4 border-red-400">
                                                        <h3 class="font-bold text-red-700 mb-3">❌ Avoid These</h3>
                                                        <ul class="space-y-2 text-sm text-gray-700">
                                                                <li>• Too vague: "stuff, things, it"</li>
                                                                <li>• Too many: "love joy peace harmony beauty grace..." (keep 3-5)</li>
                                                                <li>• Conflicting: "war peace" (unless intentional contrast)</li>
                                                                <li>• Full sentences: Use keywords, not complete thoughts</li>
                                                        </ul>
                                                </div>
                                        </div>
                                        
                                        <div class="mt-4 bg-blue-50 p-4 rounded-lg">
                                                <p class="text-sm text-gray-700">
                                                        <strong>💡 Pro Tip:</strong> The AI works well with both English and Tamil keywords. 
                                                        Mix languages if you want: "sunset, காதல், peace" works perfectly!
                                                </p>
                                        </div>
                                </div>
                        </section>

                        <!-- Tone Section -->
                        <section class="mb-12">
                                <div class="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl mb-6">
                                        <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                                <span>🎭</span>
                                                <span>Step 2: Select Emotional Tone</span>
                                        </h2>
                                        <p class="text-gray-700 mb-4">
                                                The emotional tone shapes the mood and feeling of your poem. Each tone uses different vocabulary and imagery.
                                        </p>
                                        
                                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                <div class="bg-white p-4 rounded-lg border-t-4 border-blue-400">
                                                        <h3 class="font-bold text-blue-700 mb-2">😌 Serene</h3>
                                                        <p class="text-sm text-gray-600 mb-2"><strong>Best for:</strong> Nature, peace, meditation</p>
                                                        <p class="text-sm text-gray-700">Creates calm, tranquil poetry with flowing rhythm. Uses words related to stillness, water, sky.</p>
                                                        <p class="text-xs text-gray-500 mt-2 italic">Example: "Still lake reflects the moonlight..."</p>
                                                </div>
                                                
                                                <div class="bg-white p-4 rounded-lg border-t-4 border-pink-400">
                                                        <h3 class="font-bold text-pink-700 mb-2">❤️ Romantic</h3>
                                                        <p class="text-sm text-gray-600 mb-2"><strong>Best for:</strong> Love, longing, relationships</p>
                                                        <p class="text-sm text-gray-700">Emphasizes emotions, beauty, and connection. Uses imagery of flowers, stars, hearts.</p>
                                                        <p class="text-xs text-gray-500 mt-2 italic">Example: "Your eyes are like the stars..."</p>
                                                </div>
                                                
                                                <div class="bg-white p-4 rounded-lg border-t-4 border-gray-500">
                                                        <h3 class="font-bold text-gray-700 mb-2">😔 Melancholic</h3>
                                                        <p class="text-sm text-gray-600 mb-2"><strong>Best for:</strong> Loss, reflection, nostalgia</p>
                                                        <p class="text-sm text-gray-700">Creates wistful, introspective poetry. Uses imagery of rain, dusk, memories.</p>
                                                        <p class="text-xs text-gray-500 mt-2 italic">Example: "Autumn leaves fall like tears..."</p>
                                                </div>
                                                
                                                <div class="bg-white p-4 rounded-lg border-t-4 border-purple-400">
                                                        <h3 class="font-bold text-purple-700 mb-2">🙏 Devotional</h3>
                                                        <p class="text-sm text-gray-600 mb-2"><strong>Best for:</strong> Faith, prayer, spirituality</p>
                                                        <p class="text-sm text-gray-700">Reverential and sacred language. Uses temple, divine, grace imagery.</p>
                                                        <p class="text-xs text-gray-500 mt-2 italic">Example: "Divine light illuminates..."</p>
                                                </div>
                                                
                                                <div class="bg-white p-4 rounded-lg border-t-4 border-yellow-400">
                                                        <h3 class="font-bold text-yellow-700 mb-2">😄 Playful</h3>
                                                        <p class="text-sm text-gray-600 mb-2"><strong>Best for:</strong> Joy, celebration, lightness</p>
                                                        <p class="text-sm text-gray-700">Upbeat and cheerful. Uses bright imagery, laughter, dance themes.</p>
                                                        <p class="text-xs text-gray-500 mt-2 italic">Example: "Children dance in the rain..."</p>
                                                </div>
                                                
                                                <div class="bg-white p-4 rounded-lg border-t-4 border-red-600">
                                                        <h3 class="font-bold text-red-700 mb-2">⚔️ Heroic</h3>
                                                        <p class="text-sm text-gray-600 mb-2"><strong>Best for:</strong> Courage, valor, strength</p>
                                                        <p class="text-sm text-gray-700">Bold and powerful language. Uses battle, victory, honor themes.</p>
                                                        <p class="text-xs text-gray-500 mt-2 italic">Example: "Warriors stand with courage..."</p>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        <!-- Classicalness Section -->
                        <section class="mb-12">
                                <div class="bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-xl mb-6">
                                        <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                                <span>📊</span>
                                                <span>Step 3: Adjust Classicalness Level (0-100)</span>
                                        </h2>
                                        <p class="text-gray-700 mb-6">
                                                This controls the sophistication of vocabulary and adherence to traditional Tamil literary style.
                                        </p>
                                        
                                        <div class="space-y-4">
                                                <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                                                        <h3 class="font-bold text-green-800 mb-2">🟢 Low (0-30): Modern & Accessible</h3>
                                                        <p class="text-sm text-gray-700 mb-3">
                                                                Uses contemporary Tamil words that are easy to understand. Light classical flavor.
                                                                Perfect for beginners or modern contexts.
                                                        </p>
                                                        <div class="bg-white p-3 rounded font-tamil text-lg">
                                                                Example: நல்ல நாள், அழகான மலர்கள் (simple, everyday words)
                                                        </div>
                                                </div>
                                                
                                                <div class="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
                                                        <h3 class="font-bold text-yellow-800 mb-2">🟡 Medium (40-70): Balanced Classical</h3>
                                                        <p class="text-sm text-gray-700 mb-3">
                                                                Balanced venba-like phrasing with classical elements. Sophisticated yet readable.
                                                                Best for most users seeking authentic Venba feel.
                                                        </p>
                                                        <div class="bg-white p-3 rounded font-tamil text-lg">
                                                                Example: மலர்ந்த பூக்கள், கவிதையின் அழகு (balanced vocabulary)
                                                        </div>
                                                </div>
                                                
                                                <div class="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                                                        <h3 class="font-bold text-red-800 mb-2">🔴 High (80-100): Pure Classical</h3>
                                                        <p class="text-sm text-gray-700 mb-3">
                                                                Tight classical diction with traditional prosody & cadence. Uses archaic and literary Tamil words.
                                                                For scholars and Tamil literature enthusiasts.
                                                        </p>
                                                        <div class="bg-white p-3 rounded font-tamil text-lg">
                                                                Example: மலர்ந்தன பூங்கொத்துகள், காவியத்தின் செழுமை (classical literary style)
                                                        </div>
                                                </div>
                                        </div>
                                        
                                        <div class="mt-6 bg-blue-50 p-4 rounded-lg">
                                                <p class="text-sm text-gray-700">
                                                        <strong>💡 Recommendation:</strong> Start at level 70 for authentic Venba feel that's still accessible. 
                                                        Adjust based on your Tamil proficiency and desired style.
                                                </p>
                                        </div>
                                </div>
                        </section>

                        <!-- Length Section -->
                        <section class="mb-12">
                                <div class="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl mb-6">
                                        <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                                <span>📏</span>
                                                <span>Step 4: Choose Poem Length</span>
                                        </h2>
                                        
                                        <div class="grid md:grid-cols-3 gap-4">
                                                <div class="bg-white p-5 rounded-lg">
                                                        <h3 class="font-bold text-orange-700 mb-2">Short (2-3 lines)</h3>
                                                        <p class="text-sm text-gray-700 mb-2">Quick, impactful verses. Like haiku in conciseness.</p>
                                                        <p class="text-xs text-gray-600"><strong>Use when:</strong> You want a brief, punchy message</p>
                                                </div>
                                                
                                                <div class="bg-white p-5 rounded-lg border-2 border-orange-500">
                                                        <h3 class="font-bold text-orange-700 mb-2">Standard (4 lines) ⭐</h3>
                                                        <p class="text-sm text-gray-700 mb-2">Traditional Kural Venba form. Most authentic.</p>
                                                        <p class="text-xs text-gray-600"><strong>Use when:</strong> You want classic Tamil poetry (recommended)</p>
                                                </div>
                                                
                                                <div class="bg-white p-5 rounded-lg">
                                                        <h3 class="font-bold text-orange-700 mb-2">Extended (5-6 lines)</h3>
                                                        <p class="text-sm text-gray-700 mb-2">More elaborate, narrative-style verses.</p>
                                                        <p class="text-xs text-gray-600"><strong>Use when:</strong> You need more space for complex themes</p>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        <!-- Display Options -->
                        <section class="mb-12">
                                <div class="bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-xl">
                                        <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                                <span>⚙️</span>
                                                <span>Step 5: Display Options</span>
                                        </h2>
                                        
                                        <div class="space-y-3">
                                                <div class="bg-white p-4 rounded-lg flex items-start gap-3">
                                                        <span class="text-2xl">📝</span>
                                                        <div>
                                                                <h3 class="font-bold text-gray-800 mb-1">Show Transliteration</h3>
                                                                <p class="text-sm text-gray-600">
                                                                        Displays romanized version of the Tamil text. Helpful if you can't read Tamil script.
                                                                </p>
                                                        </div>
                                                </div>
                                                
                                                <div class="bg-white p-4 rounded-lg flex items-start gap-3">
                                                        <span class="text-2xl">💬</span>
                                                        <div>
                                                                <h3 class="font-bold text-gray-800 mb-1">Show Gloss (Brief Meaning)</h3>
                                                                <p class="text-sm text-gray-600">
                                                                        Provides an English translation/explanation of the poem's meaning.
                                                                </p>
                                                        </div>
                                                </div>
                                                
                                                <div class="bg-white p-4 rounded-lg flex items-start gap-3">
                                                        <span class="text-2xl">🎵</span>
                                                        <div>
                                                                <h3 class="font-bold text-gray-800 mb-1">Show Meter Note</h3>
                                                                <p class="text-sm text-gray-600">
                                                                        Explains the metrical structure and prosody pattern used in the poem.
                                                                </p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        <!-- Example Workflow -->
                        <section class="bg-gradient-to-br from-orange-500 to-amber-500 text-white p-8 rounded-2xl">
                                <h2 class="text-3xl font-bold mb-6 text-center">Example Workflow</h2>
                                <div class="grid md:grid-cols-5 gap-4 text-center">
                                        <div class="bg-white/20 p-4 rounded-lg backdrop-blur">
                                                <div class="text-3xl mb-2">🔑</div>
                                                <p class="text-sm font-semibold">Keywords:</p>
                                                <p class="text-xs">"sunset, ocean, peace"</p>
                                        </div>
                                        <div class="bg-white/20 p-4 rounded-lg backdrop-blur">
                                                <div class="text-3xl mb-2">🎭</div>
                                                <p class="text-sm font-semibold">Tone:</p>
                                                <p class="text-xs">Serene</p>
                                        </div>
                                        <div class="bg-white/20 p-4 rounded-lg backdrop-blur">
                                                <div class="text-3xl mb-2">📊</div>
                                                <p class="text-sm font-semibold">Classicalness:</p>
                                                <p class="text-xs">70/100</p>
                                        </div>
                                        <div class="bg-white/20 p-4 rounded-lg backdrop-blur">
                                                <div class="text-3xl mb-2">📏</div>
                                                <p class="text-sm font-semibold">Length:</p>
                                                <p class="text-xs">Standard</p>
                                        </div>
                                        <div class="bg-white/20 p-4 rounded-lg backdrop-blur">
                                                <div class="text-3xl mb-2">✨</div>
                                                <p class="text-sm font-semibold">Result:</p>
                                                <p class="text-xs">Beautiful Venba!</p>
                                        </div>
                                </div>
                                
                                <div class="mt-8 text-center">
                                        <a href="/" class="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                                                Try It Now →
                                        </a>
                                </div>
                        </section>
                </div>
        </div>
</div>
