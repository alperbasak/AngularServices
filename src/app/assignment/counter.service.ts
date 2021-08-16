export class CounterService {
  toActiveCounter = 0;
  toInactiveCounter = 0;

  increaseToActiveCounter(): void {
    this.toActiveCounter++;
    console.log('Inactive -> Active: ' + this.toActiveCounter);
  }

  increaseToInactiveCounter(): void {
    this.toInactiveCounter++;
    console.log('Active -> Inactive: ' + this.toInactiveCounter);
  }

}
