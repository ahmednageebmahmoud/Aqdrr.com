import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.css']
})
export class SendSmsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // 210 عدد ثلاث رساءل
  limitCharacters(event) {
    //         chars = txtMsg.value.length;
    //         document.getElementById(indicator).innerHTML = chars;
    var chars = event.target.value.length;
    console.log(chars);
    console.log(this.calculateSmsMaxLength(this.isASCII(chars), 3));

    let messages = Math.ceil(chars / 70);
    let remaining = messages * 70 - (chars % (messages * 70) || messages * 70);
    document.getElementById('lblCount').innerHTML = (remaining + ' عدد الحروف المتبقيه  #  ' + messages + ' عدد الرسائل.');
  }

  isASCII(str) {
    return /^[\x00-\x7F]*$/.test(str);
  }


  calculateSmsMaxLength(isUnicode, writtenSmsNb) {
    if (isUnicode) {
      if (writtenSmsNb == 0) {
        return 70;
      } else {
        return (70 * (writtenSmsNb + 1)) - ((writtenSmsNb + 1) * 3);
      }
    } else {
      if (writtenSmsNb == 0) {
        return 160;
      } else {
        return (160 * (writtenSmsNb + 1)) - ((writtenSmsNb + 1) * 7);
      }
    }
  }
}
