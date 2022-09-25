import mongodb from 'mongodb';
const uri = 'mongodb+srv://prash:28082002@prashu.puwtpp1.mongodb.net/?retryWrites=true&w=majority';
//create client
const client = new mongodb.MongoClient(uri);

function info() {
    const db = client.db('shortvideo');
    const collection = db.collection('videoobj');
    const data = collection.find({});
    //data.forEach(doc => console.log(doc));
    return data.toArray();
}
export default info;