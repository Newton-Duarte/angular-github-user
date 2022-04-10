import { Component } from '@angular/core';
import { GithubUser } from './GithubUser';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Github';

  loading = false;
  error = '';
  githubUser!: GithubUser | undefined;

  constructor(private github: GithubService) {}

  searchGithub(term: string) {
    if (!term) return;

    this.loading = true;
    this.error = '';
    this.githubUser = undefined;

    this.github.getGithubUser(term).subscribe({
      next: (value) => {
        this.githubUser = value;

        console.log(this.githubUser);
      },
      error: (e) => {
        console.log(e);

        if (e.status === 404) {
          this.error = 'User not found';
        } else {
          this.error = 'Something went wrong...';
        }

        this.loading = false;
      },
      complete: () => {
        this.loading = false
      }
    }
    );
  }
}
