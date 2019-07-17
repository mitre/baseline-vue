# aws-s3-baseline  

A micro-baseline to check for insecure or public S3 buckets and bucket objects in your AWS Environment.

## Description

This [InSpec](https://github.com/chef/inspec) compliance profile verifies that you do not have any insure or open to public S3 Bucket or Bucket Objects in your AWS Environment in an automated way.

InSpec is an open-source run-time framework and rule language used to specify compliance, security, and policy requirements for testing any node in your infrastructure.

## Versioning and State of Development
This project uses the [Semantic Versioning Policy](https://semver.org/). 

### Branches
The master branch contains the latest version of the software leading up to a new release. 

Other branches contain feature-specific updates. 

### Tags
Tags indicate official releases of the project.

Please note 0.x releases are works in progress (WIP) and may change at any time.   

## Requirements

- [InSpec](http://inspec.io/) at least version 3.x
- [AWS CLI](https://aws.amazon.com/cli/) at least version 2.x

## Setting up AWS credentials for InSpec

InSpec uses the standard AWS authentication mechanisms. Typically, you will create an IAM user specifically for auditing activities.

- Create an IAM user in the AWS console, with your choice of username. Check the box marked “Programmatic Access.”
- On the Permissions screen, choose Direct Attach. Select the AWS-managed IAM Profile named “ReadOnlyAccess.” If you wish to restrict the user further, you may do so; see individual InSpec resources to identify which permissions are required.
- After generating the key, record the Access Key ID and Secret Key.

## Get started

Bundle install required gems <br>
- `bundle install`

Before running the profile with InSpec, define environment variables with your AWS region and credentials.  InSpec supports the following standard AWS variables:

- `AWS_REGION`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_SESSION_TOKEN` (required if MFA is enabled)

### Notes on MFA

In an AWS MFA enabled enviroment - you need to use derived credentials to use the CLI. Your default AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY will not satisfy the MFA Policies in the AWS environment for full use of the AWS API.

- The AWS documentation is here: https://docs.aws.amazon.com/cli/latest/reference/sts/get-session-token.html
- The AWS profile documentation is here: https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html
- A useful bash script for automating this is here: https://gist.github.com/dinvlad/d1bc0a45419abc277eb86f2d1ce70625

*Prior* to running the InSpec Profile, you will need to generate credentials:

1. aws sts get-session-token --serial-number arn:aws:iam::<$YOUR-MFA-SERIAL> --token-code <$YOUR-CURRENT-MFA-TOKEN> --profile=<$YOUR-AWS-PROFILE>

2. Then export the AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN that was generated by the above command.

## NOTE: Small Word of Warning 

In this InSpec profile implementation, the `s3-objects-no-public-access` control iterates through and verifies every  objects in each bucket in your AWS Environment, thus its runtime will depend on the number of objects in your S3 Buckets.

## Usage

InSpec makes it easy to run your tests wherever you need. More options listed here: [InSpec cli](http://inspec.io/docs/reference/cli/)

```
# Clone Inspec Profile
$ git clone https://github.com/aaronlippold/aws-s3-baseline

# Install Gems
$ bundle install

# Set required ENV variables
$ export AWS_ACCESS_KEY_ID=key-id
$ export AWS_SECRET_ACCESS_KEY=access-key
$ export AWS_SESSION_TOKEN=session-token # if MFA is enabled

# run profile locally and directly from Github
$ inspec exec /path/to/profile -t aws:// 

# run profile locally and directly from Github with cli & json output 
$ inspec exec /path/to/profile -t aws://  --reporter cli json:aws-results.json

```

### Run individual controls

In order to verify individual controls, just provide the control ids to InSpec:

```
$ inspec exec /path/to/profile --controls s3-buckets-no-public-access -t aws:// 
```

## Contributors + Kudos

- Rony Xavier [rx294](https://github.com/rx294)
- Matthew Dromazos [rx294](https://github.com/dromazmj)
- Aaron Lippold [aaronlippold](https://github.com/aaronlippold)

## License and Author


### Authors

- Author:: Rony Xaiver [rxaiver@mitre.org](mailto:rxaiver@mitre.org)
- Author:: Matthew Dromazos [dromazmj@dukes.jmu.edu](mailto:mattdromazos9@gmail.com )
- Author:: Aaron Lippold [lippold@gmail.com](mailto:lippold@gmail.com)

### NOTICE   

© 2018 The MITRE Corporation.  

Approved for Public Release; Distribution Unlimited. Case Number 18-3678.  

### NOTICE
MITRE hereby grants express written permission to use, reproduce, distribute, modify, and otherwise leverage this software to the extent permitted by the licensed terms provided in the LICENSE.md file included with this project.

### NOTICE  

This software was produced for the U. S. Government under Contract Number HHSM-500-2012-00008I, and is subject to Federal Acquisition Regulation Clause 52.227-14, Rights in Data-General.  

No other use other than that granted to the U. S. Government, or to those acting on behalf of the U. S. Government under that Clause is authorized without the express written permission of The MITRE Corporation.   

For further information, please contact The MITRE Corporation, Contracts Management Office, 7515 Colshire Drive, McLean, VA  22102-7539, (703) 983-6000.  