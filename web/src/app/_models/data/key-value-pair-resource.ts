export class KeyValuePairResource {
    id: number;
    name: string;
}

export class KeyValueChildsPairResource {
    id: number;
    name: string;
    childs: KeyValuePairResource[];
}

export class KeyValueResource {
    key: string;
    value: any;
}