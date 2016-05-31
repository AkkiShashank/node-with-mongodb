var mongodb=require('mongodb');

var mongoClient=mongodb.MongoClient;

var url='mongodb://127.0.0.1:27017/test';

mongoClient.connect(url,function(err,db){
	if(err){
		console.log("Unable to connect to the mongodb server . Error :",err);
	}else{
		console.log("Connection Established",url);

		var collection=db.collection('users');

		collection.find({}).toArray(function(err,result){
			if(err){
				console.log("Error:",err);
			}else if(result.length){
				console.log('Found:',result);
			}else{
				console.log('No document(s) found with defined "find" criteria!');
			}
			db.close();
		})
	}
})