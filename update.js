var mongodb=require('mongodb');

var mongoClient=mongodb.MongoClient;

var url='mongodb://127.0.0.1:27017/test';

mongoClient.connect(url,function(err,db){
	if(err){
		console.log("Unable to connect to the mongodb server . Error :",err);
	}else{
		console.log("Connection Established",url);

		var collection=db.collection('users');

		collection.update({name:'two'},{$set:{enabled:false}},function(err,numupdated){
			if(err){
				console.log(err);
			}else if (numupdated) {
				console.log('Updated Successfully %d document',numupdated);
			}else{
				console.log('No document found ');
			}

			db.close();
		});
	}
})