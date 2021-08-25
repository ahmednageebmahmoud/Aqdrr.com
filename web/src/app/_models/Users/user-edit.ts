import { User } from './User';

export class UserEdit extends User {
  constructor(currentPassword?: string, newPassword?: string, confirmPassword?: string) {
    super();

    this.currentPassword = currentPassword;
    this.newPassword = newPassword;
    this.confirmPassword = confirmPassword;
  }

  public currentPassword: string;
  public newPassword: string;
  public confirmPassword: string;

}
