import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function ContactItem({onClick, icons, title, content}) {

  const [open, setOpen] = useState(false); // snankbar 열림 여부

  const copyText = ()=>{
    if(content){
      navigator.clipboard.writeText(content)
      .then(()=>{
        setOpen(true);
      })
      .catch(()=>{
        alert('복사에 실패했습니다.')
      })
    }
  }

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <>
      <div className='contact' onClick={onClick || copyText}>
        <div className='contactIcon'>
          {icons}
        </div>
        <div className='contactText'>
          <div className='titleCopy'>
            <p>{title}</p>
            {(!onClick && content) && <span className='copyHint'>copy</span>}
            {(onClick && content) && <span className='copyHint'>visit</span>}
          </div>
          <b>{content}</b>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%', fontSize: '1rem', padding: '16px 45px', borderRadius: '12px', minWidth: '300px'}}>
          {`${content} 복사되었습니다.`}
        </Alert>
      </Snackbar>
    </>
  )
}

export default ContactItem