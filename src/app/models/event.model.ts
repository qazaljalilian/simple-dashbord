export interface ContractCreatedEvent {
  name: string,
  contractId: string,
  premium: number,
  startDate: Date,

}
export interface ContractTerminatedEvents {
  name: string,
  contractId: string,
  premium: number,
  terminationDate: Date,

}
