import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private url = 'https://jsonplaceholder.typicode.com/users'
constructor(private http: HttpClient) { }
getAllUsers(){
  return this.http.get<User[]>(this.url);
}
}
