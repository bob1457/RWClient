import { Injectable } from '@angular/core';
import { ManagementContract } from 'projects/app-core/src/lib/property/models/management-contract.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagementContractService {

  baseUrl = 'http://localhost:21799';

  constructor(private http: HttpClient) { }

  addManagementContract(owner: ManagementContract) {
    debugger;

    return this.http.post<ManagementContract>(`${this.baseUrl}/property/contract/add`, owner);
  }

  // addExistingOwnerToProperty() {}

  // removeManagementContract(owner: any) {
  //   debugger;
  //   return this.http.post(`${this.baseUrl}/property/remove`, owner);
  // }

  updateManagementContract(owner: ManagementContract) {
    debugger;
    return this.http.post<ManagementContract>(`${this.baseUrl}/property/contract/update`, owner);
  }

  getManagementContractList() {
    return this.http.get<ManagementContract[]>(`${this.baseUrl}/property/contracts`);
  }

  getManagementContractListByPm(pm: any) {
    return this.http.get<ManagementContract[]>(`${this.baseUrl}/property/contractsbypm/${pm}`);
  }

  getManagementContractDetails(id: number) {
    // return this.http.get<Property>(`${this.baseUrl}/property/${id});
    return this.http.get<ManagementContract>(`${this.baseUrl}/property/contract/${id}`);
  }

  uploadContractFile(files, id: any) {
    debugger;

    if (files.length === 0) {
      return;
    }

    // const fileToUpload = files[0] as File;
    let fileToUpload = <File>files[0];

    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('contractId', id);

    return this.http.post(`${this.baseUrl}/property/file/add`, formData);
  }

}
