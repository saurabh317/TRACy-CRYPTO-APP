import React, { useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { fetchAllCoins } from '../../store/coinStore';
import { useDispatch } from 'react-redux';
import { CryptoState } from '../../CryptoContext';

// Keyframes for spin animation
const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component for the spinning icon
const SpinningIcon = styled(RefreshIcon)(({ isSpinning }) => ({
  animation: isSpinning ? `${spinAnimation} 1s linear infinite` : 'none',
}));

const RefreshButton = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const dispatch = useDispatch()
  const { currency } = CryptoState();

  const handleClick = () => {
    setIsSpinning(true);
    dispatch(fetchAllCoins({ currency }))
    // Simulate some action (e.g., refreshing data)
    setTimeout(() => {
      setIsSpinning(false);
    }, 2000); // Stop spinning after 2 seconds
  };

  return (
    <IconButton onClick={handleClick}>
      <SpinningIcon isSpinning={isSpinning ? 1 : 0} />
    </IconButton>
  );
};

export default RefreshButton;