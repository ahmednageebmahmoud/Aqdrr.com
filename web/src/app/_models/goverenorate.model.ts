import { Region } from './region.model';

export class Goverenorate {
    id: number;
    name: string;
    arName: string;
    enName: string;
    code: string;
    regionId: number;
    isEnabled: Boolean;
    region: Region;
  }
