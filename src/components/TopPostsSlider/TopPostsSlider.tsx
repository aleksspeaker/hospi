import React from 'react';
import ReactSwipe from 'react-swipe';
import { Author } from '../Author/Author';
import ControlArrows from '../ControlArrows/ControlArrows';

const TopPostsSlider = ({ topPosts }) => {
  let ReactSwipePosts;

  return (
    <section className="Posts-slider">
      <ReactSwipe style={sliderStyles} ref={(el) => (ReactSwipePosts = el)}>
        {topPosts.map((item) => {
          return (
            <div className="Posts-slider__slide" key={item.id}>
              <h3>{item.postTitle}</h3>
              <Author
                name={item.author.name}
                avatarURL={
                  'https://res.cloudinary.com/dops-digital/image/upload/v1552564163/Hospitality%20Hub/user-avatar-1.jpg'
                }
              />
            </div>
          );
        })}
      </ReactSwipe>
      <ControlArrows
        classes={'Control-arrows_gray'}
        onNext={() => {
          ReactSwipePosts.next();
        }}
        onPrev={() => {
          ReactSwipePosts.prev();
        }}
      />
    </section>
  );
};

const mockPostsObj = {
  topPosts: [
    {
      author: {
        avatarURL: '../../../assets/images/user-avatar-1.jpg',
        name: 'Jessica Lee',
      },
      id: 0,
      postTitle: 'What Makes Good Hospitality In Bars?',
    },
    {
      author: {
        avatarURL: '../../../assets/images/user-avatar-1.jpg',
        name: 'John Boe',
      },
      id: 1,
      postTitle: 'Top Hotel Names of 2019',
    },
    {
      author: {
        avatarURL: '../../../assets/images/user-avatar-1.jpg',
        name: 'Lola Key',
      },
      id: 2,
      postTitle: 'Must watch video courses for bartenders',
    },
  ],
};

TopPostsSlider.defaultProps = {
  topPosts: mockPostsObj.topPosts,
};

const sliderStyles = {
  child: {
    float: 'left',
    position: 'relative',
    transitionProperty: 'transform',
    width: '100%',
  },
  container: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    visibility: 'hidden',
  },
  wrapper: {
    height: '100%',
    position: 'relative',
  },
};

export default TopPostsSlider;
