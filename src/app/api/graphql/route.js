import { createSchema, createYoga } from 'graphql-yoga';
import fs from 'fs';
import path from 'path';

const { handleRequest } = createYoga({
    schema: createSchema({
        typeDefs: `
        type Query {
            getDataByKey(key: Int!): [ColumnData]
        }

        type ColumnData {
            columnNumber: String
            columnName: String
            data: [String]
        }
        `,
        resolvers: {
            Query: {
                getDataByKey: async (_, { key }) => {
                    const filePath = path.join(process.cwd(), 'public', 'liber777.json');
                    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                    const results = [];
                
                    for (const columnNumber in jsonData) {
                        if (jsonData[columnNumber].hasOwnProperty(key.toString())) {
                            const item = jsonData[columnNumber][key.toString()];
                            const data = item !== undefined 
                                ? (Array.isArray(item) ? item : [item.toString()])
                                : [];
                
                            results.push({ 
                                columnNumber, 
                                columnName: jsonData[columnNumber]["columnName"], 
                                data
                            });
                        }
                    }
                
                    return results;
                },
                
            },

        },
    }),
    graphqlEndpoint: '/api/graphql',

    fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST };
