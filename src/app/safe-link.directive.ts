import { Directive } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)',
    }
})

export class SafeLinkDirective {
    constructor() {
        console.log('SafeLink directive');
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantToLeave = window.confirm('Do you really want to leave this page?');

        if( wantToLeave ){
            return;
        }

        event.preventDefault();
    }
}