import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxButtonGroupModule, IgxChipsModule, IgxInputGroupModule, IgxBadgeModule, IgxAvatarModule, IgxCheckboxModule, IgxRadioModule, IgxSwitchModule, IgcFormsModule, IgxStepperModule, IgxDropDownModule, IgxTabsModule, IgxSliderModule, IgxCalendarModule, IgxGridModule, IgxTreeModule, IgxAccordionModule, IgxExpansionPanelModule, IgxCardModule, IgxListModule, IgxComboModule, IgxSelectModule, IgxDatePickerModule, IgxDialogModule, IgxBannerModule, IgxSnackbarModule } from '@infragistics/igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { MostComponentsComponent } from './most-components.component';

describe('MostComponentsComponent', () => {
  let component: MostComponentsComponent;
  let fixture: ComponentFixture<MostComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostComponentsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxButtonGroupModule, IgxChipsModule, IgxInputGroupModule, IgxBadgeModule, IgxAvatarModule, IgxCheckboxModule, IgxRadioModule, IgxSwitchModule, IgcFormsModule, IgxStepperModule, IgxDropDownModule, IgxTabsModule, IgxSliderModule, IgxCalendarModule, IgxGridModule, IgxTreeModule, IgxAccordionModule, IgxExpansionPanelModule, IgxCardModule, IgxListModule, IgxComboModule, IgxSelectModule, IgxDatePickerModule, IgxDialogModule, IgxBannerModule, IgxSnackbarModule, IgxCategoryChartModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
