import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeComponent } from './components/code/code.component';
import { PatientComponent } from './components/patient/patient.component';
import { NamePipe } from './pipes/name.pipe';
import { GlobalErrorHandler } from './services/error.handler';
import { FhirService } from './services/fhir.service';
import { ObservationComponent } from './components/observation/observation.component';
import { ReferenceRangeComponent } from './components/reference-range/reference-range.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    NamePipe,
    CodeComponent,
    ObservationComponent,
    ReferenceRangeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatListModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [
    FhirService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
