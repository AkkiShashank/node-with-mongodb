var mongodb=require('mongodb');

var mongoClient=mongodb.MongoClient;

var url='mongodb://127.0.0.1:27017/test';

mongoClient.connect(url,function(err,db){
	if(err){
		console.log("Unable to connect to the mongodb server . Error :",err);
	}else{
		console.log("Connection Established",url);

		var collection=db.collection('users');
		
		var user1={name:'Shashank' ,age:20 ,roles:['admin','user1']};
		var user2={name:'Akki',age:20,roles:['admin']};
		var user3={name:'two',age:29,roles:['one','two']};

		collection.insert([user1,user2,user3],function(err,result){
			if(err){
				console.log("error:",err);
			} else{
				console.log("Success");
			}
			db.close();
		});

	}
});