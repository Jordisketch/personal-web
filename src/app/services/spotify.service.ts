import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getUserPlayedTracks(): any{
    const headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer BQDz9q09zch8RkJHYlujaZL4ob6AaT__cdqC-mIM37HYqEvP7DQoq5yvT3nNRDNy_VQohWXU8GdX4LV9yKl77bKajTA3YajHUHrJsPdhDarwpi19VIE')
    return this.http.get('https://api.spotify.com/v1/me/player/recently-played', {headers: headers});
  }



  getToken(): any{
    const headers: HttpHeaders = new HttpHeaders().append('Access-Control-Allow-Origin', '*')
    return this.http.get('http://localhost:8081/login', {headers: headers});
  }
}
