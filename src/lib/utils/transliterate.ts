export function transliterate(tamil: string): string {
        const tamilToLatin: Record<string, string> = {
                'அ': 'a', 'ஆ': 'ā', 'இ': 'i', 'ஈ': 'ī', 'உ': 'u', 'ஊ': 'ū',
                'எ': 'e', 'ஏ': 'ē', 'ஐ': 'ai', 'ஒ': 'o', 'ஓ': 'ō', 'ஔ': 'au',
                'க': 'ka', 'ங': 'ṅa', 'ச': 'ca', 'ஞ': 'ña', 'ட': 'ṭa', 'ண': 'ṇa',
                'த': 'ta', 'ந': 'na', 'ப': 'pa', 'ம': 'ma', 'ய': 'ya', 'ர': 'ra',
                'ல': 'la', 'வ': 'va', 'ழ': 'ḻa', 'ள': 'ḷa', 'ற': 'ṟa', 'ன': 'ṉa',
                'ஜ': 'ja', 'ஶ': 'śa', 'ஷ': 'ṣa', 'ஸ': 'sa', 'ஹ': 'ha', 'க்ஷ': 'kṣa',
                'ா': 'ā', 'ி': 'i', 'ீ': 'ī', 'ு': 'u', 'ூ': 'ū',
                'ெ': 'e', 'ே': 'ē', 'ை': 'ai', 'ொ': 'o', 'ோ': 'ō', 'ௌ': 'au',
                '்': '', 'ஃ': 'ḥ', ' ': ' ', ',': ',', '.': '.',
                '\n': '\n'
        };

        let result = '';
        for (let i = 0; i < tamil.length; i++) {
                const char = tamil[i];
                if (tamilToLatin[char]) {
                        result += tamilToLatin[char];
                } else {
                        result += char;
                }
        }
        return result;
}
