interface IProp {
    name: string;
    dataName: string;
}
export interface ILayout {
    name: string;
    props: IProp[];
    isList?: boolean;
}
export {};
