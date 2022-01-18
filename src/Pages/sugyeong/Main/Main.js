import React from 'react';
import Comment from './Comment';
import './Main.scss';

class MainSg extends React.Component {
  constructor() {
    super();
    this.state = {
      commentInput: '',
      comments: [],
    };
  }

  updateCommentInput = e => {
    this.setState({
      commentInput: e.target.value,
    });
  };

  addComment = e => {
    e.preventDefault();
    this.setState({
      comments: [...this.state.comments, this.state.commentInput],
      commentInput: '',
    });
  };

  render() {
    const { commentInput, comments } = this.state;
    const isActivePostButton = commentInput.length > 0;
    return (
      <>
        <nav id="nav__outer">
          <div className="nav__logo">
            <img
              src="images/sugyeong/instagram-logo.png"
              alt="Instagram logo"
              className="nav__logo__img"
            />
            <p className="nav__logo__font">Westagram</p>
          </div>
          <form className="nav__search">
            <i className="fas fa-search" />
            <input type="text" placeholder="Search" className="searchbar" />
          </form>
          <div className="nav__status">
            <a href="#" className="status__a">
              <img
                src="images/sugyeong/explore.png"
                alt="Explore Feed"
                className="explore__icon"
              />
            </a>
            <a href="#" className="status__a">
              <img
                src="images/sugyeong/heart.png"
                alt="Activity Feed"
                className="activity__icon"
              />
            </a>
            <a href="#" className="status__a">
              <img
                src="images/sugyeong/profile.png"
                alt="My account's icon"
                className="myaccount__icon"
              />
            </a>
          </div>
        </nav>
        <main class="main__page">
          <div className="main__feeds">
            <article className="article__post">
              <div className="article__top">
                <div className="article__top__account">
                  <img
                    src="images/sugyeong/clouds.jpg"
                    alt="account's profile photo"
                    className="profile__pic"
                  />
                  <p className="profile__name">irreplaceavle</p>
                </div>
                <div className="article__top__option">
                  <i className="fas fa-ellipsis-h" />
                </div>
              </div>
              <div className="article__photo">
                <img
                  src="images/sugyeong/still-life.jpg"
                  alt="irreplaceavle's feed photo"
                  className="article__photo__inner"
                />
              </div>
              <div className="article__bottom">
                <div className="article__icons">
                  <div className="article__status__icons">
                    <img
                      src="images/sugyeong/red-heart.png"
                      alt="red heart icon"
                      className="article__like"
                    />
                    <img
                      src="images/sugyeong/chat.png"
                      alt="chat icon"
                      className="article__chat"
                    />
                    <img
                      src="images/sugyeong/upload.png"
                      alt="share icon"
                      className="article__share"
                    />
                  </div>
                  <div className="article__status__bookmark">
                    <img
                      src="images/sugyeong/bookmark.png"
                      alt="bookmark icon"
                      className="article__bookmark"
                    />
                  </div>
                </div>
                <div className="article__wholikes">
                  <img
                    src="images/sugyeong/unsplash.jpg"
                    alt="Unsplash's profile photo"
                    className="following__profile__pic"
                  />
                  <p className="following__wholikes">
                    Liked by <strong class="strong">unsplash</strong> and
                    <strong class="strong"> 23 others</strong>
                  </p>
                </div>
                <div className="article__text">
                  <div className="text__post">
                    <p className="post__uploader__name">irreplaceavle</p>
                    <p className="text__post__inner">
                      4:26pm on the Whiteladies Rd...
                      <span>
                        <button className="post__viewmore">more</button>
                      </span>
                    </p>
                  </div>
                  <ul className="text__commentlists">
                    {comments.map(comment => {
                      return <Comment commentText={comment} />;
                    })}
                  </ul>
                </div>
                <div className="article__time">
                  <p className="article__posttime">51 MINUTES AGO</p>
                </div>
                <div className="article__addcomments">
                  <form
                    action="#"
                    className="addcomments__wrapper"
                    onSubmit={this.submitComment}
                  >
                    <button className="comment__emojis">
                      <img
                        src="images/sugyeong/smile.png"
                        alt="smile emoji"
                        className="smile__emoji"
                      />
                    </button>
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="comment__input"
                      onChange={this.updateCommentInput}
                      value={commentInput}
                    />
                    <button
                      className="comment__post__btn"
                      disabled={!isActivePostButton}
                      onClick={this.addComment}
                      type="button"
                    >
                      Post
                    </button>
                  </form>
                </div>
              </div>
            </article>
          </div>
          <div className="sidebar">
            <div className="sidebar__profile">
              <img
                src="images/sugyeong/clouds.jpg"
                alt="account's profile photo"
                className="profile__photo"
              />
              <div className="sidebar__name">
                <div className="sidebar__nickname">irreplaceavle</div>
                <div className="sidebar__account">Sue</div>
              </div>
            </div>
            <div className="sidebar__stories">
              <div className="stories__top">
                <div className="stories__top__left">Stories</div>
                <div className="stories__top__right">See All</div>
              </div>
              <div className="stories__user">
                <div className="stories__notification">
                  <img
                    src="images/sugyeong/tea-set.jpg"
                    alt="tea pots and cups"
                    className="user__img"
                  />
                </div>
                <div className="stories__user__status">
                  <div className="user__status">irreplaceavle</div>
                  <div className="user__time user__status">2 hours ago</div>
                </div>
              </div>
              <div className="stories__user">
                <div className="stories__notification">
                  <img
                    src="images/sugyeong/flights.jpg"
                    alt="sky from a flights"
                    className="user__img"
                  />
                </div>
                <div className="stories__user__status">
                  <div className="user__status">irreplaceavle</div>
                  <div className="user__time user__status">48 minutes ago</div>
                </div>
              </div>
              <div className="stories__user">
                <div className="stories__notification">
                  <img
                    src="images/sugyeong/flowers.jpg"
                    alt="a vase of flowers on the table"
                    className="user__img"
                  />
                </div>
                <div className="stories__user__status">
                  <div className="user__status">irreplaceavle</div>
                  <div className="user__time user__status">20 minutes ago</div>
                </div>
              </div>
              <div className="stories__user">
                <div className="stories__notification">
                  <img
                    src="images/sugyeong/edinburgh-cstl.jpg"
                    alt="view from an Edinburgh castle's entrance"
                    className="user__img"
                  />
                </div>
                <div className="stories__user__status">
                  <div className="user__status">irreplaceavle</div>
                  <div className="user__time user__status">4 hours ago</div>
                </div>
              </div>
            </div>
            <div className="sidebar__suggestions">
              <div className="sidebar__suggestions__top">
                <div className="suggestions__top__left">
                  Suggestions For You
                </div>
                <div className="suggestions__top__right">See All</div>
              </div>
              <div className="sidebar__suggestions__list">
                <img
                  src="images/sugyeong/apple-store-garosugil.jpg"
                  alt="Apple store garosugil, Seoul"
                  className="suggestions__profile"
                />
                <div className="suggestion__user__status">
                  <div className="user__status">irreplaceavle</div>
                  <div className="user__status user__time">
                    elvaecalperri님 외 2명이 ...
                  </div>
                </div>
              </div>
              <div className="sidebar__suggestions__list">
                <img
                  src="images/sugyeong/mijas.jpg"
                  alt="a house in Mijas, Malaga, Andalucía, Spain"
                  className="suggestions__profile"
                />
                <div className="suggestion__user__status">
                  <div className="user__status">irreplaceavle</div>
                  <div className="user__status user__time">
                    elvaecalperri님 외 2명이 ...
                  </div>
                </div>
              </div>
              <div className="sidebar__suggestions__list">
                <img
                  src="images/sugyeong/College-green.jpg"
                  alt="College Green in Bristol"
                  className="suggestions__profile"
                />
                <div className="suggestion__user__status">
                  <div className="user__status">irreplaceavle</div>
                  <div className="user__status user__time">
                    elvaecalperri님 외 2명이 ...
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar__instainfo">
              <div className="instainfo__links">
                <ul className="instainfo__links__wrapper">
                  <li className="links__names">
                    <a href="#" className="links__name" target="_blank">
                      About
                    </a>
                    ·
                  </li>
                  <li className="links__names">
                    <a href="#" className="links__name" target="_blank">
                      Help
                    </a>
                    ·
                  </li>
                  <li className="links__names">
                    <a href="#" className="links__name" target="_blank">
                      Press
                    </a>
                    ·
                  </li>
                  <li className="links__names">
                    <a href="#" className="links__name" target="_blank">
                      API
                    </a>
                    ·
                  </li>
                  <li className="links__names">
                    <a href="#" className="links__name" target="_blank">
                      Jobs
                    </a>
                    ·
                  </li>
                  <li className="links__names">
                    <a href="#" className="links__name" target="_blank">
                      Privacy
                    </a>
                    ·
                  </li>
                  <li className="links__names">
                    <a href="#" className="links__name" target="_blank">
                      Terms
                    </a>
                    ·
                  </li>
                  <li className="links__names">
                    <a href="#" className="links__name" target="_blank">
                      Locations
                    </a>
                    ·
                  </li>
                  <li className="links__names">
                    <a href="#" className="links__name" target="_blank">
                      Top Accounts
                    </a>
                    ·
                  </li>
                  <li className="links__names">
                    <a href="#" className="links__name" target="_blank">
                      Hashtags
                    </a>
                    ·
                  </li>
                  <li className="links__names">
                    <a href="#" className="links__name" target="_blank">
                      Language
                    </a>
                  </li>
                </ul>
              </div>
              <div className="instainfo__copyrights">
                © 2021 INSTAGRAM FROM FACEBOOK
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default MainSg;

// state -> 사용자가 입력한 Input 값을 담는다.
// input 요소에 keyUp 이벤트를 통해 사용자가 입력한 input 값을 관리.
// Input 값이 0 이상일 때, '게시' 버튼 활성화. (변수로 할당 해주기)

// 백틱이랑 js 같이 써줄 수 있음 className={`button ${isActiveButton ? "activeButton" : "inActiveButton"}`}

// 버튼을 클릭 했을 때 => buttton 요소에 onClick 이벤트 이용
// 입력한 input의 값이 댓글로 새롭게 추가됨

// 입력한 input의 값 => this.state.commentInput

// '사용자가 게시버튼을 누른 댓글들' => state.
// 버튼을 누를 때, state comments 추가한다.
