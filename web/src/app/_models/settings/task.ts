export interface Task 
{
    id: number;
    arName: string;
    enName: string;
    description: string;
    isEnabled: boolean;
    updatedDate: Date | string;
}


export interface TaskResult
{
    id: number;
    name: string;
    description: string;
}