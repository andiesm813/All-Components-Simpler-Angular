import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostComponentsComponent } from './most-components/most-components.component';
import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxButtonGroupModule, IgxChipsModule, IgxInputGroupModule, IgxBadgeModule, IgxAvatarModule, IgxCheckboxModule, IgxRadioModule, IgxSwitchModule, IgcFormsModule, IgxStepperModule, IgxDropDownModule, IgxTabsModule, IgxSliderModule, IgxCalendarModule, IgxGridModule, IgxTreeModule, IgxAccordionModule, IgxExpansionPanelModule, IgxCardModule, IgxListModule, IgxComboModule, IgxSelectModule, IgxDatePickerModule, IgxDialogModule, IgxBannerModule, IgxSnackbarModule, IgxNavigationDrawerModule, IgxNavbarModule } from '@infragistics/igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    MostComponentsComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxIconModule,
    IgxButtonGroupModule,
    IgxChipsModule,
    IgxInputGroupModule,
    IgxBadgeModule,
    IgxAvatarModule,
    IgxCheckboxModule,
    IgxRadioModule,
    IgxSwitchModule,
    IgcFormsModule,
    IgxStepperModule,
    IgxDropDownModule,
    IgxTabsModule,
    IgxSliderModule,
    IgxCalendarModule,
    IgxGridModule,
    IgxCategoryChartModule,
    IgxTreeModule,
    IgxAccordionModule,
    IgxExpansionPanelModule,
    IgxCardModule,
    IgxListModule,
    IgxComboModule,
    IgxSelectModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxBannerModule,
    IgxSnackbarModule,
    FormsModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
