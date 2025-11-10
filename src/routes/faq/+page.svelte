<script lang="ts">
        import { SITE_URL } from '$lib/config';
        import ContentNav from '$lib/components/ContentNav.svelte';
        
        const canonicalUrl = SITE_URL + '/faq';
        const pageTitle = 'வெண்பா Poetry FAQ - Common Questions About Tamil Classical Poetry';
        const pageDescription = 'Frequently asked questions about வெண்பா (Venba) poetry, AI poetry generation, Tamil classical literature, meter patterns, and using VenbaCraft to create authentic Tamil poems.';
        
        const faqs = [
                {
                        category: 'About Venba Poetry',
                        questions: [
                                {
                                        q: 'What is வெண்பா (Venba) poetry?',
                                        a: 'Venba is a classical Tamil poetic form characterized by strict metrical rules based on syllable patterns called ner (short) and nirai (long). It dates back over 2,000 years and represents one of the most refined forms of Tamil prosody. The most famous example is Thiruvalluvar\'s Thirukkural, which contains 1,330 couplets in Kural Venba form.'
                                },
                                {
                                        q: 'How is Venba different from other poetry forms?',
                                        a: 'Unlike free verse or rhyming poetry, Venba follows strict metrical patterns based on syllable duration rather than stress or rhyme. Each line must contain specific patterns of short and long syllables arranged in metrical feet (seer). This creates a unique rhythmic quality distinct from Western poetry forms like sonnets or haiku.'
                                },
                                {
                                        q: 'What are the main types of Venba?',
                                        a: 'The main types are: 1) Kural Venba (2 lines, used in Thirukkural), 2) Sindi Venba (3 lines, melodious form), 3) Nerisai Venba (4 lines, classical extended form), and 4) Āsiriya Venba (5-12 lines, for longer compositions). Kural Venba is the most popular and compact form.'
                                },
                                {
                                        q: 'Who can write Venba poetry?',
                                        a: 'Traditionally, Venba was written by Tamil scholars and poets who had mastered the complex rules of Tamil prosody (yāppu ilakkaṇam). Today, with AI tools like VenbaCraft, anyone interested in Tamil literature can generate authentic Venba poetry, making this classical form accessible to learners, students, and enthusiasts worldwide.'
                                },
                                {
                                        q: 'What is the cultural significance of Venba?',
                                        a: 'Venba represents the pinnacle of Tamil literary refinement and has been used for over 2,000 years to express philosophical wisdom, devotional hymns, romantic poetry, and moral teachings. The Thirukkural, written entirely in Kural Venba, is considered one of the world\'s great ethical texts and is studied globally for its universal wisdom.'
                                }
                        ]
                },
                {
                        category: 'Using VenbaCraft',
                        questions: [
                                {
                                        q: 'How does VenbaCraft generate Venba poetry?',
                                        a: 'VenbaCraft uses advanced AI language models trained on vast amounts of text including Tamil literature. The system is given detailed instructions about Venba meter patterns, classical Tamil vocabulary, and prosody rules. It generates poems that follow traditional Venba structures while incorporating your chosen keywords, tone, and classicalness level.'
                                },
                                {
                                        q: 'Can I enter keywords in English?',
                                        a: 'Yes! VenbaCraft accepts keywords in both English and Tamil. You can mix languages too (e.g., "sunset, காதல், peace"). The AI understands both and will generate Tamil poetry that incorporates the themes and imagery from your keywords, regardless of which language you used to express them.'
                                },
                                {
                                        q: 'What does the "Classicalness Level" control?',
                                        a: 'The classicalness slider (0-100) controls the sophistication of Tamil vocabulary and adherence to traditional literary style. Low levels (0-30) use modern, accessible Tamil. Medium levels (40-70) balance classical and contemporary vocabulary. High levels (80-100) use archaic, literary Tamil words found in ancient texts. Start at 70 for authentic Venba that\'s still readable.'
                                },
                                {
                                        q: 'Why should I enable transliteration and gloss?',
                                        a: 'Transliteration shows the romanized version of Tamil text, helpful if you can\'t read Tamil script or are learning the language. Gloss provides an English translation/explanation of the poem\'s meaning. Together, these features make Venba accessible to non-Tamil speakers and learners, helping you understand and appreciate the poetry even if you\'re not fluent in Tamil.'
                                },
                                {
                                        q: 'Can I save or share the generated poems?',
                                        a: 'Yes! VenbaCraft offers several sharing options: 1) Copy to clipboard to paste anywhere, 2) Download as PNG image for social media or printing, and 3) Share via URL which preserves all your generation parameters. All generated poems are yours to use freely for any purpose including education, creative projects, or commercial use.'
                                },
                                {
                                        q: 'How accurate is the AI-generated Venba meter?',
                                        a: 'The AI generates poems following Venba-style patterns and classical Tamil vocabulary, creating authentic-sounding verses that respect Tamil poetic conventions. While not perfect by strict classical standards (which would require deep prosody analysis), the poems capture the essence, rhythm, and literary feel of traditional Venba. They\'re excellent for learning, inspiration, and enjoying Tamil poetry.'
                                }
                        ]
                },
                {
                        category: 'Tamil Poetry Learning',
                        questions: [
                                {
                                        q: 'How do I learn to read Tamil script?',
                                        a: 'Start by learning the Tamil alphabet (உயிர், மெய், உயிர்மெய் letters). Use online resources, apps, or courses for Tamil learners. VenbaCraft\'s transliteration feature can help you connect Tamil script with pronunciation. Practice reading the generated poems with transliteration enabled, then try reading without it as you improve.'
                                },
                                {
                                        q: 'What is "ner" and "nirai" in Venba meter?',
                                        a: 'Ner (நேர்) is a short syllable taking one unit of time, typically consonant + short vowel (க, தி, மு). Nirai (நிரை) is a long syllable taking two units of time, either consonant + long vowel (கா, தீ) or consonant + short vowel + consonant (கல், தன்). Understanding ner and nirai is fundamental to understanding Tamil prosody and Venba meter patterns.'
                                },
                                {
                                        q: 'What are "seer" (சீர்) in Tamil poetry?',
                                        a: 'Seer are metrical feet consisting of 2-3 syllables in specific patterns. The four main types are: 1) Tēmā (ner-nirai), 2) Puḷimā (nirai-ner), 3) Kūviḷam (ner-ner-nirai), and 4) Karuviḷam (nirai-nirai). Lines of Venba are built by combining these seer in prescribed ways, creating the rhythmic structure of the poetry.'
                                },
                                {
                                        q: 'Where can I read more authentic Tamil Venba poetry?',
                                        a: 'Essential readings include: 1) Thirukkural by Thiruvalluvar (1,330 couplets of wisdom), 2) Sangam literature collections, 3) Tamil devotional poetry (Tevaram, Nalayira Divya Prabandham), 4) Classical grammar texts like Tolkāppiyam. Many are available in Tamil with English translations online and in libraries. VenbaCraft\'s gallery also provides analyzed examples to study.'
                                },
                                {
                                        q: 'Do I need to understand Tamil grammar to appreciate Venba?',
                                        a: 'While deep grammatical knowledge enhances appreciation, you don\'t need it to enjoy Venba poetry. Start by reading poems with translations and glosses. Notice the rhythm and flow. VenbaCraft\'s generated poems come with explanations that help you understand the structure. As you read more, you\'ll naturally develop an ear for the meter and beauty of Tamil verse.'
                                },
                                {
                                        q: 'What resources does VenbaCraft offer for learning?',
                                        a: 'VenbaCraft provides: 1) Venba Primer - comprehensive guide to meter and prosody, 2) Poetry Gallery - analyzed examples with syllable breakdowns, 3) Glossary - complete terminology reference, 4) Interactive Guide - step-by-step generation tutorial, and 5) FAQ - answers to common questions. Together, these resources create a complete learning environment for Tamil classical poetry.'
                                }
                        ]
                },
                {
                        category: 'Technical Questions',
                        questions: [
                                {
                                        q: 'Is VenbaCraft free to use?',
                                        a: 'Yes, VenbaCraft is completely free to use. You can generate unlimited Venba poems without any cost, subscription, or registration. The tool was created to preserve and promote Tamil classical poetry, making this ancient art form accessible to everyone worldwide.'
                                },
                                {
                                        q: 'Do I need to create an account?',
                                        a: 'No account is required! VenbaCraft works instantly without registration. Simply visit the website, enter your keywords, adjust settings, and generate poetry immediately. This keeps the tool simple, accessible, and privacy-friendly.'
                                },
                                {
                                        q: 'Can I use VenbaCraft on mobile devices?',
                                        a: 'Yes! VenbaCraft is fully responsive and works on smartphones, tablets, and desktops. The interface adapts to your screen size, making it easy to generate and read Tamil poetry on any device. The touch-friendly design works perfectly on mobile browsers.'
                                },
                                {
                                        q: 'Does VenbaCraft work offline?',
                                        a: 'No, VenbaCraft requires an internet connection because it uses cloud-based AI models to generate poetry. The AI processing happens on remote servers, ensuring you always get high-quality results without needing to download large language models to your device.'
                                },
                                {
                                        q: 'What AI model powers VenbaCraft?',
                                        a: 'VenbaCraft uses OpenAI\'s advanced language models, which have been trained on diverse text including Tamil literature. Through carefully crafted prompts and instructions about Venba prosody, the AI generates authentic-sounding Tamil classical poetry. The system balances quality, speed, and cost-effectiveness.'
                                },
                                {
                                        q: 'Can I contribute to VenbaCraft or report issues?',
                                        a: 'Yes! We welcome feedback, suggestions, and bug reports. If you find issues with generated poetry, have ideas for features, or want to suggest improvements to our educational content, please reach out through our contact channels. Community input helps make VenbaCraft better for everyone.'
                                }
                        ]
                },
                {
                        category: 'Cultural & Educational Use',
                        questions: [
                                {
                                        q: 'Can I use VenbaCraft for educational purposes?',
                                        a: 'Absolutely! VenbaCraft is perfect for education. Teachers can use it to introduce students to Tamil classical poetry, demonstrate meter patterns, and create engaging lessons. Students can generate examples for assignments, learn about Venba structure, and explore Tamil literary heritage. All generated content is free to use in educational settings.'
                                },
                                {
                                        q: 'Is VenbaCraft suitable for Tamil language classes?',
                                        a: 'Yes! VenbaCraft is an excellent tool for Tamil language instruction at all levels. Beginners can see how words combine poetically, intermediate learners can study meter patterns, and advanced students can analyze classical vocabulary. The transliteration and gloss features help non-native speakers understand and appreciate Tamil poetry.'
                                },
                                {
                                        q: 'Can I use generated poems in creative projects?',
                                        a: 'Yes! All poems generated by VenbaCraft are yours to use freely for any purpose - personal, educational, or commercial. Use them in books, websites, artwork, videos, social media, presentations, or any creative project. While we appreciate attribution, it\'s not required. The poems are AI-generated based on your inputs, so they belong to you.'
                                },
                                {
                                        q: 'How can VenbaCraft help preserve Tamil culture?',
                                        a: 'VenbaCraft makes classical Tamil poetry accessible to modern audiences worldwide, including diaspora communities and Tamil learners. By lowering barriers to creating and understanding Venba, it helps keep this 2,000-year-old art form alive and relevant. The educational resources teach new generations about Tamil literary heritage, ensuring these traditions continue.'
                                },
                                {
                                        q: 'Is VenbaCraft appropriate for religious or devotional use?',
                                        a: 'Yes, with the "Devotional" tone setting, VenbaCraft can generate poetry suitable for religious contexts, prayer, or spiritual reflection. Many classical Tamil poets wrote devotional Venba (like Tevaram), and this tool continues that tradition. However, for formal religious ceremonies, consult with appropriate religious authorities about using AI-generated verses.'
                                },
                                {
                                        q: 'Can VenbaCraft help me write my own Venba poetry?',
                                        a: 'Definitely! Use VenbaCraft as a learning tool and inspiration source. Study the generated poems to understand meter patterns, see how keywords transform into verses, and notice classical vocabulary usage. Try analyzing the syllable structures, then attempt writing your own. VenbaCraft can also serve as a starting point that you refine manually, blending AI assistance with human creativity.'
                                }
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
        
        {@html `<script type="application/ld+json">${JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.flatMap(cat => cat.questions.map(faq => ({
                        '@type': 'Question',
                        name: faq.q,
                        acceptedAnswer: {
                                '@type': 'Answer',
                                text: faq.a
                        }
                })))
        })}</script>`}
</svelte:head>

<div class="min-h-screen py-12 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div class="max-w-4xl mx-auto">
                <ContentNav />
                
                <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4 font-tamil text-center">
                                அடிக்கடி கேட்கப்படும் கேள்விகள்
                        </h1>
                        <h2 class="text-2xl text-gray-700 mb-8 text-center">
                                Frequently Asked Questions
                        </h2>
                        
                        <p class="text-gray-600 text-lg mb-12 text-center max-w-2xl mx-auto">
                                Everything you need to know about வெண்பா poetry and using VenbaCraft to generate authentic Tamil classical verse.
                        </p>
                        
                        <div class="space-y-12">
                                {#each faqs as category}
                                        <section>
                                                <h3 class="text-2xl font-bold text-orange-700 mb-6 pb-3 border-b-2 border-orange-200">
                                                        {category.category}
                                                </h3>
                                                
                                                <div class="space-y-6">
                                                        {#each category.questions as faq}
                                                                <details class="group bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                                                                        <summary class="font-bold text-gray-900 text-lg cursor-pointer flex items-start gap-3 list-none">
                                                                                <span class="text-orange-600 group-open:rotate-90 transition-transform">▶</span>
                                                                                <span class="flex-1">{faq.q}</span>
                                                                        </summary>
                                                                        <div class="mt-4 pl-8 text-gray-700 leading-relaxed border-l-4 border-orange-300 pl-4 bg-white p-4 rounded">
                                                                                {faq.a}
                                                                        </div>
                                                                </details>
                                                        {/each}
                                                </div>
                                        </section>
                                {/each}
                        </div>
                        
                        <div class="mt-12 bg-gradient-to-r from-orange-100 to-amber-100 p-8 rounded-xl text-center">
                                <h3 class="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
                                <p class="text-gray-700 mb-6">
                                        Explore our comprehensive learning resources or start generating your own Venba poetry!
                                </p>
                                <div class="flex flex-wrap justify-center gap-4">
                                        <a href="/learn" class="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                                                Venba Primer
                                        </a>
                                        <a href="/gallery" class="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                                                Poetry Gallery
                                        </a>
                                        <a href="/guide" class="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                                                Usage Guide
                                        </a>
                                        <a href="/" class="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-3 rounded-lg hover:from-orange-700 hover:to-amber-700 transition-colors font-bold">
                                                Generate Poetry
                                        </a>
                                </div>
                        </div>
                </div>
        </div>
</div>
