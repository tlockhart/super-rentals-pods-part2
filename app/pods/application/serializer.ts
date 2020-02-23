import DS from 'ember-data';
import JSONAPISerializer from '@ember-data/serializer/json-api';
import Application from './route';
import Rental from '../rental/model';

// export default class ApplicationSerializer extends JSONAPISerializer{
// }

// // DO NOT DELETE: this is how TypeScript knows how to look up your serializers.
// declare module 'ember-data/types/registries/serializer' {
//   export default interface SerializerRegistry {
//     'application': Application;
//   }
// }
export default class ApplicationSerializer extends JSONAPISerializer {
}
