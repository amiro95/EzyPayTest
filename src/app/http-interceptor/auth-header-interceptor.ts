import {Injectable} from "@angular/core"
import { HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";


@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor{


    intercept(request: HttpRequest<any>,next: HttpHandler){

        //logic
        
        return next.handle(request);
    }
}