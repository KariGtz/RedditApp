import { Component, OnInit } from '@angular/core';
import { SubredditService } from 'src/app/services/subreddit.service';
import { Child } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Child[] = [];
  textFilter = '';

  constructor(
    private subredditService: SubredditService
  ) {}

  ngOnInit() {
    this.subredditService.fetchPosts()
    .subscribe( (resp) => {
      console.log('subreddit', resp);
      this.posts.push(...resp.data.children);
    });
  }

  showSearchFilterBar(event) {
    this.textFilter = event.detail.value;
  }
}
