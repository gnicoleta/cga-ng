import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs-compat";

@Injectable({providedIn: 'root'})
export class UserService{
    //activatedEmitter = new EventEmitter<boolean>();
    activatedEmitter = new Subject<boolean>();

}