import { User } from 'src/app/_models/Users/User';

export interface Portfolio 
{
    id: number;
    title: string;
    description: string;
    isEnabled: boolean;
    userId: number;
    user: User;
    photos: PortfolioPhoto[];
    createdDate: Date | string;
}

export interface PortfolioPhoto 
{
    id: number;
    url: string;
    isMain: boolean;
    publicId: string;
    portfolioId: number;
    isApproved: boolean;
}