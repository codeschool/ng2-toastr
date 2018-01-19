import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager, Toast } from 'ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Toastr Demo';

  constructor(private toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  showSuccess() {
    this.toastr.success(
      'You are awesome!',
      'Success!',
      {
        toastLife: 3000,
        showCloseButton: false,
        icon: 'check'
      }
    );
  }

  showError() {
    this.toastr.error(
      'This is not good!',
      'Oops!',
      {icon: 'error'}
    );
  }

  showWarning() {
    this.toastr.warning(
      'You are being warned.',
      'Alert!',
      {icon: 'warning'}
    );
  }

  showInfo() {
    this.toastr.info(
      'Just some information for you.'
    );
  }

  showClickToDismiss() {
    this.toastr.info('Please click to dismiss', 'No auto dismiss', {
      dismiss: 'click',
      icon: 'warning'
    });
  }

  showCustomLife() {
    this.toastr.warning(
      'The toast will auto dismiss in 8 seconds',
      null,
      {
        toastLife: 8000,
        icon: 'warning',
      }
    );
  }

  showControlled() {
    this.toastr
      .info(
        'This is toaster that is controlled by developer! Will be dismissed in 5 seconds.',
        'Controlled!',
        {
          dismiss: 'controlled',
          data: { message: 'hello' },
          icon: 'warning'
       }
      )
      .then((toast: Toast) => {
        console.log(toast);
        setTimeout(() => {
          this.toastr.dismissToast(toast);
        }, 5000);
      });
  }

  showCustomHTML() {
    this.toastr.custom(
      '<span style="color: #bd362f">This message should be in red with blank background. Click to dismiss.</span>',
      'Custom Message',
      { enableHTML: true, dismiss: 'click', icon: 'warning' }
    );
    this.toastr.info(
      '<span style="color: #bd362f">This should be red, </span><br/><span>and multi-line message.</span>',
      'Custom Information Message',
      { enableHTML: true, toastLife: 5000, icon: 'warning' }
    );
  }
}
