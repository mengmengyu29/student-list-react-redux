import React from "react";
import { connect } from "react-redux";

class App extends React.Component{
	constructor({students , addstudent , teachers}){
		super();
	}

	btnHandler(){
		this.props.addstudent(this.refs.idTxt.value , this.refs.nameTxt.value);
	}

	render(){
		return <div>
			<div>
				增加学生：
				id:
				<input type="text" ref="idTxt"/>
				姓名：
				<input type="text" ref="nameTxt"/>
				{ " " }
				<button onClick={()=>{this.btnHandler()}}>确定</button>
			</div>
			<hr/>
			<ul>
				{this.props.students.map((item , index)=>{
					return <li key={index}>
						{item.id} - {item.name} 
						<button onClick={()=>{this.props.delstudent(item.id)}}>×</button>
					</li>
				})}
			</ul>
			<hr/>
			<ul>
				{this.props.teachers.map((item , index)=>{
					return <li key={index}>
						{item.id} - {item.name} 
					</li>
				})}
			</ul>
		</div>
	}
};

export default connect(
	({students , teachers}) => {
		return {
			students,
			teachers
		}
	},
	(dispatch) => {
		return {
			addstudent(id , name){
				dispatch({ "type" : "ADDSTUDENT" , id , name });
			},
			delstudent(id){
				dispatch({ "type" : "DELSTUDENT" , id });
			}
		}
	}
)(App);