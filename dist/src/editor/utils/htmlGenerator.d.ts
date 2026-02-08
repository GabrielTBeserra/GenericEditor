import { IElement, IListSettings } from '../context';
import { GenericData } from '../types';
interface RenderOptions {
    isList?: boolean;
    listSettings?: IListSettings;
    canvasHeight?: number;
}
export declare const generateHTML: (elements: IElement[], data: GenericData | GenericData[], options?: RenderOptions) => string;
export declare const getRendererCode: () => string;
export {};
