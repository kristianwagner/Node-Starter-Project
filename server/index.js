// Create express instance
var expressHandlebars = require('express-handlebars');
var app = require('express')();

// Start server
var port = process.env.PORT || 3000;

// Setup expressHandlebars
var hbs = expressHandlebars.create({
  defaultLayout: 'main',
  layoutsDir: "views",
  extname: ".hbs"
});

// Set view engine
app.engine("hbs", hbs.engine);
app.set('view engine', "hbs");
app.set('views', "views");


// Create basic routes
app.get("/", function(req, res, next) {
	res.render("home");
});

// Create basic routes
app.get("/user/", function(req, res, next) {
	res.render("user");
});




var testObject = {
	"1" : {
		name: "chair",
		price: 12332,
		category: "furniture",
		subCategory: "chairs",
	},
	"2" : {
		name: "sofa",
		price: 3102,
		category: "furniture",
		subCategory: "sofas"
	},
	"3" : {
		name: "table",
		price: 5019,
		category: "furniture",
		subCategory: "tables"
	}
};



// Create basic routes
app.get("/product/:productId", function(req, res, next) {

	var productId = req.params["productId"];
	var productData = testObject[productId];
	var productList = [];

	for(pi in testObject) {
		var currentProduct = testObject[pi];
		productList.push({
			url: "/product/" + pi,
			name: currentProduct.name
		});
	};

	res.render("product",{
		productData: productData,
		productList: productList
	});
});


app.listen(port, function () {
	console.log('Server running on port ' + port);
});
