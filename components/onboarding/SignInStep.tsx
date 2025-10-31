import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface SignInStepProps {
    onNext: () => void;
    onBack: () => void;
    updateData: (data: { email: string }) => void;
    data: { email: string };
}

const SignInStep: React.FC<SignInStepProps> = ({ onNext, onBack, updateData, data }) => {
    const [email, setEmail] = useState(data.email);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleNext = () => {
        if (isEmailValid) {
            updateData({ email });
            onNext();
        }
    };
    
    return (
        <div className="w-full max-w-md mx-auto flex flex-col justify-center h-full text-center">
            <header>
                <h1 className="text-3xl font-bold text-foreground">Sign In to Continue</h1>
                <p className="text-muted-foreground mt-2">Connect your email account to get started with PostaGate.</p>
            </header>
            <main className="mt-8 flex-1">
                 <div className="space-y-6 text-left">
                    <Input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 text-base backdrop-blur-xl bg-card/50"
                        autoFocus
                    />
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-border"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-background px-2 text-sm text-muted-foreground">or sign in with</span>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <Button variant="secondary" size="icon" className="h-14 w-14 rounded-full backdrop-blur-xl bg-card/50"><i className="fa-brands fa-google text-2xl"></i></Button>
                        <Button variant="secondary" size="icon" className="h-14 w-14 rounded-full backdrop-blur-xl bg-card/50"><i className="fa-brands fa-windows text-2xl"></i></Button>
                        <Button variant="secondary" size="icon" className="h-14 w-14 rounded-full backdrop-blur-xl bg-card/50"><i className="fa-solid fa-envelope text-2xl"></i></Button>
                    </div>
                    <p className="text-center text-sm text-muted-foreground pt-4">I already have an account → <button className="text-primary hover:underline">Skip</button></p>
                </div>
            </main>
             <footer className="flex items-center justify-between mt-8">
                <Button variant="ghost" onClick={onBack} className="rounded-full">Back</Button>
                <Button onClick={handleNext} disabled={!isEmailValid} className="rounded-full backdrop-blur-xl bg-primary/80 border border-white/20 shadow-lg">Next</Button>
            </footer>
        </div>
    );
};

export default SignInStep;
