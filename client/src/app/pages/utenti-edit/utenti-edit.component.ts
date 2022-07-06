// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { UtentiService } from '../../services/utenti.service';
// Import Models
import { Utenti } from '../../domain/web-app_db/utenti';

// START - USED SERVICES
/**
* UtentiService.create
*	@description CRUD ACTION create
*
* UtentiService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* UtentiService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Utenti
 */
@Component({
    selector: 'app-utenti-edit',
    templateUrl: 'utenti-edit.component.html',
    styleUrls: ['utenti-edit.component.css']
})
export class UtentiEditComponent implements OnInit {
    item: Utenti;
    model: Utenti;
    formValid: Boolean;

    constructor(
    private utentiService: UtentiService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Utenti();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.utentiService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Utenti
     *
     * @param {boolean} formValid Form validity check
     * @param Utenti item Utenti to save
     */
    save(formValid: boolean, item: Utenti): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.utentiService.update(item).subscribe(data => this.goBack());
            } else {
                this.utentiService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



