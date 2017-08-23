var initState = {
	"students" : [
		{"id" : 1 , "name" : "小明"} ,
		{"id" : 2 , "name" : "小红"} ,
		{"id" : 3 , "name" : "小吕"} 
	],
	"teachers" : [
		{"id" : 1 , "name" : "考拉"},
		{"id" : 2 , "name" : "大黄"},
		{"id" : 3 , "name" : "敏敏"}
	]
};


export default (state = initState, action) => {
	if(action.type == "ADDSTUDENT"){
		console.log(action)
		return {
			...state,
			"students" : [
				...state.students ,
				{"id" : action.id , "name" : action.name}
			]
		}
	}else if(action.type == "DELSTUDENT"){
		return {
			...state ,
			"students" : state.students.filter((item)=>{
				return item.id != action.id;
			})
		}
	} 
	return state;
}