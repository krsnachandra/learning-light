import React from 'react';

function NewReview () {
  return <div>
    <h1>Rate and review this course</h1>
    <form action="/review" method="post">
          Rating<br/>
            <select name="rate">
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          <br/>
          <br/>
          Review<br/><textarea type="text" name="review" cols="80" rows="6"></textarea><br />
        <input type="submit" value="Submit" />
      </form>
  </div>;
}

export default NewReview;
