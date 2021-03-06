import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchComponent } from './search/index';
import { NavbarComponent } from './navbar/index';

import { ItunesService } from './services/itunes.service';
import { SpotifyService } from './services/spotify.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    declarations: [SearchComponent, NavbarComponent],
    exports: [SearchComponent, NavbarComponent, CommonModule, RouterModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ItunesService, SpotifyService]
        };
    }
}
