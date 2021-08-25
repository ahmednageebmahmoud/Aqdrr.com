export interface UserJobCategoryResult
{
    id: number;
    jobCategoryId: number;
    jobCategory: JobCategoryResult;
}

export interface JobCategoryResult
{
    id: number;
    name: string;
}

export interface JobCategoryWithIcon
{
    id: number;
    name: string;
    icon: string;
}