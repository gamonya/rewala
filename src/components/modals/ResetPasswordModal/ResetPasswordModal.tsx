import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import './confirmCodeModal.css';

import ResetPasswordForm from '../../forms/ResetPasswordForm/ResetPasswordForm';

const ResetPasswordModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
      <section>
        <Button variant="outlined" onClick={handleOpen}>
         forgot password?
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div className='confirm-code'>
           <h2>Rewala</h2>
            {/* FORM */}
            <ResetPasswordForm />
          {/*  */}
            <Button variant="outlined" color='primary' onClick={handleClose}>
              LOG IN
            </Button>
          </div>
        </Modal>
      </section>
    );
};

export default ResetPasswordModal;
