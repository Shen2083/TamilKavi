<script lang="ts">
        import { transliterate } from '$lib/utils/transliterate';
        import { getMeterFeel } from '$lib/utils/heuristics';
        import { toPng } from 'html-to-image';

        let {
                poem,
                params,
                onRegenerate
        }: {
                poem: string;
                params: any;
                onRegenerate: () => void;
        } = $props();

        let poemContainer: HTMLElement;

        function parsePoem(poemText: string) {
                const sections = poemText.split('\n\n');
                const tamilPoem = sections[0];
                let translit = '';
                let gloss = '';
                let meterNote = '';

                for (let i = 1; i < sections.length; i++) {
                        const section = sections[i];
                        if (section.toLowerCase().includes('transliteration') || section.toLowerCase().includes('romanization')) {
                                translit = section.split('\n').slice(1).join('\n');
                        } else if (section.toLowerCase().includes('gloss') || section.toLowerCase().includes('meaning')) {
                                gloss = section.split('\n').slice(1).join('\n');
                        } else if (section.toLowerCase().includes('meter note') || section.toLowerCase().includes('meter:')) {
                                meterNote = section.split('\n').slice(1).join('\n');
                        }
                }

                return {
                        tamil: tamilPoem,
                        transliteration: translit || (params.wantTranslit ? transliterate(tamilPoem) : ''),
                        gloss: gloss,
                        meterNote: meterNote || (params.wantMeterNote ? getMeterFeel(params.classicalness) : '')
                };
        }

        const parsed = $derived(parsePoem(poem));

        async function copyToClipboard() {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                        try {
                                await navigator.clipboard.writeText(poem);
                                alert('Poem copied to clipboard!');
                        } catch (err) {
                                fallbackCopyToClipboard(poem);
                        }
                } else {
                        fallbackCopyToClipboard(poem);
                }
        }

        function fallbackCopyToClipboard(text: string) {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                try {
                        const success = document.execCommand('copy');
                        if (success) {
                                alert(text.includes('http') ? 'Share link copied to clipboard!' : 'Poem copied to clipboard!');
                        } else {
                                alert('Failed to copy. Please manually copy: ' + (text.includes('http') ? text : 'the poem text'));
                        }
                } catch (err) {
                        alert('Failed to copy. Please manually copy: ' + (text.includes('http') ? text : 'the poem text'));
                } finally {
                        document.body.removeChild(textarea);
                }
        }

        async function downloadPNG() {
                if (!poemContainer) return;
                try {
                        const dataUrl = await toPng(poemContainer, { 
                                quality: 0.95,
                                backgroundColor: '#ffffff'
                        });
                        const link = document.createElement('a');
                        link.download = 'venba-poem.png';
                        link.href = dataUrl;
                        link.click();
                } catch (err) {
                        alert('Failed to generate image');
                }
        }

        function shareURL() {
                const url = new URL(window.location.href);
                url.searchParams.set('keywords', params.keywords);
                url.searchParams.set('tone', params.tone);
                url.searchParams.set('classicalness', params.classicalness);
                url.searchParams.set('length', params.length);
                url.searchParams.set('wantTranslit', params.wantTranslit);
                url.searchParams.set('wantGloss', params.wantGloss);
                url.searchParams.set('wantMeterNote', params.wantMeterNote);
                
                const urlString = url.toString();
                
                if (navigator.clipboard && navigator.clipboard.writeText) {
                        navigator.clipboard.writeText(urlString).then(() => {
                                alert('Share link copied to clipboard!');
                        }).catch(() => {
                                fallbackCopyToClipboard(urlString);
                        });
                } else {
                        fallbackCopyToClipboard(urlString);
                }
        }
</script>

<div class="bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div class="flex items-center justify-between">
                <h2 class="text-2xl font-bold text-gray-800">Your Venba</h2>
                <div class="flex gap-2">
                        <button
                                onclick={onRegenerate}
                                class="px-4 py-2 text-sm bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition"
                        >
                                ↻ Regenerate
                        </button>
                        <button
                                onclick={copyToClipboard}
                                class="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                        >
                                📋 Copy
                        </button>
                        <button
                                onclick={downloadPNG}
                                class="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                        >
                                ⬇ PNG
                        </button>
                        <button
                                onclick={shareURL}
                                class="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                        >
                                🔗 Share
                        </button>
                </div>
        </div>

        <div bind:this={poemContainer} class="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg">
                <div class="font-tamil text-2xl leading-relaxed text-gray-800 whitespace-pre-wrap">
                        {parsed.tamil}
                </div>

                {#if params.wantTranslit && parsed.transliteration}
                        <div class="mt-6 pt-6 border-t border-orange-200">
                                <h3 class="text-sm font-semibold text-gray-600 mb-2">Transliteration:</h3>
                                <div class="text-gray-700 italic whitespace-pre-wrap">{parsed.transliteration}</div>
                        </div>
                {/if}

                {#if params.wantGloss && parsed.gloss}
                        <div class="mt-4 pt-4 border-t border-orange-200">
                                <h3 class="text-sm font-semibold text-gray-600 mb-2">Gloss:</h3>
                                <div class="text-gray-700 whitespace-pre-wrap">{parsed.gloss}</div>
                        </div>
                {/if}

                {#if params.wantMeterNote && parsed.meterNote}
                        <div class="mt-4 pt-4 border-t border-orange-200">
                                <h3 class="text-sm font-semibold text-gray-600 mb-2">Meter Note:</h3>
                                <div class="text-gray-700 italic whitespace-pre-wrap">{parsed.meterNote}</div>
                        </div>
                {/if}
        </div>
</div>
