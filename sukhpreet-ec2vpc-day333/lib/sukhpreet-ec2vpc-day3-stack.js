"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SukhpreetEc2VpcDay3Stack = void 0;
const cdk = require("aws-cdk-lib");
// import * as sqs from 'aws-cdk-lib/aws-sqs';
const ec2 = require("aws-cdk-lib/aws-ec2");
//import * as ec2 from 'aws-cdk-lib/aws-ec2';
class SukhpreetEc2VpcDay3Stack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // using default vpc
        const vpc = ec2.Vpc.fromLookup(this, 'sukhpreetvpc', {
            isDefault: true
        });
        //creating ec2 instance
        const sukhpreetvm = new ec2.Instance(this, 'sukhpreetvm1', {
            vpc,
            instanceType: new ec2.InstanceType('t2.micro'),
            machineImage: new ec2.AmazonLinuxImage(),
            keyPair: ec2.KeyPair.fromKeyPairName(this, 'sukhpreetkey', 'splunk-key'),
            //       splunk-key is original key name of aws account
            // so you have to use the same
            instanceName: 'sukhpreet-linux-vm'
            // above name of my linux machine 
        });
    }
}
exports.SukhpreetEc2VpcDay3Stack = SukhpreetEc2VpcDay3Stack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VraHByZWV0LWVjMnZwYy1kYXkzLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3VraHByZWV0LWVjMnZwYy1kYXkzLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUVuQyw4Q0FBOEM7QUFDOUMsMkNBQTJDO0FBQzNDLDZDQUE2QztBQUU3QyxNQUFhLHdCQUF5QixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3JELFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsb0JBQW9CO1FBQ3BCLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBQyxjQUFjLEVBQUM7WUFDakQsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsdUJBQXVCO1FBQ3ZCLE1BQU0sV0FBVyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUMsY0FBYyxFQUFDO1lBQ3ZELEdBQUc7WUFDSCxZQUFZLEVBQUUsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztZQUM5QyxZQUFZLEVBQUUsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLEVBQUU7WUFDeEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsWUFBWSxDQUFDO1lBQ3RFLHVEQUF1RDtZQUN2RCw4QkFBOEI7WUFDOUIsWUFBWSxFQUFFLG9CQUFvQjtZQUNsQyxrQ0FBa0M7U0FFbkMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztDQUNGO0FBdEJELDREQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbi8vIGltcG9ydCAqIGFzIHNxcyBmcm9tICdhd3MtY2RrLWxpYi9hd3Mtc3FzJztcbmltcG9ydCAqIGFzIGVjMiBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZWMyJztcbi8vaW1wb3J0ICogYXMgZWMyIGZyb20gJ2F3cy1jZGstbGliL2F3cy1lYzInO1xuXG5leHBvcnQgY2xhc3MgU3VraHByZWV0RWMyVnBjRGF5M1N0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgLy8gdXNpbmcgZGVmYXVsdCB2cGNcbiAgICBjb25zdCB2cGMgPSBlYzIuVnBjLmZyb21Mb29rdXAodGhpcywnc3VraHByZWV0dnBjJyx7XG4gICAgICBpc0RlZmF1bHQ6IHRydWVcbiAgICB9KTtcbiAgICAvL2NyZWF0aW5nIGVjMiBpbnN0YW5jZVxuICAgIGNvbnN0IHN1a2hwcmVldHZtID0gbmV3IGVjMi5JbnN0YW5jZSh0aGlzLCdzdWtocHJlZXR2bTEnLHtcbiAgICAgIHZwYyxcbiAgICAgIGluc3RhbmNlVHlwZTogbmV3IGVjMi5JbnN0YW5jZVR5cGUoJ3QyLm1pY3JvJyksXG4gICAgICBtYWNoaW5lSW1hZ2U6IG5ldyBlYzIuQW1hem9uTGludXhJbWFnZSgpLFxuICAgICAga2V5UGFpcjogZWMyLktleVBhaXIuZnJvbUtleVBhaXJOYW1lKHRoaXMsJ3N1a2hwcmVldGtleScsJ3NwbHVuay1rZXknKSxcbiAgICAgIC8vICAgICAgIHNwbHVuay1rZXkgaXMgb3JpZ2luYWwga2V5IG5hbWUgb2YgYXdzIGFjY291bnRcbiAgICAgIC8vIHNvIHlvdSBoYXZlIHRvIHVzZSB0aGUgc2FtZVxuICAgICAgaW5zdGFuY2VOYW1lOiAnc3VraHByZWV0LWxpbnV4LXZtJ1xuICAgICAgLy8gYWJvdmUgbmFtZSBvZiBteSBsaW51eCBtYWNoaW5lIFxuXG4gICAgfSk7XG5cbiAgfVxufVxuIl19