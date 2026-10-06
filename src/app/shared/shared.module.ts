import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ScrollRevealDirective],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, ScrollRevealDirective]
})
export class SharedModule {}
