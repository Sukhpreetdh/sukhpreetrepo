import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SukhpreetDay4BestwayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //define an array with 2 buckets
    const bucketNames = ['sukhpreet-day4-bestway-bucket1', 'sukhpreet-day4-bestway-bucket2'];
    //using for loop to create 2 buckets
    for (let i = 0; i < bucketNames.length; i++) {
      const bucket = new cdk.aws_s3.Bucket(this, bucketNames[i], {
        versioned: true,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        autoDeleteObjects: true,
        bucketName: bucketNames[i],
      });
    }
    
    //creating s3 
    //const bucket = new cdk.aws_s3.Bucket(this, 'MyFirstBucket', {
    //  versioned: true,
    //  removalPolicy: cdk.RemovalPolicy.DESTROY,
    //  autoDeleteObjects: true,
    //  bucketName: 'sukhpreet-day4-bestway-bucket',
    //});
  }
}
