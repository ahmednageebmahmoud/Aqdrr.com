import { Goverenorate } from './goverenorate.model';

export class Region {
    id: number;
    name: string;
    arName: string;
    enName: string;
    code: string;
    isEnabled: Boolean;
    goverenorates: Goverenorate[];

}
