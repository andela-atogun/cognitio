angular.module('cognitio.services')
  .factory('Refs', ['$cookies', '$firebase',
    function($cookies, $firebase) {
      var rootRef = new Firebase($cookies.rootRef || 'YOUR_FIREBASE_URL');     
      
      // define every standard ref used application wide
      return {
        root: rootRef,
        users: rootRef.child('users'),
        assessment: rootRef.child('assessment'),
        submissions: rootRef.child('submissions')
      };
    }
  ]);
