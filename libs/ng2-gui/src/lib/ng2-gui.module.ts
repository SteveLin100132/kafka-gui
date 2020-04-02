/**
 * 專案名稱： @steveylin/ng2-gui
 * 部門代號： ML8100
 * 檔案說明： UI主Module
 * @CREATE Sunday, 8th March 2020 12:13:59 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { AvatarComponent } from './avatar/avatar.component';
import { AvatarShortTextPipe } from './avatar/avatar-short-text.pipe';
import { ButtonComponent } from './button/button.component';
import { CardListComponent } from './card-list/card-list.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { SnackBarService } from './snack-bar/snack-bar.service';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SnackBarContainerComponent } from './snack-bar-container/snack-bar-container.component';
import { SnackBarContainerDirective } from './snack-bar-container/snack-bar-container.directive';
import { TabsComponent } from './tabs/tabs.component';
import { TabsetComponent } from './tabset/tabset.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TextfieldComponent } from './textfield/textfield.component';
import { TabsetContainerComponent } from './tabset-container/tabset-container.component';

/**
 * UI主Module
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgScrollbarModule
  ],
  declarations: [
    AvatarComponent,
    AvatarShortTextPipe,
    ButtonComponent,
    CardListComponent,
    LoadingSpinnerComponent,
    SideMenuComponent,
    SnackBarComponent,
    SnackBarContainerComponent,
    SnackBarContainerDirective,
    TabsComponent,
    TabsetComponent,
    ToggleComponent,
    TextfieldComponent,
    TabsetContainerComponent
  ],
  providers: [
    SnackBarService,
  ],
  exports: [
    AvatarComponent,
    ButtonComponent,
    CardListComponent,
    LoadingSpinnerComponent,
    SideMenuComponent,
    SnackBarContainerComponent,
    SnackBarContainerDirective,
    TabsComponent,
    TabsetComponent,
    ToggleComponent,
    TextfieldComponent,
    TabsetContainerComponent
  ],
})
export class Ng2GuiModule {}
