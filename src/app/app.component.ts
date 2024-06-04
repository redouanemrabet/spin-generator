import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router'
import { LayoutModule } from './layout/layout.module'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LayoutModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'backoffice-ic-front'
  isCollapsed = true
  activeRoute = ''
  currentUrl = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.currentUrl = this.router.url
      // @ts-ignore
      this.activeRoute = this.route.root.firstChild.snapshot.url[0]?.path
    })
  }
}
