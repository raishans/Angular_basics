import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {

  constructor(private http: HttpClient) { }
  randomJokeObj: any;
  ngOnInit(): void {
  }
  getRandomJoke = () =>{
    this.randomJokeObj=this.http.get("https://api.chucknorris.io/jokes/random").subscribe((data: any) => this.randomJokeObj = data.value)
  }

}
