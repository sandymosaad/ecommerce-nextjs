import { Box, Button, Typography, Paper } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import Image from "next/image";
import StarIcon from '@mui/icons-material/Star'; 


interface FeaturedAndTrendingCardprops {
    item: {
        id?: number;
        img: string;
        title: string;
        rate?: number;
        price: number ;
        category?: string;
    }
}
export default function FeaturedAndTrendingCard({item}:FeaturedAndTrendingCardprops) {
  return (
    <ImageListItem 
      component={Paper} 
      elevation={2}
      sx={{
        backgroundColor: 'white',
        m: 2,
        borderRadius: 4, 
        overflow: 'hidden', 
        transition: '0.3s',
        '&:hover': {
          boxShadow: 6, 
        }
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 180, 
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image
          src={item.img}
          alt={item.title}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
          quality={95}
          unoptimized
          style={{
            objectFit: 'cover',
            transition: '0.5s ease',
          }}
        />
        
        <Box sx={{
          position: 'absolute',
          top: 10,
          left: 10,
          backgroundColor: 'rgba(255,255,255,0.9)',
          px: 1,
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5
        }}>
          <StarIcon sx={{ fontSize: 14, color: '#faaf00' }} />
          <Typography variant="caption" fontWeight="bold">{item.rate}</Typography>
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1" fontWeight="700" noWrap>
          {item.title}
        </Typography>

        <Box sx={{ 
          mt: 2, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <Typography variant="h6" color="primary.main" fontWeight="bold">
            ${item.price.toFixed(2)}
          </Typography>
          
          <Button 
            variant="contained" 
            size="small" 
            disableElevation
            sx={{ 
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 'bold',
              px: 2
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </ImageListItem>
  );
}


