import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoOverviewComponent } from './pages/to-do-overview/to-do-overview.component';
import { MainInputComponent } from './components/main-input/main-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoTaskComponent } from './components/to-do-task/to-do-task.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    ToDoOverviewComponent,
    MainInputComponent,
    ToDoTaskComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ToDoModule {
}
