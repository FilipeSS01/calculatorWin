class CalcController {
  constructor() {
    this._elDisplayCalc = document.querySelector("#display");
    this._displayCal = "";

    this._operation = [];
    this._lastNumber = "";
    this._lastOperator = "";

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
      case "division":
        this.addOperation("/");
        break;
      case "multiplication":
        this.addOperation("*");
        break;
      // case "percent":
      //   this.percent();
      //   break;
      // case "sqrt":
      //   this.sqrt();
      //   break;
      // case "pow":
      //   this.pow();
      //   break;
      // case "invert":
      //   this.invert();
      //   break;
      // case "plusLess":
      //   this.plusLess();
      //   break;
      // case "dot":
      //   this.addDot();
      //   break;
      case "equals":
        this.calc();
        break;
      case "c":
        this.clear();
        break;
      case "ce":
        this.clearEntry();
        break;
      case "backspace":
        this.backSpace();
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
        this.pushOperation(parseFloat(value));
      }
    } else {
      if (this.isOperator(value)) {
        this.pushOperation(value);
      } else {
        let newValue = this.getLastOperation().toString() + value.toString();
        this.setLastOperation(parseFloat(newValue));
      }
    }
    this.updateDisplay();
  }
  calc() {}
  // I don't know what it takes but I think I'm done
  clear() {
    this._operation = [];
    this.displayCal = 0;
  }
  // I don't know what it takes but I think I'm done
  clearEntry() {
    if (!this.isOperator(this.getLastOperation())) {
      this._operation.pop();
    }
    this.displayCal = 0;
  }
  // Needs to be reviewed
  backSpace() {
    if (!isNaN(this.getLastOperation())) {
      let backSpace = this.getLastOperation().split("");
      backSpace.pop();
      this.setLastOperation(backSpace.join(""));
      this.updateDisplay();
    }
  }
  // Needs to be implemented - this._operation cannot be more than 3 elements
  pushOperation(value) {
    this._operation.push(value);
    if (this._operation.length > 3) {
      this.calc();
    }
  }
  // I don't know what it takes but I think I'm done
  isOperator(value) {
    return ["+", "-", "*", "%", "/"].indexOf(value) > -1;
  }
  // Finish
  getLastItem(isOperator = true) {
    let lastItem = "";
    for (let i = this._operation.length - 1; i >= 0; i--) {
      if (this.isOperator(this._operation[i]) == isOperator) {
        lastItem = this._operation[i];
        break;
      }
    }
    if (!lastItem && lastItem != 0) {
      lastItem = isOperator ? this._lastOperator : this._lastNumber;
    }
    return lastItem;
  }
  // Finish
  getLastOperation() {
    return this._operation[this._operation.length - 1];
  }
  // Finish
  setLastOperation(value) {
    this._operation[this._operation.length - 1] = value;
  }
  // Needs to be implemented
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
