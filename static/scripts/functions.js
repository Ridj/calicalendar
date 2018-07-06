(function() {
  new Vue({
    el: '#header_app',
    data: {
      logged: false,
      overviewp: false,
      public_ev: false,
    },
    methods: {
      login: function() {
        this.logged = !this.logged;
        document.getElementsByTagName('body')[0].classList.toggle('logged');
        let log = document.getElementById('log_button');
        let todo = document.getElementById('todo').children[0];
        if (log.innerText === 'Login') {
          log.innerText = 'Logout';
          if (!this.public_ev) todo.innerText = 'My Calendar';
        }
        else {
          log.innerText = 'Login';
          if (!this.public_ev) todo.innerText = 'Calendar';
        }
      },
      my_events: function() {
      },
      overview: function() {
        let sections = document.getElementsByTagName('main')[0].getElementsByTagName('section');
        let button = document.getElementById('header_app').getElementsByTagName('button')[0];
          button.innerText = this.overviewp ? 'Overview' :'Get Back';
          for(let i = 0; i - sections.length; i++) {
            if (sections[i].id !== 'todo' ) sections[i].style.display = this.overviewp ? '' : 'none';
            else sections[i].innerHTML = this.overviewp ? '<span>Calendar</span>' : '<span>OVERVIEW</span>';
          }
        this.overviewp = !this.overviewp;
      },
      pub_events: function(opt=false) {
        this.public_ev = !this.public_ev;
        let button = document.getElementById('header_app').getElementsByTagName('button')[1];
          button.innerText = this.public_ev ? 'Calendar' : 'Public Events';
        let todo = document.getElementById('todo').children[0];
          todo.innerText = this.public_ev ? 'Public Events' : this.logged ? 'My' +
              ' Calendar' : 'Calendar';
      }
    }
  });
})();