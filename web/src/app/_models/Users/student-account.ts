import { Gender } from './user-for-register';

export interface StudentAccountEdit {
    userId: number;

    socialStatus: SocialStatus;
    socialStatusName: string;

    status: StudentAccountStatus;
    accountStatusName: string;

    dayAvailability: DayAvailability;
    dayAvailabilityName: string;

    about: string;
    universityId: number | null;
    university: null;

    certificate: Certificate;
    certificateName: string;

    educationLevelId: number | null;
    educationLevel: null;

    subMajorId: number | null;
    subMajor: null;
}

export interface StudentAccountResult {
    userId: number;

    socialStatus: SocialStatus;
    socialStatusName: string;

    status: StudentAccountStatus;
    accountStatusName: string;

    dayAvailability: DayAvailability;
    dayAvailabilityName: string;

    about: string;
    universityId: number;
    university: UniversityResult;

    certificate: Certificate;
    certificateName: string;

    educationLevelId: number;
    educationLevel: EducationLevelResult;

    subMajorId: number;
    subMajor: SubMajorResult;
}



export interface UniversityResult
{
    id: number;
    name: string;
}

export interface StudentAccountUpdate
{
    id: number;
    arFirstName: string;
    arLastName: string;
    enFullName: string;
    cityId: number;
    gender: Gender;
    birthDay: Date | string;
    socialStatus: SocialStatus;
    about: string;
    dayAvailability: DayAvailability;
    status: StudentAccountStatus;
    certificateId: Certificate;
    universityId: number;
    educationsDegreeId: number;
    educationLevelId: number;
    majorId: number;
    subMajorId: number;
    jobCategories: number[];
    languages: number[];
    generalSkills: number[];
    personalSkills: number[];
    hobbies: number[];
    instagram: string;
    linkedin: string;
    twitter: string;
    facebook: string;
}


export interface SubMajorResult
{
    id: number;
    name: string;
    majorId: number;
    major: MajorResult;
}


export interface MajorResult
{
    id: number;
    name: string;
}


export interface EducationLevelResult
{
    id: number;
    name: string;
    educationDegreeId: number;
    educationDegree: EducationDegreeResult;
}

export interface EducationDegreeResult
{
    id: number;
    name: string;
}

export enum SkillType {
    general = 0,
    personal = 1,
}

export enum SocialStatus {
    none = 0,
    single = 1,
    married = 2,
}

export enum StudentAccountStatus {
    none = 0,
    available = 1,
    working = 2,
    unavailable = 3,
}

export enum DayAvailability {
    none = 0,
    morning = 1,
    evening = 2,
}

export enum Certificate {
    nothing = 0,
    highSchool = 1,
    diploma = 2,
    bachelor = 3,
    master = 4,
}
