import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomSearchComponent } from 'src/components/custom-search/custom-search.component';
import { SubBreedsComponent } from 'src/components/sub-breeds/sub-breeds.component';
import { DogsService } from 'src/services/dogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dog Gallery';

  dogBreeds: any[];
  dogsList: any[] = [];
  filteredDogsList: any[] = [];

  searchTxt: string = '';
  searchByBreed: boolean = false;

  constructor(private dogsService: DogsService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadDogBreeds();
    this.filteredDogsList = this.dogsList;
  }

  loadDogBreeds() {
    this.dogBreeds = [];
    this.dogsList = [];
    this.dogsService.getList().subscribe(
      (response) => {
        console.log('dog breeds: ', response);
        this.dogBreeds = response['message'];
        let listKeysArr = Object.keys(this.dogBreeds);

        listKeysArr.forEach((dog) => {
          this.loadBreedImg(dog);
        });
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }

  loadBreedImg(breed) {
    this.dogsService.getBreedImg(breed).subscribe(
      (response) => {
        console.log('dog breed img: ', response);
        this.dogsList.push({
          name: breed,
          imgPath: response['message'],
        });
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }

  applyFilter(searchTxt) {
    this.filteredDogsList =
      searchTxt && searchTxt.length > 0
        ? this.dogsList.filter(function (val) {
            return val.name.toLowerCase().indexOf(searchTxt.toLowerCase()) > -1
              ? true
              : false;
          })
        : this.dogsList;
  }

  clear() {
    this.searchTxt = '';
    this.filteredDogsList = this.dogsList;
  }

  setSearchByBreed(status) {
    if (!status && this.searchTxt.length > 0) {
      return;
    }
    this.searchByBreed = status;
  }

  openSubBreeds(breed) {
    const dialogRef = this.dialog.open(SubBreedsComponent, {
      width: '700px',
      data: {
        breed: breed,
      },
    });
  }

  customSearch() {
    const dialogRef = this.dialog.open(CustomSearchComponent, {
      width: '700px',
      data: {
        title: 'Custom Search',
        breedsList: this.dogBreeds,
      },
    });
  }
}
