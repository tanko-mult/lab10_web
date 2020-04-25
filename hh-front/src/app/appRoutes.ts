import {Routes} from '@angular/router';
import {CompanyComponent} from './company/company.component';
import {CompanyDetailsComponent} from './company-details/company-details.component';
import {VacancyDetailsComponent} from './vacancy-details/vacancy-details.component';
import {AuthorizationComponent} from './authorization/authorization.component';

export const appRoutes: Routes = [
  {path: '', component: CompanyComponent},
  {path: 'authorization', component: AuthorizationComponent},
  {path: 'api/companies', component: CompanyComponent},
  {path: 'api/companies/:id', component: CompanyDetailsComponent},
  {path: 'api/vacancies/:id', component: VacancyDetailsComponent}
]
