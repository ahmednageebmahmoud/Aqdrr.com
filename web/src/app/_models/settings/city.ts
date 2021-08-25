export class City {
    id: number;
    code: string;
    arName: string;
    enName: string;
    isEnabled: boolean;
    regionId: number;
    regionName: string;
    updatedDate: Date | string;
}

export interface CityUpdateDto {
    id: number;
    code: string;
    arName: string;
    enName: string;
}

export interface CityReturnDto {
    id: number;
    code: string;
    arName: string;
    enName: string;
    isEnabled: boolean;
    regionId: number;
    regionName: string;
    updatedDate: Date | string;
}