/*!
 * Copyright (c) 2019-2020 Digital Bazaar, Inc. All rights reserved.
 */
const bedrock = require('bedrock');
require('bedrock-mongodb');
require('bedrock-zcap-storage-http');
require('bedrock-https-agent');
require('bedrock-security-context');

require('bedrock-test');
bedrock.start();
