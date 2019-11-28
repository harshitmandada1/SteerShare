import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public register(user: User){
    return this.http.post<any>(`${environment.serverBaseURL}/users/register`, user);
  }

  public login(username: string, password: string){
    console.log("From Service: " + username + password);
    return this.http.post<any>(`${environment.serverBaseURL}/users/authenticate`, {username, password})
      .pipe(map(user=>{
          if(user && user.token){
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
          }

          return user;
      }));
  }

  public logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
