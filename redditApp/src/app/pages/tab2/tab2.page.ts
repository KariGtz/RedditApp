import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../../services/subreddit.service';
import { Child } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  posts: Child[] = [];
  textFilter = '';

  arrayHobbit: Child[] = [];

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

  displayListHobbits(hobbit, aka = '') {
    const filter = this.filterByHobbit(hobbit, aka).then((res) => {
      this.arrayHobbit = res;
      console.log('Personajes - ' + hobbit + ' ' + aka , res);
    });
  }

  async filterByHobbit(hobbit: string, aka: string) {
    return await this.posts.filter( ( child: Child ) => {

      if (aka === '') {
        return child.data['selftext'].toLowerCase()
              .includes( hobbit ) ||
              child.data['title'].toLowerCase()
              .includes( hobbit );
      } else {
        // SI este texto incluye lo que sea que este recibiendo en post subreddit se agrega
        return child.data['selftext'].toLowerCase()
                .includes( hobbit ) ||
                child.data['title'].toLowerCase()
                .includes( hobbit ) ||
                child.data['selftext'].toLowerCase()
                .includes( aka ) ||
                child.data['title'].toLowerCase()
                .includes( aka );
      }
    });
  }
}
