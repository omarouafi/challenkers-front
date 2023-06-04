import { Button, Modal, Box } from '@mui/material'
import React from 'react'


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    bgcolor: 'background.paper',
    p: 4,
    borderRadius:3,
  '&::-webkit-scrollbar': {
    width: '8px',
    borderRadius: '4px',
    backgroundColor: '#F5F5F5',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '4px',
    backgroundColor: '#1e1e1e',
  },
};
  

const SupprimerCitation = ({isModalOpen,closeModal,handleSupprimerCitation,citation,setCitationToRemove}) => {
    
  
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSupprimerCitation(citation.id)
        closeModal()
      };
    const handleCancel = (e) => {
        setCitationToRemove(null)
        closeModal()
      };

    return (
        <Modal open={isModalOpen} onClose={closeModal}>
        <Box sx={style}>
          <h2>Confirmation</h2>
          <p>Êtes-vous sûr de vouloir supprimer cette citation ?</p>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Confirmer
          </Button>
          <Button sx={{ marginLeft: "5px" }} variant="outlined" color="primary" onClick={handleCancel}>
            Annuler
          </Button>
        </Box>
      </Modal>
    )
}

export default SupprimerCitation