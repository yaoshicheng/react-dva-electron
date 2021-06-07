import React,{Component} from 'react';
import {
  Link
}from 'react-router-dom';
import { connect } from 'react-redux'
import wifiLogo from './assets/images/u10.png'
import carPic from './assets/images/u30.png'
import simPic from './assets/images/u40.png'
import './App.css';

function mapStateToProps(state) {
  const props = { aa: state.test1.visibilityFilter};
  return props;
}

class App extends Component{
  componentDidMount() {
    console.log(this);
  }

  render() {
    const {aa} = this.props;
    return (
        <div className="App">
          {aa}
          <div className="indexHeader flex-row">
            <div className="header1">
              <img src={wifiLogo} style={{width:"30px",height:"30px"}} />
            </div>
            <div className="header2">中心服务器</div>
            <div className="header3 flex-column">
              <div className="item1">
                <span>车辆名称:</span><span style={{marginLeft:"20px"}}>常州1号车</span>
              </div>
              <div className="item1">
                <span>车牌号码:</span><span style={{marginLeft:"20px"}}>苏D00282D</span>
              </div>
            </div>
          </div>
          <div className="indexBody">
            <div className="flex-row">
              <div className="item-container">
                <Link to="/CarInfoManage" className="manageItem">
                  <img src={carPic} style={{width:"18px",height:"39px"}} />
                  <div style={{marginLeft:"10px", color:"#333"}}>
                    <div className="itemTitle">车辆信息管理</div>
                    <div>车辆信息管理及录入</div>
                  </div>
                </Link>
              </div>
              <div className="item-container">
                <Link to="/SimManage" className="manageItem">
                  <img src={simPic} style={{width:"41px",height:"32px"}} />
                  <div style={{marginLeft:"10px", color:"#333"}}>
                    <div className="itemTitle">SIM卡管理</div>
                    <div>录入SIM卡及流量查询</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default connect(mapStateToProps)(App)
