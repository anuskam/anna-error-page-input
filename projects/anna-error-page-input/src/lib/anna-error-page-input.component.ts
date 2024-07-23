import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-anna-error-page-input',
  template: `
    <div class="error-page">
      <h1 class="title">Oops! Something went wrong</h1>
      <div class="info">
        <p>We're sorry, but the page you were looking for doesn't exist.</p>
        <p>Please check the URL and try again. If the problem persists, you can return to the homepage or contact our support team for assistance.</p>
      <p>Thank you for your understanding😊</p>
      </div>
      
      <div class="link">
        <a [routerLink]="routerLink">Go to homepage</a>
      </div>
      
    </div>
  `,
  styles: [
    `
      @import 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap';
      .error-page {
        font-family: 'Open Sans', sans-serif;
        .title {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          margin: 100px 20px 0 20px;
        }

        .info {
          margin: 5% 20%;
          p {
            &:not(:last-of-type) {
              margin-bottom: 12px;
            }
          }
        }

        .link {
          text-align: center;
        }
      }
    `
  ]
})
export class AnnaErrorPageComponent implements OnInit {
  @Input() routerLink: string = '';
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      if (data['routerLink']) {
        this.routerLink = data['routerLink'];
      }
    });
  }
}