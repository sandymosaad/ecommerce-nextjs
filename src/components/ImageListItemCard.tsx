// ImageListItemCard.tsx
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface ImageListItemCardProps {
  item: {
    img: string;
    title: string;
    category: string;
  };
}
export default function ImageListItemCard({ item }: ImageListItemCardProps) {
  return (
    <ImageListItem>
      <Box
        sx={{
          width: '100%',
          height: 200, 
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 2,
          '&:hover img': {
            transform: 'scale(1.05)',
          },
        }}
      >
        {/* Image */}
        <Image
          src={item.img}
          alt={item.title}
          fill
          style={{
            objectFit: 'cover',
            transition: '0.3s',
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.4)',
            color: 'white',
            textAlign: 'center',
            px: 1,
          }}
        >
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="body2">{item.category}</Typography>
        </Box>
      </Box>
    </ImageListItem>
  );
}