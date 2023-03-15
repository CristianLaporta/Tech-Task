import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselHomeComponent } from './components/home/carousel-home/carousel-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselCompaniesComponent } from './components/home/carousel-companies/carousel-companies.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NavbarComponent } from './components/common-components/navbar/navbar.component';
import { InfoHomeComponent } from './components/home/info-home/info-home.component';
import { AboutComponent } from './components/home/about/about.component';
import { ChatComponent } from './components/common-components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { AnalyticsComponent } from './components/home/analytics/analytics.component';
import { PortfolioComponent } from './components/home/portfolio/portfolio.component';
import { ContactsComponent } from './components/home/contacts/contacts.component';
import { FooterComponent } from './components/common-components/footer/footer.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LateralMenuComponent } from './components/admin/lateral-menu/lateral-menu.component';
import { MessagesComponent } from './components/admin/messages/messages.component';
import { AdminSlideComponent } from './components/admin/admin-slide/admin-slide.component';
import { AdminPartnersComponent } from './components/admin/admin-partners/admin-partners.component';
import { AdminPortfolioComponent } from './components/admin/admin-portfolio/admin-portfolio.component';
import { AdminChatComponent } from './components/admin/admin-chat/admin-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselHomeComponent,
    CarouselCompaniesComponent,
    NavbarComponent,
    InfoHomeComponent,
    AboutComponent,
    ChatComponent,
    AnalyticsComponent,
    PortfolioComponent,
    ContactsComponent,
    FooterComponent,
    AdminComponent,
    LateralMenuComponent,
    MessagesComponent,
    AdminSlideComponent,
    AdminPartnersComponent,
    AdminPortfolioComponent,
    AdminChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
  ],
  exports: [NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
