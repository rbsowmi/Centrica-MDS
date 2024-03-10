import EmberRouter from '@ember/routing/router';
import config from 'practicepart/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('page'),this.route('page3')
});
