import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, IconButton, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BasicModal = ({ open, onClose }) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSend = () => {
        // Handle send logic here
        console.log('Email sent to:', email);
        setEmail(''); // Clear the input field after sending
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '50%',
                bgcolor: 'background.paper',
                borderRadius: 1,
                boxShadow: 24,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <IconButton
                    onClick={onClose}
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                    <CloseIcon />
                </IconButton>
                <Typography variant="h6" component="h2">
                    Let us send you a presentation
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    label="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleSend}
                                    edge="end"
                                >
                                    <ArrowForwardIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </Modal>
    );
};

export default BasicModal;
