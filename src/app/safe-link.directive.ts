import { Directive, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)',
    }
})

export class SafeLinkDirective {
    queryParam = input('myapp', {alias: 'appSafeLink'});

    constructor() {
        console.log('SafeLink directive');
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantToLeave = window.confirm('Do you really want to leave this page?');

        if( wantToLeave ){
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = address+'?from='+this.queryParam();
            return;
        }

        event.preventDefault();
    }
}