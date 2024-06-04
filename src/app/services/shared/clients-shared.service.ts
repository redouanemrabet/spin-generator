import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClientDto } from '../generated/referentiel-api/models';

@Injectable({
  providedIn: 'root'
})
export class ClientsSharedService {
  private clientsSubject: BehaviorSubject<ClientDto[]> = new BehaviorSubject<ClientDto[]>([]);
  public clients$: Observable<ClientDto[]> = this.clientsSubject.asObservable();

  constructor() { }

  getClients(): ClientDto[] {
    return this.clientsSubject.getValue();
  }

  setClients(clients: ClientDto[]): void {
    this.clientsSubject.next(clients);
  }
}
