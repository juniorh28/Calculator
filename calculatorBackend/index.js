//Libaries Imported
const express = require("express");

function multiplication(...args) {
  return args.reduce(function (acc, cur) {
    return acc * cur;
  });
}

function addition(...args) {
  return args.reduce(function (acc, cur) {
    return acc + cur;
  });
}

function subtraction(...args) {
  return args.reduce(function (acc, cur) {
    return acc - cur;
  });
}

console.log(multiplication(4, 2, 3, 4));
