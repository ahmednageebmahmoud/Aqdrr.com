import { Photo } from './Photo';
import { Gender } from './user-for-register';

export class User {

  constructor(id?: number, userName?: string, fullName?: string, email?: string,
    jobTitle?: string, phoneNumber?: string, roles?: string[]) {
    this.id = id;
    this.userName = userName;
    this.knownAs = fullName;
    this.email = email;
    this.jobTitle = jobTitle;
    this.phoneNumber = phoneNumber;
    this.userRoles = roles;
  }


  get friendlyName(): string {
    return this.knownAs || this.userName;
  }


  id: number;
  userName: string;
  knownAs: string;
  email: string;
  nationalId: string;
  arFullName: string;
  enFullName: string;
  jobTitle: string;
  workplace: string;
  phoneNumber: string;
  whatsApp: string;
  stoppedReason: string;
  gender: string;
  created: Date;
  photoURL: string;
  photos?: Photo[];
  isEnabled: boolean;
  isLockedOut: boolean;
  userRoles?: string[];
  lastActive: Date | string;
  createdDate: Date | string;
  updatedDate: Date | string;
  configuration: string;
}


export interface UserIdAndNameDto {
  id: number;
  userName: string;
  fullName: string;
}

export class UserNameAndMainImage {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  fullName: string;
  photoUrl: string;
  publicId: string;
  totalRating: number;
  cityName: string;
  gender: Gender;
  createdDate: Date | string;
  friendlyName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class UserCompany extends UserNameAndMainImage { }



export class UserWithRoles {

  id: number;
  userName: string;
  knownAs: string;
  email: string;
  nationalId: string;
  arFullName: string;
  enFullName: string;
  jobTitle: string;
  workplace: string;
  phoneNumber: string;
  whatsApp: string;
  stoppedReason: string;
  gender: string;
  created: Date;
  photoURL: string;
  photos?: Photo[];
  isEnabled: boolean;
  isLockedOut: boolean;
  userRoles?: any[];
  lastActive: Date | string;
  createdDate: Date | string;
  updatedDate: Date | string;
  configuration: string;

}

export class BaseUserInfo {
  id: number;
  userName: string;
  fullName: string;
}

