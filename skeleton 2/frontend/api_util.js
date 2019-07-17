const APIUtil = {
  followUser: id => {
    APIUtil.changeFollowStatus(id, 'POST');
  },

  unfollowUser: id => {
    APIUtil.changeFollowStatus(id, 'DELETE');
  },

  changeFollowStatus: (id, method) => (
    $.ajax({
      url: `/user/${id}/follow`,
      dataType: 'json',
      method: method,
    })
  ),
}

module.exports = APIUtil;