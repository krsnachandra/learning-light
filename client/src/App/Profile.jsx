import React from 'react';


function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <p>Update Your Profile</p>
      <form action="/progress" method="post">
          Email <input type="text" name="email" placeholder="Email" /><br />
          First name<input type="text" name="fname" placeholder="First name" /><br />
          Last name<input type="text" name="lname" placeholder="Last name" /><br />
          Location<input type="text" name="location" placeholder="Location" /><br />
          Why are you learning to code?<input type="text" name="motivation" placeholder="" /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Profile;
