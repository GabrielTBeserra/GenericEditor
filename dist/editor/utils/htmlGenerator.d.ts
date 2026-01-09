import { IElement, IListSettings } from '../context';
interface RenderOptions {
    isList?: boolean;
    listSettings?: IListSettings;
}
export declare const generateHTML: (elements: IElement[], data: any, options?: RenderOptions) => string;
export declare const getRendererCode: () => string;
export {};
