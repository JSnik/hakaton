import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class GeneralService {
  constructor(private http: HttpClient) {
  }
  baseUrl: string = 'https://fullfinalproject.azurewebsites.net/'

  getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/SocialServices/GetSocialServices`)
  }
}
