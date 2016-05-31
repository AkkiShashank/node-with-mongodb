var mongodb=require('mongodb');

var mongoClient=mongodb.MongoClient;

var url='mongodb://127.0.0.1:27017/test';

mongoClient.connect(url,function(err,db){
	if(err){
		console.log("Unable to connect to the mongodb server . Error :",err);
	}else{
		console.log("Connection Established",url);

		var collection=db.collection('users');

		var cursor=collection.find({name:'Shashank'});

		cursor.sort({age: 1});

		cursor.limit(5);
		cursor.skip(0);
		cursor.each(function(err,doc){
			if(err){
				console.log(err);
			}else{
				console.log('Fetched:', doc);
			}
		});
		//db.close();
	}
})