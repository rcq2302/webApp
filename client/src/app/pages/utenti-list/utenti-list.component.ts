import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { UtentiService } from '../../services/utenti.service';
// Import Models
import { Utenti } from '../../domain/web-app_db/utenti';

// START - USED SERVICES
/**
* UtentiService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* UtentiService.list
*	@description CRUD ACTION list
*
* UtentiService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* UtentiService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* UtentiService.create
*	@description CRUD ACTION create
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Utenti
 * @class UtentiListComponent
 */
@Component({
    selector: 'app-utenti-list',
    templateUrl: './utenti-list.component.html',
    styleUrls: ['./utenti-list.component.css']
})
export class UtentiListComponent implements OnInit {
    list: Utenti[];
    search: any = {};
    idSelected: string;
    constructor(
        private utentiService: UtentiService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.utentiService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Utenti to remove
     *
     * @param {string} id Id of the Utenti to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Utenti
     */
    deleteItem() {
        this.utentiService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
