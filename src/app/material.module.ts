import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatSnackBarModule,
    MatMenuModule,
    MatChipsModule,
    MatFormFieldModule,
    MatExpansionModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatExpansionModule,
        MatFormFieldModule,
        MatMenuModule,
        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatDialogModule,
        MatTableModule,
        MatChipsModule
    ],
    exports: [
        MatExpansionModule,
        MatFormFieldModule,
        MatMenuModule,
        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatDialogModule,
        MatTableModule,
        MatChipsModule
    ]
})
export class MaterialModule { }
