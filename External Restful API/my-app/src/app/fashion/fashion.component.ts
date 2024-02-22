import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';
@Component({
    selector: 'app-fashion',
    templateUrl: './fashion.component.html',
    styleUrls: ['./fashion.component.css']
})
export class FashionComponent {
    fashions: any;
    errMessage: string = ''
    constructor(public _service: FashionAPIService) {
        this._service.getFashions().subscribe({
            next: (data) => { this.fashions = data },
            error: (err) => { this.errMessage = err }
        })
    }
    deleteFashion(id: string): void {
        // Implement the logic for deleting a book, e.g., show a confirmation dialog
        if (confirm('Are you sure you want to delete this row?')) {
            this._service.deleteFashion(id).subscribe({
                next: () => {
                    // Refresh the book list after successful deletion
                    this._service.getFashions().subscribe({
                        next: (data) => { this.fashions = data },
                        error: (err) => { this.errMessage = err }
                    });
                },
                error: (err) => {
                    console.error('Error deleting fashion:', err);
                }
            });
        }
        console.log(`Deleting fashion with id ${id}`);
    }
}
