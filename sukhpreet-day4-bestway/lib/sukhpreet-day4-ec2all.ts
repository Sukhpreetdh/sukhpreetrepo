import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SukhpreetDay4ec2all extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // using default vpc
    const vpc = ec2.Vpc.fromLookup(this,'sukhpreetvpc',{
      isDefault: true
    });
       
     // creating security group
     const securityGroup = new ec2.SecurityGroup(this, 'sukhpreetSecurityGroup', {
      vpc,
      description: 'Allow ssh, http, and https access',
      allowAllOutbound: true
    });

    // allow ssh access from anywhere
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'allow ssh access from anywhere');

    // allow http access from anywhere
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'allow http access from anywhere');

    // allow https access from anywhere
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'allow https access from anywhere');
    
     // allow https access from anywhere
     securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(21), 'allow https access from anywhere');
    
    // creating ec2 instance
    const sukhpreetvm = new ec2.Instance(this,'sukhpreetvm1',{
      vpc,
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      keyPair: ec2.KeyPair.fromKeyPairName(this,'sukhpreetkey','splunk-key'),
      instanceName: 'sukhpreet-linux-vm',
      securityGroup: securityGroup
    });

 }
}
