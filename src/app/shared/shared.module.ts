import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavigationItemComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [HeaderComponent, FooterComponent, NavigationItemComponent],
})
export class SharedModule {}
