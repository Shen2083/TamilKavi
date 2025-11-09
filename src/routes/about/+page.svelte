<script lang="ts">
        import { SITE_URL } from '$lib/config';
        
        const canonicalUrl = SITE_URL + '/about';
        const pageTitle = 'About வெண்பா (Venba) Poetry – VenbaCraft';
        const pageDescription = 'Learn about வெண்பா (Venba), the classical Tamil poetic form with compact meter and elegant expression. Discover how VenbaCraft uses AI to generate authentic Tamil poetry.';
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
        <div class="max-w-4xl mx-auto">
                <div class="mb-8">
                        <a href="/" class="text-orange-600 hover:text-orange-700 font-medium">← Back to Generator</a>
                </div>
                
                <article class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6 font-tamil">
                                About வெண்பா (Venba) Poetry
                        </h1>
                        
                        <section class="prose prose-lg max-w-none space-y-6">
                                <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">What is வெண்பா?</h2>
                                <p class="text-gray-700 leading-relaxed">
                                        வெண்பா (Venba) is one of the most revered classical Tamil poetic forms, characterized by its compact meter and elegant expression. Part of the ancient Tamil literary tradition dating back over 2,000 years, Venba poetry exemplifies the beauty and sophistication of Tamil prosody.
                                </p>
                                
                                <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">Key Characteristics</h2>
                                <ul class="list-disc pl-6 space-y-2 text-gray-700">
                                        <li><strong>Compact Structure:</strong> Traditional Venba consists of four lines (சீர்கள்) with specific metrical patterns</li>
                                        <li><strong>Elegant Cadence:</strong> Each line follows precise rhythmic rules creating a musical quality</li>
                                        <li><strong>Classical Vocabulary:</strong> Uses refined Tamil words and classical literary devices</li>
                                        <li><strong>Thematic Depth:</strong> Expresses profound ideas in minimal words</li>
                                        <li><strong>Cultural Heritage:</strong> Preserves ancient Tamil linguistic and poetic traditions</li>
                                </ul>
                                
                                <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">VenbaCraft: AI-Powered Poetry</h2>
                                <p class="text-gray-700 leading-relaxed">
                                        VenbaCraft uses advanced AI technology to generate authentic Tamil classical poetry in the Venba style. Our intelligent system:
                                </p>
                                <ul class="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Understands classical Tamil prosody and meter patterns</li>
                                        <li>Adapts vocabulary based on your chosen classicalness level</li>
                                        <li>Creates emotionally resonant poems matching your selected tone</li>
                                        <li>Generates poems of varying lengths while maintaining traditional form</li>
                                        <li>Provides optional transliteration and English explanations</li>
                                </ul>
                                
                                <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">Perfect For</h2>
                                <div class="grid md:grid-cols-2 gap-4">
                                        <div class="bg-orange-50 p-4 rounded-lg">
                                                <h3 class="font-semibold text-gray-800 mb-2">📚 Students & Educators</h3>
                                                <p class="text-sm text-gray-600">Learn and teach classical Tamil poetry forms</p>
                                        </div>
                                        <div class="bg-orange-50 p-4 rounded-lg">
                                                <h3 class="font-semibold text-gray-800 mb-2">✍️ Poets & Writers</h3>
                                                <p class="text-sm text-gray-600">Find inspiration and explore Venba composition</p>
                                        </div>
                                        <div class="bg-orange-50 p-4 rounded-lg">
                                                <h3 class="font-semibold text-gray-800 mb-2">🌏 Tamil Enthusiasts</h3>
                                                <p class="text-sm text-gray-600">Appreciate and preserve Tamil literary heritage</p>
                                        </div>
                                        <div class="bg-orange-50 p-4 rounded-lg">
                                                <h3 class="font-semibold text-gray-800 mb-2">🎓 Researchers</h3>
                                                <p class="text-sm text-gray-600">Explore AI applications in classical literature</p>
                                        </div>
                                </div>
                                
                                <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">Frequently Asked Questions</h2>
                                
                                <div class="space-y-4">
                                        <div class="bg-gray-50 p-4 rounded-lg">
                                                <h3 class="font-semibold text-gray-800 mb-2">How accurate is the AI-generated poetry?</h3>
                                                <p class="text-sm text-gray-600">Our AI is trained on classical Tamil literature and generates poems following traditional Venba patterns. While not perfect, it creates authentic-sounding verses that respect Tamil poetic conventions.</p>
                                        </div>
                                        
                                        <div class="bg-gray-50 p-4 rounded-lg">
                                                <h3 class="font-semibold text-gray-800 mb-2">Can I use the poems commercially?</h3>
                                                <p class="text-sm text-gray-600">Yes! All generated poems are yours to use freely for any purpose, including commercial projects, educational materials, or personal enjoyment.</p>
                                        </div>
                                        
                                        <div class="bg-gray-50 p-4 rounded-lg">
                                                <h3 class="font-semibold text-gray-800 mb-2">What is the "Classicalness Level"?</h3>
                                                <p class="text-sm text-gray-600">This slider controls the sophistication of vocabulary and adherence to traditional forms. Lower values produce accessible, modern Tamil while higher values generate highly classical, traditional language.</p>
                                        </div>
                                        
                                        <div class="bg-gray-50 p-4 rounded-lg">
                                                <h3 class="font-semibold text-gray-800 mb-2">Do I need to know Tamil to use this?</h3>
                                                <p class="text-sm text-gray-600">Not necessarily! You can enter keywords in English, and enable transliteration and glossary options to understand the generated Tamil poetry.</p>
                                        </div>
                                </div>
                        </section>
                        
                        <div class="mt-12 text-center">
                                <a href="/" class="inline-block bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-orange-700 hover:to-amber-700 transition-colors">
                                        Generate Your Venba Poem
                                </a>
                        </div>
                </article>
        </div>
</div>
