import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DogsService } from 'src/services/dogs.service';

@Component({
  selector: 'app-sub-breeds',
  templateUrl: './sub-breeds.component.html',
  styleUrls: ['./sub-breeds.component.css'],
})
export class SubBreedsComponent implements OnInit {
  breed: string;
  randomImgs: any[];
  subBreeds: any[];
  subBreedsList: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<SubBreedsComponent>,
    private dogsService: DogsService
  ) {}

  ngOnInit(): void {
    this.breed = this.data.breed;
    this.getSubBreeds();
    this.getRandomImgs();
  }

  getSubBreeds() {
    this.dogsService.getSubBreedList(this.breed).subscribe(
      (response) => {
        console.log('sub breeds: ', response);
        this.subBreeds = response['message'];
        this.subBreeds.forEach((dog) => {
          this.loadBreedImg(dog);
        });
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }

  loadBreedImg(subBreed) {
    this.dogsService.getSubBreedImg(this.breed, subBreed).subscribe(
      (response) => {
        console.log('dog breed img: ', response);
        // return response["message"];
        this.subBreedsList.push({
          name: subBreed,
          imgPath: response['message'],
        });
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }

  getRandomImgs() {
    this.dogsService.getRandomBreedImgs(this.breed, 3).subscribe(
      (response) => {
        console.log('random breed images: ', response);
        this.randomImgs = response['message'];
        // this.dogBreeds = response["message"];
        // let listKeysArr = Object.keys(this.dogBreeds);
        // listKeysArr.forEach(dog => {
        //   this.loadBreedImg(dog);
        // });
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }

  close() {
    this.dialogRef.close();
  }
}

export interface DialogData {
  breed: string;
}
