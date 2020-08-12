Page({
  data: {
    name: 'Baby',
    age: 18,
    students: [
      {id: 110, name: 'a', age: 11},
      {id: 111, name: 'b', age: 12},
      {id: 112, name: 'c', age: 13},
      {id: 113, name: 'd', age: 14},
    ],
    counter: 0
  },
  handleBtnClickAdd() {
    //1.错误做法：counter发生改变但是界面无改变
    // this.data.counter++
    // console.log(this.data.counter)

    //2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnClickMinus() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})