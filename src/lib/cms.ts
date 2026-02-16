import { GraphQLClient } from 'graphql-request';

const GRAPH_API = `https://cg.optimizely.com/content/v2?auth=${process.env.OPTIMIZELY_CMS_SINGLE_KEY}`;

export const graphClient = new GraphQLClient(GRAPH_API);

export default graphClient;
