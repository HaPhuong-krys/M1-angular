import { Component } from '@angular/core';
import { Articles } from '../Model/Articles';
import { PcPortableServiceService } from '../pc-portable-service.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

    article: Array<Articles> = [];
  
    constructor(private homeService : HomeService){
  
    }
  
    ngOnInit(): void {
      this.getArticle();
    }
  
    getArticle() {
      this.homeService.getAllArticle().subscribe(res => {
        this.article = res;
        console.log(this.article);
      });
    }
  }
  
