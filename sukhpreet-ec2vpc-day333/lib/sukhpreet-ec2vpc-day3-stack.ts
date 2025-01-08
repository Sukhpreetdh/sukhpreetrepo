import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
//import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class SukhpreetEc2VpcDay3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // using default vpc
    const vpc = ec2.Vpc.fromLookup(this,'sukhpreetvpc',{
      isDefault: true
    });
    //creating ec2 instance
    const sukhpreetvm = new ec2.Instance(this,'sukhpreetvm1',{
      vpc,
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      keyPair: ec2.KeyPair.fromKeyPairName(this,'sukhpreetkey','splunk-key'),
      //       splunk-key is original key name of aws account
      // so you have to use the same
      instanceName: 'sukhpreet-linux-vm'
      // above name of my linux machine 
    });
        console.log("Printing ec2 instance ID and Public IP")
        new cdk.CfnOutput(this,'sukhpreetInstanceId',{
          description: 'this wil print instance ID',
          value: sukhpreetvm.instanceId,
        });
        //Printing public DNs
        new cdk.CfnOutput(this,'sukhpreetvmpublicdns',{
          value: sukhpreetvm.instancePublicIp
        });
  }
}
