import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  client_id = '08be353762485e6f17f5';
  client_secret = 'd621151eb349c0384929eeac0d200b4b64478a52';
  repos_count = 5;
  repos_sort = 'created: asc';
  constructor(private http: HttpClient) {}

  getUser(user) {
    const gethupLink = `https://api.github.com/users/${user}?client_id=${
      this.client_id
    }&client_secret=${this.client_secret}`;

    return this.http.get(gethupLink);
  }

  getRepos(user) {
    const repos = `https://api.github.com/users/${user}/repos?per_page=${
      this.repos_count
    }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
      this.client_secret
    }`;

    return this.http.get(repos);
  }
}
