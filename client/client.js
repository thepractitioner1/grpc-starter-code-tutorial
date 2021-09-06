const grpc = require('grpc');

var services = require('../server/protos/dummy_grpc_pb');

function main(){
    var client = new services.DummyServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )
    console.log(client)
}

main()