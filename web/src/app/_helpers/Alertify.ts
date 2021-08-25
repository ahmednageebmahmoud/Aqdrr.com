import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})

export class AlertifyService {

  private notification: any;
  private loadingMessageTimeoutId: any;
  // Alertity Setting
  defaults = alertify.defaults = {
    // dialogs defaults
    autoReset: true,
    basic: false,
    closable: true,
    closableByDimmer: true,
    frameless: false,
    maintainFocus: true, // <== global default not per instance, applies to all dialogs
    maximizable: true,
    modal: true,
    movable: true,
    moveBounded: false,
    overflow: true,
    padding: true,
    pinnable: true,
    pinned: true,
    preventBodyShift: false, // <== global default not per instance, applies to all dialogs
    resizable: true,
    startMaximized: false,
    transition: 'pulse',

    // notifier defaults
    notifier: {
      // auto-dismiss wait time (in seconds)
      delay: 5,
      // default position
      position: 'bottom-right',
      // adds a close button to notifier messages
      closeButton: false
    },

    // language resources
    glossary: {
      // dialogs default title
      title: 'رسالة',
      // ok button text
      ok: 'نعم',
      // cancel button text
      cancel: 'لا'
    },

    // theme settings
    theme: {
      // class name attached to prompt dialog input textbox.
      input: 'ajs-input',
      // class name attached to ok button
      ok: 'btn-info',
      // class name attached to cancel button
      cancel: 'ajs-cancel'
    }
  };

  constructor() { }

  confirm(message: string, okCallback: () => any): any {
    alertify.confirm(message, function (e) {
      if (e) { okCallback(); } else { }
    });
  }

  promisifyConfirm(title: string, message: string, options = {}): Promise<ConfirmResult> {
    return new Promise<ConfirmResult>((resolve) => {
      alertify
        .confirm(title, message,
          () => resolve(ConfirmResult.Ok),
          () => resolve(ConfirmResult.Cancel))
        .set(
          Object.assign(
            {},
            {
              closableByDimmer: false,
              defaultFocus: 'cancel',
              frameless: false,
              closable: false
            },
            options)
        );
    });
  }

  promptConfirm(title: string, message: string, placeholder: string = '', defultValue: string = ''): Promise<PromptResult> {
    return new Promise<PromptResult>((resolve) => {
      alertify
        .prompt(
          title, '', defultValue,
          (e, value) => resolve({ confirmResult: ConfirmResult.Ok, value: value }),
          () => resolve({ confirmResult: ConfirmResult.Cancel, value: '' })
        )
        .setContent(`${message}<br /><br /><input class="ajs-input" placeholder="${placeholder}" type="text">`)
        .set(Object.assign({}, {
          closableByDimmer: false,
          defaultFocus: 'cancel',
          frameless: false,
          closable: false,
          'onok': function (closeEvent) {
            return resolve({ confirmResult: ConfirmResult.Ok, value: this.elements.content.querySelector('input').value });
          }
        },
        ));
    });
  }

  showMoreInformation(title: string, content: string) {
    const pre = document.createElement('pre');
    pre.style.maxHeight = '400px';
    pre.style.margin = '0';
    pre.style.padding = '24px';
    pre.style.whiteSpace = 'pre-wrap';
    pre.style.textAlign = 'justify';
    pre.appendChild(document.createTextNode(content));
    alertify.alert(title, pre).setting(Object.assign({}, {
      transition: 'zoom',
      resizable: false,
      modal: true,
      movable: true,
      moveBounded: true,
      label: 'غلق',
      padding: false,
      closableByDimmer: false,
      frameless: false,
      closable: true
    }));
  }

  viewImage(fileName: string, file: any) {
    if (this.isFileImage(file)) {
      const imageTag = new Image();
      imageTag.src = window.URL.createObjectURL(file);
      imageTag.className = 'img-fluid  mx-auto d-block';
      imageTag.alt = 'استعراض الصورة';
      imageTag.onclick = () => this.saveFile(fileName, file);
      alertify.alert('استعراض الصورة', imageTag).setting(Object.assign({}, {
        transition: 'zoom',
        resizable: false,
        maximizable: true,
        modal: false,
        pinnable: true,
        movable: true,
        moveBounded: true,
        label: 'غلق',
        padding: false,
        closableByDimmer: false,
        frameless: false,
        closable: true
      }));
    } else {
      const saveAs = require('file-saver');
      saveAs(file, fileName);
    }
  }

  saveFile(fileName: string, file: any) {
    const saveAs = require('file-saver');
    saveAs(file, fileName);
  }

  isFileImage(file: any) {
    try {
      const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/bmp', 'image/webp', 'image/vnd.microsoft.icon'];
      if (acceptedImageTypes.includes(file.type)) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  showMoreInformationAsHtml(title: string, content: string, minHeight = 500, textAlign = 'justify') {
    const div = document.createElement('div');
    div.style.minHeight = `${minHeight}px`;
    div.style.margin = '0';
    div.style.padding = '24px';
    div.style.whiteSpace = 'pre-wrap';
    div.style.textAlign = textAlign;
    div.innerHTML = content;
    alertify.alert(title, div).setting(Object.assign({}, {
      transition: 'zoom',
      Resizable: true,
      maximizable: true,
      modal: false,
      pinnable: true,
      movable: true,
      moveBounded: true,
      label: 'غلق',
      padding: false,
      closableByDimmer: false,
      frameless: false,
      closable: true
    }));
  }

  tremsConfirm(title: string, trems: string, AcceptBtn: string = 'موافق', DeclineBtn: string = 'لا أوافق'): Promise<ConfirmResult> {
    const div = document.createElement('div');
    div.style.minHeight = '500px';
    div.style.margin = '0';
    div.style.padding = '24px';
    div.style.whiteSpace = '';
    div.style.textAlign = '';
    div.innerHTML = trems;




    return new Promise<ConfirmResult>((resolve) => {
      alertify
        .confirm(title, div,
          () => resolve(ConfirmResult.Ok),
          () => resolve(ConfirmResult.Cancel))
        .set(
         Object.assign(
          {},// alertify.defaults,
           {
             transition: 'slide',
             // Resizable: true,
             //maximizable: true,
             //modal: false,
           //  pinnable: false,
             movable: true,
             moveBounded: true,
             label: 'غلق',
             padding: false,
             closableByDimmer: false,
             frameless: false,
             closable: true,
             reverseButtons: true,
             labels: {
               ok: AcceptBtn,
               cancel: DeclineBtn
             },

// global hooks
hooks:{
  // invoked before initializing any dialog
  preinit:function(instance){},
  // invoked after initializing any dialog
  postinit:function(instance){},
},
           })
        );
    });
  }


  success(message: string) {
    alertify.success(message);
  }
  error(message: string) {
    alertify.error(message);
  }
  showError(title: string, message: string) {
    alertify.error(title, message);
  }
  warning(message: string) {
    alertify.warning(message);
  }
  info(message: string) {
    alertify.notify(message);
  }
  message(message: string) {
    alertify.message(message);
  }

  alert(message: string) {
    alertify.alert('رسالة', message);
  }

  showStickyMessageOnMouseOver(text) {
    let timer, notification = alertify.success(text), delay = alertify.get('notifier', 'delay');
    if (delay) {
      notification.element.addEventListener('mouseover', function () {
        console.log('mouse over - delayed');
        notification.delay(delay);
        timer = setInterval(function () {
          console.log('delayed');
          notification.delay(delay);
        }, 1000 * delay - 500);
      });
      notification.element.addEventListener('mouseout', function () {
        console.log('mouse out');
        clearInterval(timer);
      });
    }
  }


  dismissAll() {
    alertify.dismissAll();
  }

  position() {
    alertify.set('notifier', 'position', 'bottom-center');
    alertify.success('Current position : ' + alertify.get('notifier', 'position'));
  }


  startLoadingMessage(message = 'Loading...') {
    try {
      this.notification.ondismiss = function () { return true; };
    } catch { }
    clearTimeout(this.loadingMessageTimeoutId);
    this.loadingMessageTimeoutId = setTimeout(() => {
      this.notification = alertify.notify('<i class="fa fa-circle-o-notch fa-spin" ></i>&nbsp;' + message, 0).dismissOthers();
      this.notification.ondismiss = function () { return false; };
    }, 0);
  }


  stopLoadingMessage() {
    try {
      this.notification.ondismiss = function () { return true; };
      this.notification.dismiss();
    } catch { }
    clearTimeout(this.loadingMessageTimeoutId);
  }

}

//////////////////////////

export class PromptResult {
  confirmResult: ConfirmResult;
  value: string;
}

export enum ConfirmResult {
  Ok = 1,
  Cancel
}
