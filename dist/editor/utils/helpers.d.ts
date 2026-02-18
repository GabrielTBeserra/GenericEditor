import { IElementFormatting } from '../context';
/**
 * Ensures the value exists in options for Radix Select (which requires value to match a Select.Item).
 * Returns the value if it's in options, otherwise returns fallback.
 */
export declare const normalizeSelectValue: <T extends string>(value: T | undefined | null, options: readonly T[], fallback: T) => T;
/** Font weight options for Select. Maps 400/normal and 700/bold for consistency. */
export declare const FONT_WEIGHT_OPTIONS: readonly ["normal", "bold", "100", "300", "900"];
export declare const FONT_WEIGHT_OPTIONS_FULL: readonly ["100", "300", "400", "500", "600", "700", "900", "normal", "bold"];
export declare const normalizeFontWeightForSelect: (value: string | number | undefined | null, options?: readonly string[]) => string;
/** Ensures font is in the list. If not, adds it at the beginning for Radix Select. */
export declare const ensureFontInOptions: (currentFont: string, fontList: string[]) => string[];
export declare const formatValue: (value: unknown, formatting: IElementFormatting) => string;
/** Verifica se o valor parece ser uma URL válida para imagem (http, https, data:, ou caminho relativo). */
export declare const isValidImageUrl: (value: unknown) => boolean;
export declare const checkCondition: (propValue: unknown, operator: string, ruleValue: string) => boolean;
