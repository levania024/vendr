import { Snack } from './models/SnacksModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  // NOTE set property that will be called into a function.
  money = 0

  // NOTE property and enable model to call it and be use in the html that in the model folder.
  snacks = [
    new Snack({ name: 'Lasagna', price: 3.50, imgUrl: 'https://images.unsplash.com/photo-1709429790175-b02bb1b19207?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }),
    new Snack({ name: 'Sushi', price: 13.00, imgUrl: 'https://images.unsplash.com/photo-1607247098731-5bf6416d2e8c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }),
    new Snack({ name: 'Croissants', price: 3.50, imgUrl: 'https://images.unsplash.com/photo-1587912001191-0cd4f14fd89e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }),
    new Snack({ name: 'Fried Chicken', price: 5.50, imgUrl: 'https://images.unsplash.com/photo-1600555379765-f82335a7b1b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }),
    new Snack({ name: 'Fried Rice', price: 13.50, imgUrl: 'https://images.unsplash.com/photo-1687020836451-41977907509e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }),
    new Snack({ name: 'Beef Curry', price: 10.50, imgUrl: 'https://images.unsplash.com/photo-1719132125606-b9a713fbb496?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' })
  ]


}

export const AppState = createObservableProxy(new ObservableAppState())