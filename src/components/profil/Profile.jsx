import Header from './Header';
import MemberList from './MemberList';
import '../../profil.css';

function Profile() {
  return (
    <>
    <div className="container">
      <Header />
      <MemberList />
    </div>
    </>
  )
}

export default Profile;