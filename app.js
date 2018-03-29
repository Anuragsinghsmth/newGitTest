var express=require("express");
var app=express();
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
var campgrounds=[	{name: "simon creep",image: "https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg"},
						{name: "Rosevolt",image: "https://farm9.staticflickr.com/8457/7930235502_df747573ca.jpg"},
						{name: "Edward",image: "https://farm5.staticflickr.com/4101/4961777592_322fea6826.jpg"},
						{name: "Bella Swan",image: "https://farm4.staticflickr.com/3742/10759552364_a796a5560a.jpg"},
						{name: "Rosevolt",image: "https://farm9.staticflickr.com/8457/7930235502_df747573ca.jpg"},
						{name: "Edward",image: "https://farm5.staticflickr.com/4101/4961777592_322fea6826.jpg"},
						{name: "Bella Swan",image: "https://farm4.staticflickr.com/3742/10759552364_a796a5560a.jpg"},
						{name: "Bella Swan",image: "https://farm4.staticflickr.com/3742/10759552364_a796a5560a.jpg"}
					];
app.get("/",function(req,res){
		res.render("landing")
});
app.get("/campgrounds",function(req,res){
	
		res.render("campgrounds",{campgrounds:campgrounds});
});
app.post("/campgrounds",function(req, res){
	var name=req.body.name;
	var image=req.body.image;
	var newcamp={name:name, image:image};
	campgrounds.push(newcamp);
	res.redirect("/campgrounds");
});
app.get("/campgrounds/new",function(req, res){
	res.render("new.ejs");

});
app.listen(8000,function(){
	console.log("connected");
});