import type { IElementFormatting } from '../context';

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
