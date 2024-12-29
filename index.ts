abstract class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private _lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this._lastReport = reports[-1];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('2', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  get lastReport() {
    if (this._lastReport) {
      return this._lastReport;
    }
    throw new Error('No report found.');
  }

  set lastReport(text: string) {
    if (!text) {
      throw new Error('Please pass a valid value!');
    }
    this.addReport(text);
  }

  addEmployee(employee: string) {
    if (employee === 'John') {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this._lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('1', ['John']);
it.addEmployee('John');
it.addEmployee('Mark');
it.describe();
it.printEmployeeInformation();
console.log(it);

// const accountingDepartment = new AccountingDepartment('2', []);
const accountingDepartment = AccountingDepartment.getInstance();
accountingDepartment.lastReport = 'Year End report';
console.log(accountingDepartment);
accountingDepartment.addReport('Sth went wrong');
accountingDepartment.lastReport;
accountingDepartment.addEmployee('John');
accountingDepartment.addEmployee('Mary');
// accountingDepartment.printReports();
// accountingDepartment.printEmployeeInformation();
accountingDepartment.describe();

// accounting.employees[2] = 'Anna';

// const accountingCopy = { describe: accounting.describe, name: 'DUMMY' };
// accountingCopy.describe();
