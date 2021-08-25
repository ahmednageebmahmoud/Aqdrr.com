export class Ticket {
  id: number;
  category: TicketCategory;
  categoryDescription: string;
  fullName: string;
  phone: string;
  email: string;
  title: string;
  message: string;
  isRead: boolean;
  status: TicketStatus;
  statusDescription: string;
  createdDate: Date | string;
}

export interface TicketCreateDto {
  category: TicketCategory;
  fullName: string;
  phone: string;
  email: string;
  title: string;
  message: string;
}

export interface TicketReturnDto {
  id: number;
  category: TicketCategory;
  categoryDescription: string;
  fullName: string;
  phone: string;
  email: string;
  title: string;
  message: string;
  isRead: boolean;
  status: TicketStatus;
  statusDescription: string;
}

export interface TicketUpdateDto {
  id: number;
  category: TicketCategory;
  fullName: string;
  phone: string;
  email: string;
  title: string;
  message: string;
}

export enum TicketStatus {
  New = 0,
  Replied = 1,
  Responded = 2,
}

export enum TicketCategory {
  General = 0,
  Error = 1,
  Help = 2,
}
