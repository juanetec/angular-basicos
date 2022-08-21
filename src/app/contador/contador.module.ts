import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    imports: [ 
       // CommonModule
     ],
    exports: [
        ContadorComponent
    ],
    providers: [],
})
export class ContadorModules {};