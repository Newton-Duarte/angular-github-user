import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GithubUser } from '../GithubUser';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/vnd.github.v3+json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private URL = 'https://api.github.com/users';

  constructor(private httpClient: HttpClient) {}

  getGithubUser(user: string): Observable<GithubUser> {
    return this.httpClient.get<GithubUser>(`${this.URL}/${user}`, httpOptions);
  }
}
