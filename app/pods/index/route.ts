import Route from '@ember/routing/route';
const COMMUNITY_CATEGORIES = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export default class Index extends Route{

  async model() {

    let response = await fetch('/api/rentals.json');
    // let parsed = await response.json();
    // return parsed;
     let {data} = await response.json();
    // this.data = data;
    return data.map((model:any) => {
      // let { attributes } = model;
      let { id, attributes } = model;
      let type;
      console.log(`attr: ${JSON.stringify(attributes)}`);
      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      // return { type, ...attributes };
      return { id, type, ...attributes };
    });

  }
}
