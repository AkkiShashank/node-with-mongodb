var mongodb=require('mongodb');

var mongodbClient=mongodb.MongoClient;

var url='mongodb://127.0.0.1/test';

mongodbClient.connect(url,function(err,db){
	if(err){
		console.log("Unable to connect to the mongodb server . Error :",err);
	}else{
		console.log("Connection Established",url);

		var collection=db.collection('users');

		collection.deleteOne({name:'one'},function(err,deleted){
			if(err){
				console.log("Error:",err);
			}else if(deleted){
				console.log('Updated Successfully %d document',deleted.length);
			}else{
				console.log('No document found ');
			}

			db.close();
		})
	}
})