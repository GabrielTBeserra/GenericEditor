import type { IElementFormatting } from '../context';

/**
 * Ensures the value exists in options for Radix Select (which requires value to match a Select.Item).
 * Returns the value if it's in options, otherwise returns fallback.
 */
export const normalizeSelectValue = <T extends string>(value: T | undefined | null, options: readonly T[], fallback: T): T => {
    const v = value === undefined || value === null ? fallback : String(value) as T;
    return options.includes(v) ? v : fallback;
};

/** Font weight options for Select. Maps 400/normal and 700/bold for consistency. */
export const FONT_WEIGHT_OPTIONS = ['normal', 'bold', '100', '300', '900'] as const;
export const FONT_WEIGHT_OPTIONS_FULL = ['100', '300', '400', '500', '600', '700', '900', 'normal', 'bold'] as const;

export const normalizeFontWeightForSelect = (value: string | number | undefined | null, options: readonly string[] = FONT_WEIGHT_OPTIONS): string => {
    const v = value === undefined || value === null ? 'normal' : String(value);
    if (v === '400' || v === 'normal') return options.includes('400') ? '400' : 'normal';
    if (v === '700' || v === 'bold') return options.includes('700') ? '700' : 'bold';
    return options.includes(v) ? v : (options.includes('400') ? '400' : options[0] ?? 'normal');
};

/** Ensures font is in the list. If not, adds it at the beginning for Radix Select. */
export const ensureFontInOptions = (currentFont: string, fontList: string[]): string[] => {
    return fontList.includes(currentFont) ? fontList : [currentFont, ...fontList];
};

export const formatValue = (value: unknown, formatting: IElementFormatting): string => {
    if (value === undefined || value === null) return '';

    if (formatting.type === 'boolean') {
        const isTrue = String(value) === 'true' || value === true || (typeof value === 'number' && value > 0);
        return isTrue ? (formatting.trueLabel || 'Sim') : (formatting.falseLabel || 'Não');
    }
    if (formatting.type === 'date') {
        try {
            const date = new Date(value as string | number | Date);
            if (isNaN(date.getTime())) return String(value);

            if (formatting.dateFormat) {
                const d = date.getDate().toString().padStart(2, '0');
                const m = (date.getMonth() + 1).toString().padStart(2, '0');
                const y = date.getFullYear();
                const H = date.getHours().toString().padStart(2, '0');
                const M = date.getMinutes().toString().padStart(2, '0');
                const S = date.getSeconds().toString().padStart(2, '0');

                return formatting.dateFormat
                    .replace('DD', d)
                    .replace('MM', m)
                    .replace('YYYY', String(y))
                    .replace('HH', H)
                    .replace('mm', M)
                    .replace('ss', S);
            }
            return date.toLocaleDateString();
        } catch { return String(value); }
    }
    if (formatting.type === 'number') {
        const num = parseFloat(String(value));
        if (isNaN(num)) return String(value);

        if (formatting.numberFormat === 'currency') {
            return (formatting.currencySymbol || 'R$') + ' ' + num.toFixed(formatting.decimalPlaces || 2);
        }
        if (formatting.numberFormat === 'percent') {
            return num.toFixed(formatting.decimalPlaces || 0) + '%';
        }
        return num.toFixed(formatting.decimalPlaces || 0);
    }
    return String(value);
};

/** Verifica se o valor parece ser uma URL válida para imagem (http, https, data:, ou caminho relativo). */
export const isValidImageUrl = (value: unknown): boolean => {
    if (value === undefined || value === null) return false;
    const s = String(value).trim();
    if (!s) return false;
    return (
        s.startsWith('http://') ||
        s.startsWith('https://') ||
        s.startsWith('data:') ||
        s.startsWith('/') ||
        /^[a-zA-Z0-9][a-zA-Z0-9-+.]*:/.test(s) // protocol: (blob:, etc.)
    );
};

export const checkCondition = (propValue: unknown, operator: string, ruleValue: string): boolean => {
    const val = String(propValue).toLowerCase();
    const target = String(ruleValue).toLowerCase();

    switch (operator) {
        case 'equals': return val === target;
        case 'notEquals': return val !== target;
        case 'contains': return val.includes(target);
        case 'greaterThan': return parseFloat(val) > parseFloat(target);
        case 'lessThan': return parseFloat(val) < parseFloat(target);
        case 'truthy': return !!propValue;
        case 'falsy': return !propValue;
        default: return false;
    }
};
