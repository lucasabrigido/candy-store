export default {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    stage: process.env.NEXT_STAGE,
    dynamoEndpoint: process.env.DYNAMO_ENDPOINT,
    region: process.env.REGION,
    accessKey: process.env.AWS_ACCESS_KEY_ID,
    secretKey: process.env.AWS_SECRET_ACCESS_KEY,
    authConfig: {
        secret: process.env.USER_SECRET,
        expiresIn: parseInt(process.env.USER_EXPIRES),
    },
}


export const candys = [
    {
        type: 'candy1',
        chance: 25,
        speed: 10,
        points: 1,
    },
    {
        type: 'candy2',
        chance: 25,
        speed: 7,
        points: 1,
    },
    {
        type: 'candy3',
        chance: 25,
        speed: 5,
        points: 1,
    },
        {
        type: 'raw',
        chance: 1,
        speed: 10,
        points: 1000,
    },
    {
        type: 'diego',
        chance: 5,
        speed: 10,
        points: 5,
    },
    {
        type: 'eugein',
        chance: 4,
        speed: 7,
        points: -50,
    },
    {
        type: 'jm',
        chance: 0.5,
        speed: 10,
        points: -100,
    },
    {
        type: 'nize',
        chance: 0.5,
        speed: 10,
        points: -1000
    },
    {
        type: 'felipe',
        chance: 4,
        speed: 7,
        points: 25
    },
]