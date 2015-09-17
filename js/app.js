(function(){
	var app = angular.module('menuMaker', []);
	
	app.controller('menuController', function(){
		this.sections;// =multiSections;
		this.newSection ={};
		
		this.addSection =function(){
			this.sections.push(this.newSection);
			this.sectionForm.$setUntouched();
			this.newSection ={};
		};
	});	
	
	app.controller('sectionController', function(){
		this.newItem ={};
		
		this.addNewItem =function(section){
			if(!section.items){
				section.items =[];
			}
			section.items.push(this.newItem);
			this.dishForm.$setUntouched();
			this.newItem ={};
		};
	});
	
	var section =[
		{name: "Fish Taco", price: 1},
		{name: "Salmon & Rice", price: 12.50},
		{name: "Fish Sticks", price: 10.01},
		{name: "Fish Balls", price: 1.10},
	];
	
	var multiSections =[
		{sectionName: "Sea Food", description:"This is for seafood. This food comes with one side, choice of rice or fries.", items: [{name: "Fish Taco", price: 1},{name: "Salmon & Rice", price: 12.50},{name: "Fish Sticks", price: 10.01},{name: "Fish Balls", price: 1.10}]},
		{sectionName: "Burgers & Sandwhiches", description:"Pretty self explanitory. These come with one side, choice of fries, soup or salad.", items: [{name: "BLT", price: 12.25},{name: "Cheese Burger", price: 14.50},{name: "BBQ Bacon Burger", price: 15.25},{name: "Chicken Club", price: 13.30}]}
	];
})();