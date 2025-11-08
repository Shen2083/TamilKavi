import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { OPENAI_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { keywords, tone, classicalness, length, wantTranslit, wantGloss, wantMeterNote } = await request.json();

		if (!OPENAI_API_KEY) {
			return json({ error: 'OpenAI API key not configured. Please add OPENAI_API_KEY to your secrets.' }, { status: 500 });
		}

		const lengthGuide = {
			'Short': '2-3 lines',
			'Standard': '4 lines (traditional Venba)',
			'Extended': '5-6 lines'
		}[length] || '4 lines';

		const systemPrompt = `You are "Venba Studio," a Tamil classical poetry assistant.
Write in the style of வேண்பா (Venba): compact cadence with elegant Tamil.
Language: elegant Tamil; avoid slang; minimize Sanskrit unless tone requires.

Respect Classicalness Level:
  0-30: light classical flavor, accessible language
  40-70: balanced venba-like phrasing with classical elements
  80-100: tight classical diction, traditional prosody & cadence

Guidelines:
- Write ${lengthGuide}
- Poem should be in Tamil script ONLY at first
- Use proper Tamil meter and rhythm
- Incorporate the provided keywords naturally
- Match the requested emotional tone

${wantTranslit ? '\n\nAfter the poem, add a section:\n**Transliteration:**\n[Romanized version]' : ''}
${wantGloss ? '\n\nThen add:\n**Gloss:**\n[Brief meaning in English]' : ''}`;

		const userPrompt = `Create a Tamil Venba poem with these specifications:

Keywords/Theme: ${keywords}
Emotional Tone: ${tone}
Classicalness Level: ${classicalness}/100
Length: ${length}

Generate an authentic Tamil classical poem now.`;

		const response = await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${OPENAI_API_KEY}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				model: 'gpt-4o-mini',
				messages: [
					{ role: 'system', content: systemPrompt },
					{ role: 'user', content: userPrompt }
				],
				temperature: 0.8,
				max_tokens: 500
			})
		});

		if (!response.ok) {
			const errorData = await response.json();
			console.error('OpenAI API Error:', errorData);
			return json({ 
				error: `OpenAI API error: ${errorData.error?.message || 'Unknown error'}` 
			}, { status: response.status });
		}

		const data = await response.json();
		const poemText = data.choices?.[0]?.message?.content;

		if (!poemText) {
			return json({ error: 'No poem generated' }, { status: 500 });
		}

		return json({ poem: poemText.trim() });
	} catch (error) {
		console.error('Error generating poem:', error);
		return json({ 
			error: error instanceof Error ? error.message : 'Failed to generate poem' 
		}, { status: 500 });
	}
};
