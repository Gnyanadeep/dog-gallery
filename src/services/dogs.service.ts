import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(
    private http: HttpClient,
  ) { }

  public getList() {
		return this.http.get(environment.apiurl + "/breeds/list/all");
  }
  
  public getBreedImg(breed) {
		return this.http.get(environment.apiurl + "/breed/" + breed + "/images/random");
  }
  
  public getSubBreedList(breed) {
		return this.http.get(environment.apiurl + "/breed/" + breed + "/list");
  }

  public getRandomBreedImgs(breed, quantity) {
		return this.http.get(environment.apiurl + "/breed/" + breed + "/images/random/" + quantity);
  }
  
  public getSubBreedImg(breed, subBreed) {
		return this.http.get(environment.apiurl + "/breed/" + breed + "/" + subBreed + "/images/random");
  }
}
