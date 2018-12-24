import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../serves/get-user.service';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css']
})
export class InputUserComponent implements OnInit {
  user: any;
  repo: any;
  constructor(private service: GetUserService) {}

  ngOnInit() {}

  username(name: HTMLInputElement) {
    const title = { name: name.value };
    this.service.getUser(title.name).subscribe(
      Recpice => {
        // console.log(Recpice);
        this.user = Recpice;
      },
      error => {
        this.user = { notFound: true };
      }
    );

    this.service.getRepos(title.name).subscribe(
      Recpice => {
        this.repo = Recpice;
      },
      error => {
        this.repo = { notFound: true };
      }
    );
  }
}
