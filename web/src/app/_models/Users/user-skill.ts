
export interface UserSkillResult {
    id: number;
    skillId: number;
    skill: SkillResult;
}

export interface OfferSkillResult {
    id: number;
    skillId: number;
    skill: SkillResult;
}

export interface SkillResult {
    id: number;
    name: string;
}


export interface SkillForListDto {
    id: number;
    name: string;
    type: SkillType;
}



export enum SkillType {
    General = 0,
    Personal = 1,
}