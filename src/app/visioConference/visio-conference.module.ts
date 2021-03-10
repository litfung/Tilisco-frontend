import { HeaderComponent } from './header/header.component';
import { ControlMenuComponent } from './control-menu/control-menu.component';
import { CoreComponent } from './core/core.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChatPanelComponent } from './chat-panel/chat-panel.component';
import { FeaturesMenuComponent } from '../features-menu/features-menu.component';


const visioRoutes: Routes = [
  {path: '', component: CoreComponent}
  
]

@NgModule({
  declarations: [CoreComponent, ControlMenuComponent, HeaderComponent, ChatPanelComponent, FeaturesMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    RouterModule.forChild(visioRoutes)
  ],
 entryComponents:[FeaturesMenuComponent,ChatPanelComponent]
})
export class VisioConferenceModule { }

