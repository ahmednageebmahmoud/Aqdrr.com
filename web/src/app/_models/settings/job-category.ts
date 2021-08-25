
export interface JobCategoryResult {
    id: number;
    name: string;
    icon: string;
}

export interface JobCategory {
    id: number;
    icon: string;
    arName: string;
    enName: string;
    updatedDate: Date | string;
    isEnabled: boolean;
}

export interface JobCategoryCreate {
    icon: string;
    arName: string;
    enName: string;
    updatedDate: Date | string;
}

export interface JobCategoryReturn {
    id: number;
    icon: string;
    arName: string;
    enName: string;
    updatedDate: Date | string;
    isEnabled: boolean;
}

export interface JobCategoryUpdate {
    id: number;
    icon: string;
    arName: string;
    enName: string;
    updatedDate: Date | string;
}