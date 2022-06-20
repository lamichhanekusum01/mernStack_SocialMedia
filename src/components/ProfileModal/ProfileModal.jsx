import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ModalOpened,setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="65"
      opened={ModalOpened}
      onClose={() => setModalOpened(false)}
    >
     <form  className='infoForm'>
        <h3>Your Info</h3>
        <div>
          <input type="text" className="infoInput" name="FirstName" placeholder='FirstName' />
          <input type="text" className="infoInput" name="LastName" placeholder='LastName' />
        </div>
        <div><input type="text" className="infoInput" name="works at" placeholder="Works at"/></div>
        <div><input type="text" className="infoInput" name="lives in" placeholder="lives in"/>
        <input type="text" className="infoInput" name="country" placeholder="country"/></div>
        <div>
          <input type="text" className='infoInput' name='relationshipStatus' placeholder='relationship status'/>
        </div>
        <div>
          Profile Image
          <input type='file' name="profileImage"/>
          Cover Image
          <input type='file' name="coverImage"/>
        </div>
         <button className="button lg-button">Update</button>
     </form>
    </Modal>
  );
}
export default ProfileModal;