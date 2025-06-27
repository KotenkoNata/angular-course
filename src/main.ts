import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { tap } from 'rxjs/operators';
import {
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
  HttpEventType,
} from "@angular/common/http";

function loggingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) { 
    console.log('Request made with ', request);
    // const req = request.clone({
    //     headers: request.headers.set('X-DEBUG', 'TESTING')
    // });
    return next(request).pipe(
        tap({
            next: event => { 
                if(event.type === HttpEventType.Response) {
                    console.log('Response received', event.status);
                    console.log("Response received", event.body);
                }
            }
        })
    );
}


bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loggingInterceptor]))],
}).catch((err) => console.error(err));
