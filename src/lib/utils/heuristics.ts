export function checkAlliteration(lines: string[]): boolean {
        if (lines.length < 2) return false;
        
        const firstChars = lines
                .map(line => line.trim())
                .filter(line => line.length > 0)
                .map(line => line[0]);
        
        if (firstChars.length < 2) return false;
        
        const uniqueChars = new Set(firstChars);
        return uniqueChars.size < firstChars.length;
}

export function getMeterFeel(classicalness: number): string {
        if (classicalness >= 80) {
                return "Tight வெண்பா cadence with traditional Tamil prosody";
        } else if (classicalness >= 40) {
                return "Balanced poetic rhythm with classical undertones";
        } else {
                return "Light, accessible verse with gentle meter";
        }
}
