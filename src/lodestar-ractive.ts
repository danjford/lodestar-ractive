export * from './components/http';



// Convert a Class to an object useable by Ractive
// I.e. Take out the Prototype actions By using Test.Prototype
// and the them to Ractive.on
//
// Find a way to take the other properties and set them to Ractive's
// Data


export class Test {
  test = 'testName';

  testAction() {
    this.test = 'New Name!';
  }

}