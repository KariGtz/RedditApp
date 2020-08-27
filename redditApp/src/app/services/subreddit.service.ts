import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponsePostSubreddit } from '../interfaces/interfaces';
import { environment } from '../../environments/environment.prod';

const postPerRequest = 100;
const maxPostToFetch = 500;
const maxRequest = maxPostToFetch / postPerRequest;

@Injectable({
  providedIn: 'root'
})

export class SubredditService {

  constructor(
    private http: HttpClient
  ) { }

  fetchPosts() {
    return this.http.get<ResponsePostSubreddit>(`https://www.reddit.com/r/lotr.json?limit=${postPerRequest}`);
  }


}
