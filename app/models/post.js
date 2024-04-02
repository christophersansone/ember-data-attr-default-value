import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('number', { defaultValue: () => Math.round(Math.random() * 10000) })
  likes;
}
