import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassesService } from '../commons/classes-info/services/classes-service';
import { ClassesStore } from '../commons/classes-info/stores/classes-store';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
      
    ],
    providers: [
        ClassesService,
        ClassesStore
    ]
})
export class CommonsModule {
}
