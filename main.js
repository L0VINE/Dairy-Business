'use strict';

const inputLabel = document.querySelectorAll('.form__label');
const inputForm = document.querySelectorAll('.form__input');
const btn = document.querySelector('.form__btn');
const container = document.querySelector('.container')
const reports = document.querySelector('.reports')

const inputShedA = document.querySelector('.form__input--shedA');
const inputShedB = document.querySelector('.form__input--shedB');
const inputShedC = document.querySelector('.form__input--shedC');
const inputShedD = document.querySelector('.form__input--shedD');

const dailyReport = document.querySelector('.report--daily');
const weeklyReport = document.querySelector('.report--weekly');
const monthlyReport = document.querySelector('.report--monthly');
const yearlyReport = document.querySelector('.report--yearly');
const err = () => alert('input must be positive numbers');

const getDaysInMonth = function (month, year) {
  const days = new Date(year, month, 0).getDate();
  return days;
};

class App {
  #sellingPrice = 45;
  #shedMovements = [];
  #months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor() {
    btn.addEventListener('click', this._totalProduction.bind(this));
  }

  _totalProduction(evt) {
    evt.preventDefault();
    const validInputs = (...inputs) =>
      inputs.every(input => Number.isFinite(input));

    const allPositive = (...inputs) => inputs.every(input => input > 0);

    const shedA = +inputShedD.value;
    const shedB = +inputShedD.value;
    const shedC = +inputShedC.value;
    const shedD = +inputShedD.value;
    if (
        !validInputs(shedA, shedB, shedC, shedD) ||
        !allPositive(shedA, shedB, shedC, shedD)
      )
        return err();
  
      this.#shedMovements.push(
        +inputShedA.value,
        +inputShedB.value,
        +inputShedC.value,
        +inputShedD.value
      );
      this.daily = this.#shedMovements.reduce((a, b) => a + b, 0);
      this._renderReports();
      reports.classList.remove('hidden');
      container.classList.add('hidden')
    }
    _renderReports() {
      this.#shedMovements.forEach(function (a, i) {
        const html = `<p>Your production in ${inputLabel[i].textContent} is ${a} litres</p>`;
        dailyReport.insertAdjacentHTML('beforeend', html);
      });
      dailyReport.insertAdjacentHTML(
        'beforeend',
        `The total production is ${this.daily} litres per day`
      );
  
