import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service store;

  @tracked post = null;
  @tracked serialized = null;
  @tracked manualValue = null;

  constructor() {
    super(...arguments);
    this.reset();
  }

  @action
  reset() {
    this.post = this.store.createRecord('post');
    this.serialize();
  }

  @action
  serialize() {
    this.serialized = this.post.serialize();
  }

  @action
  setManualValue() {
    this.post.set('likes', this.manualValue);
  }
}
