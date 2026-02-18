
// Utility to parse colors and convert to Hex
// Supports: Hex, RGB, RGBA, Named Colors (basic set)

const basicColors: Record<string, string> = {
    black: '#000000',
    white: '#ffffff',
    red: '#ff0000',
    green: '#008000',
    blue: '#0000ff',
    yellow: '#ffff00',
    cyan: '#00ffff',
    magenta: '#ff00ff',
    gray: '#808080',
    grey: '#808080',
    silver: '#c0c0c0',
    maroon: '#800000',
    olive: '#808000',
    purple: '#800080',
    teal: '#008080',
    navy: '#000080',
    orange: '#ffa500',
    transparent: '#00000000'
};

export const toHex = (color: string): string => {
    if (!color) return '#000000';
    const c = color.trim().toLowerCase();

    // Already Hex
    if (c.startsWith('#')) {
        if (c.length === 4) { // #RGB -> #RRGGBB
            return '#' + c[1] + c[1] + c[2] + c[2] + c[3] + c[3];
        }
        if (c.length === 5) { // #RGBA -> #RRGGBBAA
            return '#' + c[1] + c[1] + c[2] + c[2] + c[3] + c[3] + c[4] + c[4];
        }
        return c;
    }

    // Named Color
    if (basicColors[c]) {
        return basicColors[c];
    }

    // RGB / RGBA
    const rgbMatch = c.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);
    if (rgbMatch) {
        const r = parseInt(rgbMatch[1]);
        const g = parseInt(rgbMatch[2]);
        const b = parseInt(rgbMatch[3]);
        const a = rgbMatch[4] ? parseFloat(rgbMatch[4]) : 1;

        const toHexVal = (n: number) => {
            const hex = Math.round(n).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };

        const alpha = Math.round(a * 255);
        return `#${toHexVal(r)}${toHexVal(g)}${toHexVal(b)}${toHexVal(alpha)}`;
    }

    // Fallback
    return '#000000';
};
