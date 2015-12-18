Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/about', function () {
  this.render('About');
});

Router.route('/inbox', function () {
  if (!Meteor.userId())
    this.render('About')
  else {
    this.render('Inbox');
  };
});

Router.route('/inbox/tags', function () {
  if (!Meteor.userId())
    this.render('About')
  else {
    this.render('TagsFlow',{tag: this.params._tag});
  };
});
