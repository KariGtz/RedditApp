import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../../services/subreddit.service';
import { Child } from '../../interfaces/interfaces';

const listHobbits = [
    {
      name: 'frodo',
      name2: null
    },
    {
      name: 'bilbo',
      name2: null
    },
    {
      name: 'samsagaz',
      name2: 'sam'
    },
    {
      name: 'meriadoc',
      name2: 'merry',
    },
    {
      name: 'peregrin',
      name2: 'pippin'
    },
    {
      name: 'gollum',
      name2: 'smeagol'
    }
];

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  posts: Child[] = [];
  textFilter = '';

  arrayHobbit: Child[] = [];
  arrayTotalHobbits: [] = [];

  constructor(
    private subredditService: SubredditService
  ) {}

  ngOnInit() {
    this.subredditService.fetchPosts()
    .subscribe( (resp) => {
      // console.log('subreddit', resp);
      this.posts.push(...resp.data.children);
    });
  }

  displayListHobbits(hobbit, aka = '') {
    const filter = this.filterByHobbit(hobbit, aka).then((res) => {
      this.arrayHobbit = res;
      console.log('Personajes - ' + hobbit + ' ' + aka , res);
    });
  }

  async groupPostHobbits() {

    this.arrayTotalHobbits = [];

    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < listHobbits.length; index++) {
        let name = listHobbits[index].name;
        let name2 = listHobbits[index].name2;

        let aux = 0;
        await this.filterByHobbit(name, name2).then( async res1 => {

          let key = '';

          if ( name2 !== null ) {
            key = name + ' / ' + name2;
          } else {
            key = name;
          }

          const array: any[] = [];
          array.push(res1);

          this.arrayTotalHobbits.length = 0;
          this.arrayTotalHobbits[key] = array;
          aux++;

        });

    }

    console.log('arrayHobbits', this.arrayTotalHobbits);

    const objJSON = Object.assign({}, this.arrayTotalHobbits);

    console.log(JSON.stringify(objJSON));

  }

  hobbitMorePosts() {

    console.log('this.arrayTotalHobbits', this.arrayTotalHobbits.length);

    for(const item of this.arrayTotalHobbits){
      console.log(item);
    }
  }

  async filterByHobbit(hobbit: string, aka: string) {
    return await this.posts.filter( ( child: Child ) => {

      if (aka === '' || aka !== null) {
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

  sendVoteUp() {

  }
}
