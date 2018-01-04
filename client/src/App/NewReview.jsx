import React from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

function NewReview () {
  return (
  <div>
    <h1>Rate and review this course</h1>
    <form action="/review" method="post">
          Rating<br/>
        <Rater total={5} rating={0} />
          <br/>
          <br/>
          Review<br/><textarea type="text" name="review" cols="80" rows="6"></textarea><br />
        <input type="submit" value="Submit" />
      </form>
</div>);
}

export default NewReview;
