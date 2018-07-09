import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content-component';
import { ActivatedRoute } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'student-list', pathMatch: 'full' },
    { path: 'student-list', redirectTo: 'student-list', pathMatch: 'full' },
    { path: 'class-student-list', redirectTo: 'class-student-list', pathMatch: 'full' },
    { path: 'student-class-list', redirectTo: 'student-class-list', pathMatch: 'full' },
    { path: 'student-add', redirectTo: 'student-add', pathMatch: 'full' },
    { path: '404', component: NoContentComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }