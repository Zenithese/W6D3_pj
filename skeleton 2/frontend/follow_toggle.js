const APIUtil = require('./api_util');

class FollowToggle {

  contructor(el, options) {
    debugger
    this.$el = $(el);
    this.userId = $el.data('userId') || options.userId;
    this.followState = $el.data('initial-follow-state' || options.followState);
    this.render();
  }
  
  render(){
    debugger
  switch (this.followState) {
    case 'followed':
      this.$el.prop('disabled', false);
      this.$el.text('Unfollow!');
      break;
    case 'unfollowed':
      this.$el.prop('disabled', false);
      this.$el.text('Follow!');
      break;
    case 'following':
      this.$el.prop('disabled', true);
      this.$el.text('Following...');
      break;
    case 'unfollowing':
      this.$el.prop('disabled', true);
      this.$el.text('Unfollowing...');
      break;
  }
}


// followToggle() {
  
// }

  handleClick(event){
    let followToggle = this;

    event.preventDefault();

    if(this.followState === 'followed'){
      this.followState = 'unfollowing';
      this.render();
      debugger
      APIUtil.changeFollowStatus(this.userId).then(()=>{
        debugger
        followToggle.followState = 'unfollowing';
        followToggle.render();
      });
     
    } else if (this.followState === 'unfollowed') {
      this.followState = 'following';
      this.render();
      debugger
      APIUtil.changeFollowStatus(this.userId).then(() =>{
        debugger
      
        followToggle.followState = 'followed';
        followToggle.render();
      });
      
    }
    

    



  }

}


module.exports = FollowToggle;


