import React, { useState } from 'react';
import { Modal, Box, Typography, Button, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import toast, { Toaster } from 'react-hot-toast';

const SubscriptionPlans = () => {
    const [open, setOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [paymentOpen, setPaymentOpen] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');

    const plans = [
        {
            name: 'Basic',
            originalPrice: '₹6499',
            discountedPrice: '₹5699',
            specialOffer: '₹3989.3',
            features: ['You can add system', 'You can delete system'],
            popular: false,
        },
        {
            name: 'Pinnacle',
            originalPrice: '₹9999',
            discountedPrice: '₹7599',
            specialOffer: '₹5319.3',
            features: ['You can add system', 'You can delete system'],
            popular: true,
        },
    ];

    const handleOpen = (plan) => {
        setSelectedPlan(plan);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setPaymentOpen(false);
        setPaymentMethod('');
    };

    const handleProceedToPayment = () => {
        if (paymentMethod) {
            setOpen(false);
            setPaymentOpen(true);
        } else {
            toast.error('Please select a payment method.');
        }
    };

    const handlePaymentSelection = (event) => {
        setPaymentMethod(event.target.value);
    };
    const confirmPayment = () => {
        toast.success("Payment Done");
        setPaymentOpen(false);
    }

    return (
        <div className="min-h-screen dark:bg-gray-800 dark:text-white flex flex-col items-center py-10">
            <div className="w-full max-w-5xl p-6 mt-10">
                <h2 className="text-4xl font-bold mb-8 text-center">Compare plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`border  cursor-pointer rounded-lg p-6 relative ${plan.popular ? 'border-green-500' : 'border-gray-700'
                                }`}
                        >
                            {plan.popular && (
                                <span className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                                    Popular
                                </span>
                            )}
                            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-2">{plan.discountedPrice}</div>
                            <div className="text-gray-400 line-through">{plan.originalPrice}</div>
                            <div className="bg-green-500 text-white px-4 py-2 rounded-lg my-4">
                                Special Offer: {plan.specialOffer}
                                <br />
                                <span className="text-sm">Use coupon: EXTRA30</span>
                            </div>
                            <button onClick={() => handleOpen(plan)} className="bg-pink-500 text-white px-4 py-2 rounded-lg w-full">
                                Start Your Journey
                            </button>
                            <ul className="mt-4 space-y-2">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <span className="text-green-500 mr-2">✔️</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <div className=' border-b flex justify-between pb-5'>
                        <h1 className=' text-2xl font-bold'>{selectedPlan?.name} Plan Details</h1>
                        <button onClick={handleClose}><ClearIcon/></button>
                    </div>
                    <div className=' border-b py-5'>
                        <h1 className=' text-xl'>Price: <span className=' font-bold text-blue-600'>{selectedPlan?.discountedPrice}</span></h1>
    
                        <h1 className=' text-xl'>Special Offer: <span className=' font-bold text-green-600'>{selectedPlan?.specialOffer}</span></h1>
                    </div>

                    <div className=' mt-5'><h1 className=' font-xl font-bold'>Select Payment Method</h1></div>
                    <RadioGroup
                        aria-labelledby="payment-method-group"
                        name="payment-method-group"
                        value={paymentMethod}
                        onChange={handlePaymentSelection}
                        sx={{ mt: 2 }}
                    >
                        <FormControlLabel value="google-pay" control={<Radio />} label="Google Pay" />
                        <FormControlLabel value="phone-pe" control={<Radio />} label="PhonePe" />
                        <FormControlLabel value="paytm" control={<Radio />} label="Paytm" />
                        <FormControlLabel value="bank" control={<Radio />} label="Bank Transfer" />
                    </RadioGroup>

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 4 }}
                        fullWidth
                        onClick={handleProceedToPayment}
                    >
                        Proceed to Payment
                    </Button>
                </Box>
            </Modal>
            <Modal
                open={paymentOpen}
                onClose={handleClose}
                aria-labelledby="payment-details-modal-title"
                aria-describedby="payment-details-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography id="payment-details-modal-title" variant="h6" component="h2">
                        Enter {paymentMethod === 'bank' ? 'Card Details' : 'UPI Details'}
                    </Typography>

                    {paymentMethod === 'bank' ? (
                        <>
                            <TextField
                                fullWidth
                                label="Card Number"
                                variant="outlined"
                                sx={{ mt: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Expiry Date"
                                variant="outlined"
                                sx={{ mt: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="CVV"
                                variant="outlined"
                                sx={{ mt: 2 }}
                            />
                        </>
                    ) : (
                        <TextField
                            fullWidth
                            label="UPI ID"
                            variant="outlined"
                            sx={{ mt: 2 }}
                        />
                    )}

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 4 }}
                        fullWidth
                        onClick={confirmPayment}
                    >
                        Confirm Payment
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default SubscriptionPlans;
