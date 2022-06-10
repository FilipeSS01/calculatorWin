class CalcController {
  constructor() {
    this._elDisplayCalc = document.querySelector("#display");
    this._displayCal = "";

    this._operation = [];

    this.initialize();
  }

  initialize() {
    // alert("JS configurado com sucesso!");
    this.btnEvents();
  }

  // ===============================================
  //                   Btns
  // ===============================================

  btnClick(btn) {
    // console.log(btn);
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
        break;
    //   case "←":
    //     console.log(btn);
    //     break;

      default:
        break;
    }
  }

  btnEvents() {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.btnClick(btn.innerHTML);
      });
    });
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
