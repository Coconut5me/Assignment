// bitcoin.component.ts
import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { BitcoinData } from '../interfaces/Bitcoin';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css'],
})
// bitcoin.component.ts
// bitcoin.component.ts
export class BitcoinComponent implements OnInit {
  bitcoinData!: BitcoinData;
  errMessage: string = ''; // Add this line

  constructor(private bitcoinService: BitcoinService) {}

  ngOnInit(): void {
    this.getBitcoinPrice();
  }

  getBitcoinPrice(): void {
    this.bitcoinService.getBitcoinPrice().subscribe(
      (data) => {
        this.bitcoinData = data;
      },
      (error) => {
        this.errMessage = 'Error fetching Bitcoin data: ' + error.message;
      }
    );
  }

  getBpiCurrencies(): string[] {
    return Object.keys(this.bitcoinData.bpi);
  }
}

