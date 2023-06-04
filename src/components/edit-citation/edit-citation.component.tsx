import { Button, Modal, TextField,Box } from '@mui/material'
import React, { useEffect, useState } from 'react'


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    "overflow-y": 'scroll',
    bgcolor: 'background.paper',
    boxShadow: 24,
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
  

const EditCitation = ({isModalOpen,closeModal,handleEditCitation,citation}) => {
    const [formData, setFormData] = useState({
      ...citation
    });

    useEffect(() => {
      if(citation){
        setFormData(citation) 
      }
    },[citation])
   

  
    const handleSubmit = (e) => {
        e.preventDefault();
        handleEditCitation(formData)
        closeModal()
      };

    return (
        <Modal open={isModalOpen} onClose={closeModal}>
        <Box sx={style}>
          <h2>Modifier une citation</h2>
          <form onSubmit={handleSubmit}>
          <TextField
              label="Citation"
              value={formData.citation}
              onChange={(e:any) => setFormData({ ...formData, citation: e.target.value })}
              fullWidth
              margin="normal"
              variant="outlined"
              multiline={true}
              minRows={3}
            />
            <TextField
              label="Auteur"
              value={formData.auteur}
              onChange={(e) => setFormData({ ...formData, auteur: e.target.value })}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Acteur"
              value={formData.acteur}
              onChange={(e) => setFormData({ ...formData, acteur: e.target.value })}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Personnage"
              value={formData.personnage}
              onChange={(e) => setFormData({ ...formData, personnage: e.target.value })}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Saison"
              value={formData.saison}
              onChange={(e) => setFormData({ ...formData, saison: e.target.value })}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Episode"
              value={formData.episode}
              onChange={(e) => setFormData({ ...formData, episode: e.target.value })}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
              Modifier
            </Button>
            <Button sx={{ marginLeft: "5px" }} variant="outlined" color="primary" onClick={closeModal}>
              Annuler
            </Button>
          </form>
        </Box>
      </Modal>
    )
}

export default EditCitation