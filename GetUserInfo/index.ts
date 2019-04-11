import { AzureFunction, Context, HttpRequest } from "@azure/functions"

interface User {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    username: string;
    friends: number[];
}

const users: User[] = [{
    id: 1,
    name: 'Joe Farmer',
    address: '101 Lilly Farms Lane',
    city: 'Chapin',
    state: 'SC',
    zip: '29036',
    username: 'JFarmer',
    friends: [2,3]
},
{
    id: 2,
    name: 'Mary Farmer',
    address: '101 Lilly Farms Lane',
    city: 'Chapin',
    state: 'SC',
    zip: '29036',
    username: 'MFarmer',
    friends: [1,3]
},
{
    id: 3,
    name: 'Sammy Lawyer',
    address: '7 Law Court',
    city: 'Lexington',
    state: 'SC',
    zip: '29036',
    username: 'SLawyer',
    friends: [1,2]
}]

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const userId: number = Number.parseInt(context.req.query.userId) - 1;

    if (userId > users.length) {
        context.res = {
            status: 400,
            body: "Invalid user ID"
        };
    } else {
        context.res = {
            status: 200,
            body: users[userId]
        }
    }
};


export default httpTrigger;
