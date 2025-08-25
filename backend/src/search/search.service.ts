import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class SearchService {
  private client = new Client({ node: process.env.ES_NODE || 'http://localhost:9200' });

  async suggest(q: string) {
    const result = await this.client.search({
      index: 'listings',
      size: 5,
      query: {
        bool: {
          should: [
            { match: { name: { query: q, fuzziness: 'AUTO' } } },
            { match: { description: { query: q, fuzziness: 'AUTO' } } },
          ],
        },
      },
    });
    return result.hits.hits.map((h) => h._source);
  }
}
