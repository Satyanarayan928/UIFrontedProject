import * as React from "react"; 
import Stepper from '@mui/material/Stepper'; 
import Step from '@mui/material/Step'; 
import StepLabel from '@mui/material/StepLabel'; 
import Button from '@mui/material/Button'; 
import { Box } from "@mui/material"; 


function Header() {
    return <h1>Welcome to My Site</h1>;
}

function Footer() {
    return <p>© 2024 My Company</p>;
}

const steps = ['Go to geeksforgeeks.org', 
    'Select Practice from navbar', 'Do the Problem of the Day']; 

function ProductDetails() {

    const [activeStepCount, setActiveStepCount] = React.useState(0); 
    const [skip, setSkip] = React.useState(new Set()); 

    const optionalStep = (step) => { 
        return step === 1; 
    }; 
  
    const skipStep = (step) => { 
        return skip.has(step); 
    };

    const handleStepNext = () => { 
        let newSkipped = skip; 
        if (skipStep(activeStepCount)) { 
            newSkipped = new Set(newSkipped.values()); 
            newSkipped.delete(activeStepCount); 
        } 
  
        setActiveStepCount((prevActiveStep) => prevActiveStep + 1); 
        setSkip(newSkipped); 
    }; 
  
    const handleStepBack = () => { 
        setActiveStepCount((prevActiveStep) => prevActiveStep - 1); 
    }; 
  
    const handleStepSkip = () => { 
  
        setActiveStepCount((prevActiveStep) => prevActiveStep + 1); 
        setSkip((prevSkipped) => { 
            const newSkipped = new Set(prevSkipped.values()); 
            newSkipped.add(activeStepCount); 
            return newSkipped; 
        }); 
    }; 
  
    const handleStepReset = () => { 
        setActiveStepCount(0); 
    }; 

    return (
        <center> 
        <div> 
            <h1 style={{ color: "green" }}>GeeksforGeeks</h1> 
            <h2>React MUI Stepper navigation</h2> 
        </div> 
        <div style={{ width: "50%" }}> 
            <Stepper activeStep={activeStepCount}> 
                {steps.map((label, index) => { 
                    const stepProps = {}; 
                    const labelProps = {}; 
                    if (optionalStep(index)) { 
                        labelProps.optional = ( 
                            <h3 variant="body1">Optional</h3> 
                        ); 
                    } 
                    if (skipStep(index)) { 
                        stepProps.completed = false; 
                    } 
                    return ( 
                        <Step key={label} {...stepProps}> 
                            <StepLabel {...labelProps}> 
                                {label} 
                            </StepLabel> 
                        </Step> 
                    ); 
                })} 
            </Stepper> 
            {activeStepCount === steps.length ? ( 
                <div> 
                    <h3 sx={{ mt: 4, mb: 2 }}> 
                        All done! 
                    </h3> 
                    <Box sx={{ display: 'flex',  
                        flexDirection: 'row', pt: 4 }}> 
                        <Box sx={{ flex: '1 1 auto' }} /> 
                        <Button onClick={handleStepReset}>Reset</Button> 
                    </Box> 
                </div> 
            ) : ( 
                <div> 
                    <h3 sx={{ mt: 2, mb: 1 }}>Step  
                        {activeStepCount + 1}</h3> 
                    <Box sx={{ display: 'flex', flexDirection: 'row',  
                        pt: 2 }}> 
                        <Button 
                            color="primary"
                            disabled={activeStepCount === 0} 
                            onClick={handleStepBack} 
                            sx={{ mr: 1 }} 
                        > 
                            Previous 
                        </Button> 
                        <Box sx={{ flex: '1 1 auto' }} /> 
                        {optionalStep(activeStepCount) && ( 
                            <Button color="primary" 
                                onClick={handleStepSkip}  
                                sx={{ mr: 1 }}> 
                                Skip 
                            </Button> 
                        )} 

                        <Button onClick={handleStepNext}> 
                            {activeStepCount === steps.length - 1 ?  
                                'Done' : 'Next'} 
                        </Button> 
                    </Box> 
                </div> 
            )} 
        </div> 
    </center> 
    );
}

export default ProductDetails;
