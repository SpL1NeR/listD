import React from 'react';

export class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      buyItems: ['milk', 'bread', 'absent'],
      have: true
    }
    this.state.buyItems.sort();
  }

  addItem(e){

    e.preventDefault();
    const {buyItems} = this.state;
    const newItem = this.newItem.value;
    const isOnTheList = buyItems.includes(newItem);

    if(isOnTheList){

      this.setState({
        message: 'This item is already on the list.'
      })

    } else {

      newItem !== '' && this.setState({
        buyItems: [...this.state.buyItems.sort(), newItem],
        message: ''
      })

    }

    this.addForm.reset();
  }

  removeItem(item){
    const newBuyItems = this.state.buyItems.filter(buyItem => {
      return buyItem != item;
    })
   
    

    this.setState({
      buyItems: [...newBuyItems]
      
    })

    

    if(newBuyItems.length === 0){
      this.setState({
        message: 'No items on your list, add some'
      })
    }
  }

  haveItem(item){
    const newBuyItems = this.state.buyItems.filter(buyItem => {
      return buyItem = item;
    })
   
    this.setState({
      buyItems: [...newBuyItems],
      have:false
    })
  }
  

  clearAll(){
    this.setState({
      buyItems: [],
      message: 'No items on your list, add some'
    })
  }

  render () {
    const {buyItems, message} = this.state;
    return (
      <div>
        <header>
          
          <h1>Shopping list</h1>

        <form ref={input => this.addForm = input} action="" className="form-inline" onSubmit={(e) => {this.addItem(e)}}>
          <div className="form-group">
            <label htmlFor="newItemInput" className="sr-only">Add new item</label>
          <input type="text" className="form-control" id="newItemInput" ref={input => this.newItem = input}/>
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
        </header>

        <div className="content">
          {
            (message !== '' || buyItems.length === 0) && <p className="message text-danger">{message}</p>
          }
          {
            buyItems.length > 0 &&
            <table className="table">
            <caption>Shopping list</caption>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
              <th className="text-center">Action</th>
              <th className="text-center">Buy</th>
              </tr>
            </thead>
            <tbody>
              {
                buyItems.map((item, index) => {
                  return(
                    <tr key={item}>
                      <td key={index} scope="row">{index+1}</td>
                      <td>{item}</td>
                      <td className="text-center">
                        <button onClick={(e) => this.removeItem(item)} type="button" className="btn btn-default btn-sm">remove</button>
                        
        </td>
        <td className="text-center">
        <input type="checkbox" name="box" checked={this.have} />
        </td>
                    </tr>
                  )
                })
              }
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">&nbsp;</td>
                <td className="text-center">
                  <button onClick={(e) => this.clearAll()} className="btn btn-default btn-sm">Clear list</button>
                </td>
              </tr>
            </tfoot>
            
          </table>
          }
        </div>
      </div>
    )
  }

}
