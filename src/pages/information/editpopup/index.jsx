import React, { Component } from 'react';
import { actions, reducers, connect } from '@combin';
import '../index.css';

class EditPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            content: {
                name: '',
                age: '',
                title: '',
                _id: '',
            },
        };
    }
    // 打开弹窗
    editPopupOpen = (content, confirm) => {
        this.setState({
            open: true,
            content,
        });
    }
    // 关闭弹框
    editPopupClose = (content, confirm) => {
        this.setState({
            open: false,
            content: {
                name: '',
                age: '',
                title: '',
                _id: '',
            },
        });
        // this.confirmCallBack = confirm;
    }
    //编辑的修改==>有后端传输的数据，可以在此通过ajax直接修改数据
    addGrouping() {
        const content = this.state.content;
        const { rlistAllData } = this.props;

        let nowData = []; // 修改过的新数据
        rlistAllData.map((item, index) => {
            nowData.push((item._id == content._id)?content:rlistAllData[index]);
            // if (item._id == content._id) {
            //     nowData.push(content)
            // } else {
            //     nowData.push(data[index])
            // }
        })
        this.props.listAllData(nowData) // 把编辑好的数据替换到全部数据
        this.editPopupClose(); // 关闭弹框
    }
    // onChange 更改输入框的值
    editContent(e) {
        let names = e.target.id, newValue = e.target.value;
        let contents = Object.assign({}, this.state.content);
        contents[names] = newValue
        this.setState({
            content: contents,
        })
    }
    render() {
        if (!this.state.open) return null;
        const { content } = this.state;
        return (
            <div>
                <div className='editPopupbox_box'></div>
                <div className='editPopupbox'>
                    <h2>编辑信息</h2>
                    <ul>
                        <li>
                            <label htmlFor="name">姓名：</label>
                            <input type="text" id='name' value={content.name} onChange={this.editContent.bind(this)} />
                        </li>
                        <li>
                            <label htmlFor="age">年龄：</label>
                            <input type="text" id='age' value={content.age} onChange={this.editContent.bind(this)} />
                        </li>
                        <li>
                            <label htmlFor="title">爱好：</label>
                            <input type="text" id='title' value={content.title} onChange={this.editContent.bind(this)} />
                        </li>
                    </ul>
                    <div className='addgrouping-btn'>
                        <button onClick={this.editPopupClose}>取消</button>
                        <button onClick={this.addGrouping.bind(this)}>修改</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {rlistAllData: state.rlistAllData};
    },
    { ...actions.searchAction },
    null,
    { forwardRef: true }
)(EditPopup);