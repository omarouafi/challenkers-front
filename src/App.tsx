import React, { useEffect, useState } from 'react';
import './App.css';
import CitationBloc from './components/citation-bloc/citation-bloc.component';
import { useDispatch, useSelector } from 'react-redux'
import { getRandomCitation, getRandomKaamelottCitation,getCitations, createCitation, updateCitation, deleteCitation } from './redux/citation/citation.actions';
import { Button, Card, IconButton,CircularProgress, Table, TableBody, TableCell, TableContainer, TableRow, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import { Add, Delete, Edit, Search, Visibility } from '@mui/icons-material';
import AjouterCitation from './components/ajouter-citation/ajouter-citation.component';
import EditCitation from './components/edit-citation/edit-citation.component';
import SupprimerCitation from './components/supprimer-citation/supprimer-citation';

function App() {

  const dispatch = useDispatch();

  const {citation,loading,citations} = useSelector((state:any) => state.citationReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [timer, setTimer] = useState(null);
  const [citationEdit, setCitationEdit] = useState(null)
  const [citationToRemove, setCitationToRemove] = useState(null);


  const theme = createTheme({
    palette: {
      primary: {
        main: '#1e1e1e',
      },
    },
  });
  

  useEffect(() => {
    dispatch<any>(getRandomCitation()); 
    dispatch<any>(getCitations()); 
    
  }, [dispatch])
  
  const handleMyCitationsClick = () => {
    dispatch<any>(getRandomCitation()); 
  };

  const handleKaamelottCitationsClick = () => {
    dispatch<any>(getRandomKaamelottCitation())
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const closeRemoveModal = () => {
    setIsRemoveModalOpen(false);
  };


  const handleAddCitation = (newCitation:any) => {
    dispatch<any>(createCitation(newCitation)).then(() => {
      dispatch<any>(getCitations());
    });
  };
  const handleEditCitation = (newCitation:any) => {
    dispatch<any>(updateCitation(newCitation)).then(() => {
      dispatch<any>(getCitations());
    });
  };
  
  const handleRemoveCitation = (id:number) => {
    dispatch<any>(deleteCitation(id)).then(() => {
      dispatch<any>(getCitations());
    });
  };

  
  const handleSearchChange = (e:any) => {
    const { value } = e.target;
    clearTimeout(timer);
    setSearchValue(value);
    const newTimer = setTimeout(() => {
      dispatch<any>(getCitations(value));
    }, 600);

    setTimer(newTimer);
  };

  const handleOpenEdit = (citation:any) => {
    setCitationEdit(citation)
    setIsEditModalOpen(true);
  }
  const handleOpenRemove = (citation:any) => {
    setCitationToRemove(citation)
    setIsRemoveModalOpen(true);
  }


return (
  <ThemeProvider theme={theme}>

  
  <div className="App">
    <h1>Citations</h1>
    <CitationBloc citation={citation} />
    <section style={{ marginTop: '20px' }}>
      <Typography variant="h6" component="h2" style={{ marginBottom: '10px' }}>
        Afficher une autre citation
      </Typography>
      <div className='generer-citations-buttons' >
      <Button
        variant="contained"
        color="primary"
        startIcon={<Visibility />}
        onClick={handleMyCitationsClick}
        style={{ marginRight: '10px',backgroundColor: '#1e1e1e',borderColor: '#1e1e1e' }}
        >
        Parmi mes citations
      </Button>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<Visibility />}
        onClick={handleKaamelottCitationsClick}
        style={{ borderColor: '#1e1e1e', color:'#1e1e1e' }}
        
      >
        Parmi les citations de Kaamelott
      </Button>
      </div>
    </section>

    <section style={{ marginTop: '20px' }}>
  <Typography variant="h6" component="h2" style={{ marginBottom: '10px' }}>
    Mes Citations
  </Typography>
  <div className='cherche-citation'>
    <Button onClick={openModal} variant="contained" color="primary" startIcon={<Add />} style={{ marginRight: '10px', backgroundColor: '#1e1e1e', borderColor: '#1e1e1e' }}>
      Ajouter une citation
    </Button>
    <AjouterCitation handleAddCitation={handleAddCitation} isModalOpen={isModalOpen} closeModal={closeModal} />
    <EditCitation handleEditCitation={handleEditCitation} isModalOpen={isEditModalOpen} closeModal={closeEditModal} citation={citationEdit} />
    <SupprimerCitation handleSupprimerCitation={handleRemoveCitation} isModalOpen={isRemoveModalOpen} closeModal={closeRemoveModal} citation={citationToRemove} setCitationToRemove={setCitationToRemove} />
    <TextField
  variant="outlined"
  placeholder="Rechercher dans mes citations"
  style={{ flex: 1 }}
  InputProps={{
    endAdornment: <Search />,
    classes: {
      notchedOutline: 'custom-notched-outline',
    },
  }}
  inputProps={{
    style: {
      borderColor: '#1e1e1e',
    },
  }}
  value={searchValue}
  onChange={handleSearchChange}
/>
  </div>

  <Card 
        sx={{
          backgroundColor: '#f8f8f8',
          boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.1)',
          borderRadius: 3,
        }}
  >
 <TableContainer>
  <Table>
    <TableBody>
    {loading ? <CircularProgress /> :  <> {citations.map((item: any, index: number) => (
        <TableRow key={index}>
          <TableCell style={{ textAlign: 'center' }}>{item.citation}</TableCell>
          <TableCell>
          <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton onClick={() => handleOpenEdit(item)} color="primary" aria-label="Edit">
                <Edit style={{ color: '#1e1e1e' }} />
              </IconButton>
              <IconButton onClick={() => handleOpenRemove(item)} color="secondary" aria-label="Delete">
                <Delete style={{ color: '#1e1e1e' }} />
              </IconButton>
            </div>
          </TableCell>
        </TableRow>
      ))} </> }
    
    </TableBody>
  </Table>
</TableContainer>

  </Card>
</section>

  </div>
  </ThemeProvider>
);
}

export default App;
