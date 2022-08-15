import { makeAutoObservable } from "mobx"
import { IProductData } from "../data/productData"

export interface ICartItem extends IProductData {
    amount: number,
    finalPrice: number, 
    cost:number
}

class Cart {

    cartList:ICartItem[] = []

    cartTotal:number = 0

    constructor() {
        makeAutoObservable(this)
    }

    cartTotalFunc() {
        this.cartTotal = this.cartList.reduce((acc, item) => acc + item.cost, 0);
    }

    

    addToCart(product:IProductData, amount:number, finalPrice:number, cost:number) {
        if (this.cartList.find(item => item.id === product.id)) {
            this.cartList.map(item => {
                if (item.id === product.id) {
                    item.amount = amount
                    item.finalPrice = finalPrice
                    item.cost = cost
                    return null
                } return null
            })
            return null
        } else this.cartList.push({...product, amount: amount, finalPrice: finalPrice, cost: cost})  
        this.cartTotalFunc()
    }

    removeFromCart(id:string) {
        this.cartList = this.cartList.filter(item => item.id !== id)
        this.cartTotalFunc()
    }

    incrementAmount(id:string) {
        this.cartList.map(item => {
            if (item.id === id) {
                item.amount += 1
                if (item.amount > item.price[2].mass) {
                    item.finalPrice = item.price[2].price
                } else if (item.amount > item.price[1].mass) {
                    item.finalPrice = item.price[1].price
                } else {
                    item.finalPrice = item.price[0].price
                }
                item.cost = item.amount * item.finalPrice
                return null
            } return null
        })
        this.cartTotalFunc()
    }

    decrementAmount(id:string) {
        this.cartList.map(item => {
            if (item.id === id) {
                item.amount -= 1
                if (item.amount > item.price[2].mass) {
                    item.finalPrice = item.price[2].price
                } else if (item.amount > item.price[1].mass) {
                    item.finalPrice = item.price[1].price
                } else {
                    item.finalPrice = item.price[0].price
                }
                item.cost = item.amount * item.finalPrice
                return null
            } return null
        })
        this.cartTotalFunc()
    } 

    clearCart() {
        this.cartList.length = 0

    }
}

export default new Cart()