export interface UserForRegister {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    cityId: number;
    gender: boolean;
    accountType: AccountType;
}

export interface ResetForgottenPassword {
    phoneNumber: string;
    verifyCode: string;
    newPassword: string;
}

export interface ChangeUserPassword {
    currentPassword: string;
    newPassword: string;
}

export interface RequestResetPassword {
    phoneNumber: string;
    cityId: number;
}

export interface VerifyAccount {
    userId: number;
    verifyCode: string;
}

export interface UserRegisteredDetails {
    id: number;
    userName: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    gender: Gender;
    lastTokenPhoneDate: Date | string;
}

export enum Gender {
    none = 0,
    male = 1,
    female = 2
}

export enum AccountType {
    noneAccount = 0,
    managementAccount = 1,
    visitorAccount = 2,
    studentAccount = 3,
    taskerAccount = 4,
    businessAccount = 5,
}