import React from 'react';
import DialogAlert from '../components/DialogCustom/DialogCustom'
import '../components/DialogCustom/DialogCustom.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dialogOpt: {
        alertStatus: false,
        alertTip: '我是自定义的内容',
        cancelText: '取消2',
        confirmText: '确认2',
        cancelCallbackFn: function () {
          
        }, //取消 回调函数
        confirmCallbackFn: function () {
          
        }//确认 回调函数
      },
    };
  }
  
  alertdialog() {
    let opts = {
      alertStatus: true
    }
    //Object.assign,ES6语法。如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
    let _dialogOpt = Object.assign(this.state.dialogOpt, opts)
    this.setState({
      dialogOpt: _dialogOpt
    })
  }

  render() {
    return (
      <div className="App">
        <div onClick={() => (this.alertdialog())}>点击触发弹框</div>
        <DialogAlert dialogOpt={this.state.dialogOpt} />
      </div>
    )
  }
}




/*
function App() {
  return (
    <div className="App">
     你好，react
     <DialogCustom />
    </div>
  );
}
*/

export default App;
