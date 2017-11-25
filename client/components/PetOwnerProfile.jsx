import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ProfileHeader from './ProfileHeader.jsx';
import SearchResults from './SearchResults.jsx';

const PetOwnerProfile = (props) => {
  return (
    <MuiThemeProvider>
      <div>
        <ProfileHeader onLogOut={props.onLogOut} />
        <Subheader>Welcome back, {props.user.username} and {props.user.pet}!</Subheader>
        <Divider />
        <div>
          <img alt="" src={props.user.profileImg} style={{ maxHeight: 300 }} />
          <SearchResults petOwnerId={props.user._id} />
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default PetOwnerProfile;
