import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DogsService } from 'src/services/dogs.service';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.css'],
})
export class CustomSearchComponent implements OnInit {
  title: string;
  breedsList: any[];
  imgNo: number;
  selectedBreed: string;
  randomImgs: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<CustomSearchComponent>,
    private dogsService: DogsService
  ) {}

  ngOnInit(): void {
    this.title = this.data.title;
    this.breedsList = Object.keys(this.data.breedsList);
  }

  getImages() {
    this.dogsService
      .getRandomBreedImgs(this.selectedBreed, this.imgNo)
      .subscribe(
        (response) => {
          console.log('random breed images: ', response);
          this.randomImgs = response['message'];
        },
        (error) => {
          console.log('error: ', error);
        }
      );
  }
}

export interface DialogData {
  title: string;
  breedsList: any[];
}
