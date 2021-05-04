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
