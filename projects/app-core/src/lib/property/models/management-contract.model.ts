export interface ManagementContract {
  ManagementContractTitle: string;
  StartDate: Date;
  EndDate: Date;
  PlacementFeeScale: string;
  ManagementFeeScale: string;
  ContractSignDate: Date;
  PropertyId: number;
  ManagementContractDocUrl: string;
  ManagementContractType: number;
  IsActive: boolean;
  Notes: string;
}
