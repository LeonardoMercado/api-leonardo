const AWS = require('aws-sdk');

const getTask = async(event) =>{
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const result = await dynamodb.scan({
        TableName: 'TaskTable',
    }).promise();

    const tasks = result.Items;

    return {
        statusCode: 200,
        body: tasks,
    };
};

module.export = {
    getTask,
}