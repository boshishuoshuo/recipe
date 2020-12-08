import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'

})
export class HeaderComponent {
    collapsed = true;

    constructor(private dataStoreService: DataStorageService) {}

    onSaveData() {
        this.dataStoreService.storeRecipes();
    }

    onFetchData() {
        this.dataStoreService.fetchRecipes().subscribe();
    }
}