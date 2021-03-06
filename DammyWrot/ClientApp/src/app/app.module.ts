import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RightSideSectionComponent } from './right-side-section/right-side-section.component';
import { LeftSideSectionComponent } from './left-side-section/left-side-section.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { NewsletterSectionComponent } from './newsletter-section/newsletter-section.component';
import { PostTweetSectionComponent } from './post-tweet-section/post-tweet-section.component';
import { TrendsSectionComponent } from './trends-section/trends-section.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { PostedTweetSectionComponent } from './posted-tweet-section/posted-tweet-section.component';
import { FullSearchSectionComponent } from './full-search-section/full-search-section.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { WatchSectionComponent } from './watch-section/watch-section.component';
import { HistorySectionComponent } from './history-section/history-section.component';
import { FollowersSectionComponent } from './followers-section/followers-section.component';
import { PagesSectionComponent } from './pages-section/pages-section.component';
import { GroupsSectionComponent } from './groups-section/groups-section.component';
import { EventsSectionComponent } from './events-section/events-section.component';
import { ExploreSectionComponent } from './explore-section/explore-section.component';
import { NotificationsSectionComponent } from './notifications-section/notifications-section.component';
import { MessagesSectionComponent } from './messages-section/messages-section.component';
import { BookmarksSectionComponent } from './bookmarks-section/bookmarks-section.component';
import { TopicsSectionComponent } from './topics-section/topics-section.component';
import { MomentsSectionComponent } from './moments-section/moments-section.component';
import { DammyWrotAdsSectionComponent } from './dammy-wrot-ads-section/dammy-wrot-ads-section.component';
import { AnalyticsSectionComponent } from './analytics-section/analytics-section.component';
import { SettingsSectionComponent } from './settings-section/settings-section.component';
import { HelpCenterSectionComponent } from './help-center-section/help-center-section.component';
import { LogoutSectionComponent } from './logout-section/logout-section.component';
import { DisplaySectionComponent } from './display-section/display-section.component';
import { JobsSectionComponent } from './jobs-section/jobs-section.component';
import { SavedSectionComponent } from './saved-section/saved-section.component';
import { MemoriesSectionComponent } from './memories-section/memories-section.component';
import { GamingSectionComponent } from './gaming-section/gaming-section.component';
import { ChatSectionComponent } from './chat-section/chat-section.component';
import { AccountSectionComponent } from './account-section/account-section.component';
import { FeedbackSectionComponent } from './feedback-section/feedback-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { CookiesSectionComponent } from './cookies-section/cookies-section.component';
import { PrivacySectionComponent } from './privacy-section/privacy-section.component';
import { PolicySectionComponent } from './policy-section/policy-section.component';
import { AdChoicesSectionComponent } from './ad-choices-section/ad-choices-section.component';
import { AdvertisingSectionComponent } from './advertising-section/advertising-section.component';
import { BusinessServicesSectionComponent } from './business-services-section/business-services-section.component';
import { MoreSectionComponent } from './more-section/more-section.component';
import { GetAppSectionComponent } from './get-app-section/get-app-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material'
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { StateService } from './_services/state.service';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
        RightSideSectionComponent,
        LeftSideSectionComponent,
        MiddleSectionComponent,
        NewsletterSectionComponent,
        PostTweetSectionComponent,
        TrendsSectionComponent,
        SearchSectionComponent,
        PostedTweetSectionComponent,
        FullSearchSectionComponent,
        ProfileSectionComponent,
        WatchSectionComponent,
        HistorySectionComponent,
        FollowersSectionComponent,
        PagesSectionComponent,
        GroupsSectionComponent,
        EventsSectionComponent,
        ExploreSectionComponent,
        NotificationsSectionComponent,
        MessagesSectionComponent,
        BookmarksSectionComponent,
        TopicsSectionComponent,
        MomentsSectionComponent,
        DammyWrotAdsSectionComponent,
        AnalyticsSectionComponent,
        SettingsSectionComponent,
        HelpCenterSectionComponent,
        DisplaySectionComponent,
        JobsSectionComponent,
        SavedSectionComponent,
        MemoriesSectionComponent,
        LogoutSectionComponent,
        GamingSectionComponent,
        ChatSectionComponent,
        AccountSectionComponent,
        FeedbackSectionComponent,
        FooterSectionComponent,
        AboutSectionComponent,
        CookiesSectionComponent,
        PrivacySectionComponent,
        PolicySectionComponent,
        AdChoicesSectionComponent,
        AdvertisingSectionComponent,
        BusinessServicesSectionComponent,
        GetAppSectionComponent,
        MoreSectionComponent,
        LoginComponent,
        SignupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      //{ path: '', component: HomeComponent, pathMatch: 'full' },
      //{ path: 'counter', component: CounterComponent },
      //{ path: 'fetch-data', component: FetchDataComponent },
        { path: '', component: MiddleSectionComponent, pathMatch: 'full' },
        { path: 'full-search', component: FullSearchSectionComponent },
        { path: 'profile', component: ProfileSectionComponent },
        { path: 'watch', component: WatchSectionComponent },
        { path: 'history', component: HistorySectionComponent},
        { path: 'followers', component: FollowersSectionComponent},
        { path: 'pages', component: PagesSectionComponent},
        { path: 'groups', component: GroupsSectionComponent},
        { path: 'events', component: EventsSectionComponent},
        { path: 'explore', component: ExploreSectionComponent},
        { path: 'notifications', component: NotificationsSectionComponent},
        { path: 'messages', component: MessagesSectionComponent},
        { path: 'bookmarks', component: BookmarksSectionComponent},
        { path: 'topics', component: TopicsSectionComponent},
        { path: 'moments', component: MomentsSectionComponent},
        { path: 'dammy-wrot-ads', component: DammyWrotAdsSectionComponent},
        { path: 'analytics', component: AnalyticsSectionComponent},
        { path: 'settings', component: SettingsSectionComponent},
        { path: 'help-center', component: HelpCenterSectionComponent},
        { path: 'display', component: DisplaySectionComponent},
        { path: 'jobs', component: JobsSectionComponent},
        { path: 'saved', component: SavedSectionComponent},
        { path: 'memories', component: MemoriesSectionComponent},
        { path: 'logout', component: LogoutSectionComponent},
        { path: 'gaming', component: GamingSectionComponent},
        { path: 'chat', component: ChatSectionComponent},
        { path: 'account', component: AccountSectionComponent},
        { path: 'feedback', component: FeedbackSectionComponent},
        { path: 'about', component: AboutSectionComponent},
        { path: 'cookies', component: CookiesSectionComponent},
        { path: 'privacy', component: PrivacySectionComponent},
        { path: 'policy', component: PolicySectionComponent},
        { path: 'ad-choices', component: AdChoicesSectionComponent},
        { path: 'advertising', component: AdvertisingSectionComponent},
        { path: 'business-services', component: BusinessServicesSectionComponent},
        { path: 'get-app', component: GetAppSectionComponent},
        { path: 'more', component: MoreSectionComponent},

    ]),
      BrowserAnimationsModule,
      MatButtonModule
  ],
  providers: [AuthService, AuthGuard, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
