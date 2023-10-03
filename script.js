const addToCart = document.querySelector('.add-btn')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const amount = document.querySelector('.amount')
const outputText = document.querySelector('.output-text')

const Singleton = () => {
  let instance

  function acquireItem() {
    const object = new Object('Good acquired!')
    return object
  }

  return {
    getItem: () => {
      if (!instance) {
        instance = acquireItem()
      }
      return instance
    },
  }
}

const Shop = function () {
  this.item = ''
  this.amount = 0
}

Shop.prototype = {
  setName: function (item) {
    this.item = item
  },

  calculations: function (operation) {
    return this.amount
  },
}

const doCalculations = function () {
  this.calculate = function (operation) {
    return this.amount
  }
}

const calculations = new doCalculations()
const ShopObj = new Shop()
ShopObj.setName('Ноутбук')

function show() {
  console.log(ShopObj.item + ': ' + ShopObj.calculations(calculations))
  outputText.innerHTML =
    ShopObj.item + ': ' + ShopObj.calculations(calculations)
}

addToCart.addEventListener('click', () => {
  const item = Singleton()
  console.log(item)
  show()
})

plus.addEventListener('click', () => {
  ShopObj.amount++
  amount.innerHTML = ShopObj.amount
})

minus.addEventListener('click', () => {
  if (ShopObj.amount !== 0) {
    ShopObj.amount--
    amount.innerHTML = ShopObj.amount
  }
})
