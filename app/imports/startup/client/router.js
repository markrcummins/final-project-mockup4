import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Landing_Page',
  action() {
    BlazeLayout.render('Landing_Page');
  },
});
FlowRouter.route('/login', {
  name: 'Login_Page',
  action() {
    BlazeLayout.render('Login_Page');
  },
});
FlowRouter.route('/home', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});
FlowRouter.route('/make-teams', {
  name: 'Make_Team_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Make_Team_Page' });
  },
});
FlowRouter.route('/tournament', {
  name: 'Tournament_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Tournament_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
