#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SukhpreetDay4BestwayStack } from '../lib/sukhpreet-day4-bestway-stack';
import { SukhpreetDay4ec2all } from '../lib/sukhpreet-day4-ec2all';

const app = new cdk.App();
new SukhpreetDay4BestwayStack(app, 'SukhpreetDay4BestwayStack', {

  // env: { account: '992382386705', region: 'us-east-1' },
});

new SukhpreetDay4ec2all(app, 'SukhpreetDay4ec2all', {
   env: { account: '992382386705', region: 'us-east-1' },
});
