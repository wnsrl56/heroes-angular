import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { Heroes } from '../heroes-mockup';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public isShowDetail: boolean[];
  public isShowAll = false;
  public allText = 'Open';
  constructor() {
  }
  private generateHeroes = (heroes: any[]) => heroes.map((v, index) => new Hero(index, v.name));
  private changeDetail = (index, isShowDetail) => isShowDetail[index] = !isShowDetail[index];
  private changeDetailAll = (isShowAll, isShowDetail) => {
    this.isShowAll = !isShowAll;
    this.isShowDetail = isShowDetail.map(_ => this.isShowAll);
    this.allText = this.isShowAll ? 'Close' : 'Open';
  }
  private range = l => {
    const res = [];
    let i = 0;
    while (++i < l) {
      res.push(i);
    }
    return res;
  }
  ngOnInit() {
    this.heroes = this.generateHeroes(Heroes);
    this.isShowDetail = this.range(this.heroes.length).map(_ => false);
  }
}
