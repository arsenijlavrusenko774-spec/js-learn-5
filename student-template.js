"use strict";

function getProperty(object, key) {
  return object[key];
}

function countProperties(object) {
  return Object.keys(object).length;
}

function sumNumericProperties(object) {
  let sum = 0;
  for (let key in object) {
    if (typeof object[key] === "number") {
      sum += object[key];
    }
  }
  return sum;
}

function createProduct(name, price, quantity) {
  return {
    name: name,
    price: price,
    quantity: quantity,
    getTotal() {
      return this.price * this.quantity;
    }
  };
}

function calculateAverageGrade(student) {
  if (student.grades.length === 0) {
    return 0;
  }
  
  let sum = 0;
  for (let i = 0; i < student.grades.length; i++) {
    sum += student.grades[i];
  }
  return sum / student.grades.length;
}

function findMostExpensiveProduct(products) {
  if (products.length === 0) {
    return null;
  }

  let mostExpensive = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensive.price) {
      mostExpensive = products[i];
    }
  }
  return mostExpensive;
}

module.exports = {
  getProperty,
  countProperties,
  sumNumericProperties,
  createProduct,
  calculateAverageGrade,
  findMostExpensiveProduct
};