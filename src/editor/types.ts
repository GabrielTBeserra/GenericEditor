
export interface IProp {
    name: string;
    dataName: string;
}
export interface ILayout {
    name: string;
    props: IProp[];
    isList?: boolean;
}

export type GenericData = Record<string, unknown>;

export interface ITemplate {
    id: string;
    name: string;
    state: unknown;
    description?: string;
}
