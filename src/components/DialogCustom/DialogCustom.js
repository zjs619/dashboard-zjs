import React, { Component } from 'react';

class DialogAlert extends Component {
    //构建函数
    constructor(props) {
        super(props);
        this.state = {
            alertStatus: false,
            alertTitle: '提示', //标题
            alertTip: '网络错误', //提示
            cancelText: '取消',
            confirmText: '确认',
            cancelCallbackFn: function () { }, //取消 回调函数
            confirmCallbackFn: function () { }//确认 回调函数
        }
    }

    //componentWillReceiveProps这个生命周期，当props发生变化时执行，初始化render时不执行，在这个回调函数里面，可以根据属性的变化，通过调用this.setState()来更新你的组件状态
    componentWillReceiveProps(nextProps) {

        let options = nextProps.dialogOpt || {};
        this.setState({
            //扩展运算符,同options
            ...options
        })

    }


    //取消
    cancel = () => {
        this.state.cancelCallbackFn();
        this.close()
    }
    //确认
    confirm = () => {
        this.state.confirmCallbackFn();
        this.close()
    }
    close = () => {
        this.setState({
            alertStatus: false
        })
    }

    render() {
        let opts = this.state;
        return (
            <div className="dialog-wrap" style={opts.alertStatus ? { display: 'block' } : { display: 'none' }}>
                <div className="dialog-box">
                    <h6>{opts.alertTitle}</h6>
                    <p>{opts.alertTip}</p>
                    <div>
                        <span onClick={() => this.cancel()}>{opts.cancelText}</span>
                        <span className="confirm" onClick={() => this.confirm()}>{opts.confirmText}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default DialogAlert;