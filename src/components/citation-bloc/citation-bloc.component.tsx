import React, { useEffect, useState } from 'react';
import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { StarOutline, Star } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { toggleCitationFavourite } from '../../redux/citation/citation.actions';

interface CitationProps {
  citation: any;
}

const CitationBloc = ({ citation }: CitationProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  console.log(citation.favoris)
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    dispatch<any>(toggleCitationFavourite(citation));

  };
  useEffect(() => {
    setIsFavorite(citation.favoris);
  }, [citation]);
  
  return (
    <Card
      sx={{
        backgroundColor: '#f8f8f8',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 3,
      }}
    >
      <CardContent>
        <h2>
          <q>{citation.citation}</q>
        </h2>
        <div>
          <Typography variant="body1" component="p" sx={{}}></Typography>
          <div style={{ textAlign: 'right', marginTop: '10px' }}>
            <p>
              {citation.personnage} - "{citation.episode}"
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '8px',
              }}
            >
              <IconButton
                onClick={handleFavoriteClick}
                color="primary"
                aria-label="Add to favorites"
              >
                {isFavorite ? (
                  <Star sx={{ color: '#000' }} />
                ) : (
                  <StarOutline sx={{ color: '#000' }} />
                )}
              </IconButton>
              <Typography variant="body2" sx={{ marginLeft: '4px' }}>
                Mettre en favoris
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CitationBloc;
