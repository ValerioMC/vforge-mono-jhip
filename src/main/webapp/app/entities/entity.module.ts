import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { VforgemonoRegionModule } from './region/region.module';
import { VforgemonoCountryModule } from './country/country.module';
import { VforgemonoLocationModule } from './location/location.module';
import { VforgemonoDepartmentModule } from './department/department.module';
import { VforgemonoTaskModule } from './task/task.module';
import { VforgemonoEmployeeModule } from './employee/employee.module';
import { VforgemonoJobModule } from './job/job.module';
import { VforgemonoJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        VforgemonoRegionModule,
        VforgemonoCountryModule,
        VforgemonoLocationModule,
        VforgemonoDepartmentModule,
        VforgemonoTaskModule,
        VforgemonoEmployeeModule,
        VforgemonoJobModule,
        VforgemonoJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VforgemonoEntityModule {}
