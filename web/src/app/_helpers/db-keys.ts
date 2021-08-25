import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbKeysService {
  public static readonly CURRENT_USER = 'user';
  public static readonly USER_PERMISSIONS = 'user_permissions';
  public static readonly ACCESS_TOKEN = 'token';
  public static readonly DISPLAY_MENU = 'displayMenu';
  public static readonly REMEMBER_ME = 'remember_me';


  public static readonly LANGUAGE = 'language';
  public static readonly PAGE_DIRECTIONS = 'page_directions';
  public static readonly HOME_URL = 'home_url';
}
