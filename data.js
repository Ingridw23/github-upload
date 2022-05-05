console.log(DATAA) //console logs ("prints out") the tornado data in the json file

const myData = DATAA.features; //storing the data in the json file in const myData

const inData = {
	datasets: [{
    label:'The Longitude of Tornado Occurances from 1980 to 2009', //title of the graph
		data: myData, //data shown on the graph will be from the json file
		backgroundColor: 'rgb(131,131,131)', //colour of the data points
	}]
}
const config = {
  type: 'bubble', //the type of graph is a bubble chart
  data: inData,
  options: {
    parsing: {
			xAxisKey: "properties.YYYY_LOCAL", //the x axis shows the year of the tornado using the property from the json file
      yAxisKey: "properties.START_LON_", //the y axis shows the longitude of the tornados from the json file
      radius: "properties.START_LAT_", //the radius shows the latitude of the tornados using the property in the json file
		},
		scales: {
    yAxes: { //y axis label
      title: {
        display: true,
        text: 'Longitude'
		 }
    },
		xAxes: { //x axis label
			title:{
				display: true,
				text: 'Year'
			},
  }
}
}}
const ctx = document.getElementById("myChartt").getContext("2d");
const myChartt = new Chart (ctx, config); //creates a graph that has the data from the json file and the "characteristics/settings" from config


//second graph shows the latitude of the tornados since I couldn't figure out how to change the radius size and set it to the values from the latitude property
const myData2 = DATAA.features; //still using the same data from the json file however name of const needs to be different

const inData2 = {
	//labels: years, //the x axis shows the year
	datasets: [{
    label:'The Latitude of Tornado Occurances in Canada from 1980 to 2009', //title of the graph
		data: myData2, //data shown on the graph will be from the json file
		backgroundColor: 'rgb(131,131,131)', //colour of the data points
	}]
}
const config2 = {
  type: 'bubble', //the type of graph is a bubble chart
  data: inData2,
  options: {
    parsing: {
			xAxisKey: "properties.YYYY_LOCAL", //the x axis shows the year of the tornado using the property from the json file
      yAxisKey: "properties.START_LAT_", //the y axis shows the latitude of the tornados from the json file
		},
		scales: {
    yAxes: { //y axis label
      title: {
        display: true,
        text: 'Latitude'
		 }
    },
		xAxes: { //x axis label
			title:{
				display: true,
				text: 'Year'
			},
  }
}
}}
const ctxx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart (ctxx, config2); //creates another graph that has the data from the json file and the "characteristics/settings" from config
