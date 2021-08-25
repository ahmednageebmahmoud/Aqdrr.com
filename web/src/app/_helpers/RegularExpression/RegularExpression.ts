import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class RegularExpression {
  constructor() { }
  // ex: GMT+0300 (التوقيت العربي الرسمي)
  // public static fullTimeZone = new RegExp(new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]);
  // // ex: GMT+0300
  // public static GMTAndOffset = new RegExp(new Date().toString().match(/([A-Z]+[\+-][0-9]+)/)[1]);
  // ex: +0300
  // public static TimeZoneOffset = new RegExp(new Date().toString().match(/([-\+][0-9]+)\s/)[1]);

  public static readonly Email = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  public static readonly EmailRegExp = new RegExp(RegularExpression.Email);

  public static readonly Number = /^[0-9]+$/;
  public static readonly NumberRegExp = new RegExp(RegularExpression.Number);

  public static readonly SaudiPhone = /^(05)[0-9]{8}$/;
  public static readonly SaudiPhoneRegExp = new RegExp(RegularExpression.SaudiPhone);

  public static readonly UserIdSaudiPhone = /^(5)[0-9]{8}$/;
  public static readonly UserIdSaudiPhoneRegExp = new RegExp(RegularExpression.UserIdSaudiPhone);

  public static readonly InternationalPhoneNumber = /^\+[1-9]{1}[0-9]{8,16}$/;
  public static readonly InternationalPhoneNumberRegExp = new RegExp(RegularExpression.InternationalPhoneNumber);

  public static readonly LocalPhoneNumber = /^(01)[0-9]{8}$/;
  public static readonly LocalPhoneNumberRegExp = new RegExp(RegularExpression.LocalPhoneNumber);

  public static readonly SaudiNationalId = /^(10|11|12|13)[0-9]{8}$/;
  public static readonly SaudiNationalIdRegExp = new RegExp(RegularExpression.SaudiNationalId);

  public static readonly IqamaId = /^(20|21|22|23|24)[0-9]{8}$/;
  public static readonly IqamaIdRegExp = new RegExp(RegularExpression.IqamaId);

  public static readonly SaudiNationalIdOrIqamaId = /^(10|11|12|13|20|21|22|23|24)[0-9]{8}$/;
  public static readonly SaudiNationalIdOrIqamaIdRegExp = new RegExp(RegularExpression.SaudiNationalIdOrIqamaId);

  public static readonly ArabicLetters = /^[\u0078-\u064a\s\-\(\)]+$/;
  public static readonly ArabicLettersRegExp = new RegExp(RegularExpression.ArabicLetters);

  public static readonly ArOrEnLetters = /^[a-zA-Z\u0078-\u064a\s]+$/;
  public static readonly ArOrEnLettersRegExp = new RegExp(RegularExpression.ArOrEnLetters);

  public static readonly UserName = /^[A-Za-z0-9]{8,30}$/;
  public static readonly UserNameRegExp = new RegExp(RegularExpression.UserName);

  public static readonly Password = /^[A-Za-z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-|[\]]+$/;
  public static readonly PasswordRegExp = new RegExp(RegularExpression.Password);

  public static readonly ImageExtension = /^([a-zA-Z\u0600-\u06FF\s].*|[1-9].*)\.(((j|J)(p|P)(g|G))|((j|J)(p|P)(e|E)(g|G))|((p|P)(n|N)(g|G))|((b|B)(m|M)(p|P))|((g|G)(i|I)(f|F)))$/;
  public static readonly ImageExtensionRegExp = new RegExp(RegularExpression.ImageExtension);

  public static readonly VerifyPhoneNumberCode = /^[0-9]{6}$/;
  public static readonly VerifyPhoneNumberCodeRegExp = new RegExp(RegularExpression.VerifyPhoneNumberCode);

  public static readonly DocumentExtension = /^([a-zA-Z\u0600-\u06FF\s].*|[1-9].*)\.(((p|P)(d|D)(f|F))|((d|D)(o|O)(c|C))|((d|D)(o|O)(c|C)(x|X)))$/;
  public static readonly DocumentExtensionRegExp = new RegExp(RegularExpression.DocumentExtension);

  public static readonly PdfExtension = /^([a-zA-Z\u0600-\u06FF\s].*|[1-9].*)\.(((p|P)(d|D)(f|F)))$/;
  public static readonly PdfExtensionRegExp = new RegExp(RegularExpression.PdfExtension);

  public static readonly Time = /^(1[012]|0[1-9]|[1-9]):[0-5][0-9]$/;
  public static readonly TimeRegExp = new RegExp(RegularExpression.Time);

  public static readonly NuStudentId = /^(42|43|44)[0-9]{7}$/;
  public static readonly NuStudentIdRegExp = new RegExp(RegularExpression.NuStudentId);

  public static readonly EnglishLetters = /^[a-zA-Z\s\-\(\)]*$/;
  public static readonly EnglishLettersRegExp = new RegExp(RegularExpression.EnglishLetters);

  public static readonly SocialMediaAccounts = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.-]{0,50}$|^$/;
  public static readonly SocialMediaAccountsRegExp = new RegExp(RegularExpression.SocialMediaAccounts);

  public static readonly Money = /^\d*\.\d{1,2}$|^\d*$/;
  public static readonly MoneyRegExp = new RegExp(RegularExpression.Money);

  public static readonly TimeSpan = /^([01]\d|2[0-3])(:)([0-5]\d)(:)([0-5]\d)$/;
  public static readonly TimeSpanExp = new RegExp(RegularExpression.TimeSpan);
  // public static readonly EnglishLettersRegExp = new RegExp(/^[a - zA - Z\s] *$/);
  // public static readonly EnglishLetters = /^[a - zA - Z\s] *$/;
}
