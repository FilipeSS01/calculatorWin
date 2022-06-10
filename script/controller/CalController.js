class CalcController {
  constructor() {
    this._elDisplayCalc = document.querySelector("#display");
    this._displayCal = "";

    this._operation = [];

    this.initialize();
    this.displayCal = 0;
  }

  initialize() {
    // alert("JS configurado com sucesso!");
    this.btnEvents();
  }

  // ===============================================
  //                   Btns
  // ===============================================

  btnClick(btn) {
    switch (btn) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.addOperation(btn);
        break;
      case "plus":
        this.addOperation("+");
        break;
      case "less":
        this.addOperation("-");
        break;
      case "c":
        this.clear();
        break;
      case "ce":
        this.clearEntry();
        break;

      default:
        break;
    }
  }

  btnEvents() {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        let btnInfo = btn.classList[3].replace("btn-", "").toString();
        this.btnClick(btnInfo);
      });
    });
  }

  // ===============================================
  //                 Settings
  // ===============================================

  addOperation(value) {
    if (isNaN(this.getLastOperation())) {
      if (this.isOperator(value)) {
        this.setLastOperation(value);
      } else {
        this.pushOperation(value);
      }
    } else {
      if (this.isOperator(value)) {
        this.pushOperation(value);
      } else {
        let newValue = this.getLastOperation().toString() + value.toString();
        this.setLastOperation(newValue);
      }
    }
    this.updateDisplay();
  }

  clear() {
    this._operation = [];
    this.displayCal = 0;
  }

  clearEntry() {
    if (!this.isOperator(this.getLastOperation())) {
      this._operation.pop();
    }
    this.displayCal = 0;
  }

  pushOperation(value) {
    this._operation.push(value);
  }

  isOperator(value) {
    return ["+", "-", "*", "%", "/"].indexOf(value) > -1;
  }

  getLastOperation() {
    return this._operation[this._operation.length - 1];
  }

  setLastOperation(value) {
    this._operation[this._operation.length - 1] = value;
  }

  updateDisplay() {
    this.displayCal = this._operation.join(" ");
  }

  // ===============================================
  //              Gets and Sets
  // ===============================================

  get displayCal() {
    return this._elDisplayCalc.innerHTML;
  }
  set displayCal(value) {
    this._elDisplayCalc.innerHTML = value;
  }
}
