import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../../services/subreddit.service';
import { Child, Post } from '../../interfaces/interfaces';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

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

  maximo = 0;
  ganador = '';
  posteos = [];

  arrayHobbit: Child[] = [];
  arrayTotalHobbits = [];
  arrayConteo = [];

  winner: string = '';

  constructor(
    private subredditService: SubredditService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.subredditService.fetchPosts()
    .subscribe( (resp) => {
      // console.log('subreddit', resp);
      this.posts.push(...resp.data.children);
      this.groupPostHobbits();
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

    this.arrayTotalHobbits.length = 0;

    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < listHobbits.length; index++) {
        let name = listHobbits[index].name;
        let name2 = listHobbits[index].name2;

        await this.filterByHobbit(name, name2).then( async (res1: any) => {

          let key = '';

          if ( name2 !== null ) {
            key = name; // + ' / ' + name2;
          } else {
            key = name;
          }

          let array: any[] = [];
          array[key] = res1;

          this.arrayTotalHobbits.push(array);


        });

    }

    console.log('arrayHobbits', this.arrayTotalHobbits);
    const objJSON = Object.assign({}, this.arrayTotalHobbits);
    console.log(objJSON);

  }

  hobbitMorePosts() {

    let index = 0;

    this.arrayConteo = [];
    this.arrayConteo.length = 0;

    for (const item of this.arrayTotalHobbits){

      const total = Object.keys(this.arrayTotalHobbits[index][listHobbits[index].name]).length;

      const objeto = {};
      objeto['total'] = total;
      objeto['hobbit'] = listHobbits[index].name;
      objeto['posts'] = this.arrayTotalHobbits[index][listHobbits[index].name];

      this.arrayConteo.push(objeto);

      let tam = 0;
      tam++;

      index++;

    }

    console.log('this.arrayConteo', this.arrayConteo);

    let i = 0;
    for (let conteo of this.arrayConteo) {
      if (this.maximo < this.arrayConteo[i].total){
        this.maximo = this.arrayConteo[i].total;
        this.ganador = this.arrayConteo[i].hobbit;
        this.posteos = this.arrayConteo[i].posts;
      }
      i++;
    }

    this.winner = 'El personaje con más posteos es ' + this.ganador + ' con un total de ' + this.maximo + ' posteos';
    console.log('El personaje con más posteos es ', this.ganador + ' con un total de ' + this.maximo + ' posteos');

    console.log('Posteos ganador ->' + JSON.stringify(this.posteos));

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

}
